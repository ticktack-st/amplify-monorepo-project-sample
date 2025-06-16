import * as cdk from 'aws-cdk-lib'
import * as cognito from 'aws-cdk-lib/aws-cognito'

/**
 * Cognito User Poolの設定
 */
export interface CognitoConfig {
  userPoolName: string
  clientName: string
  domainPrefix: string
  identityPoolName: string
  callbackUrls: string[]
  logoutUrls: string[]
  passwordPolicy: cognito.PasswordPolicy
  mfaConfig: cognito.Mfa
}

/**
 * 環境別のCognito設定を取得
 */
export function getCognitoConfig(environment: string = 'dev'): CognitoConfig {
  const baseConfig: CognitoConfig = {
    userPoolName: `amplify-monorepo-user-pool-${environment}`,
    clientName: `amplify-monorepo-client-${environment}`,
    domainPrefix: `amplify-monorepo-${environment}`,
    identityPoolName: `amplify-monorepo-identity-pool-${environment}`,
    callbackUrls: [
      'http://localhost:3000/api/auth/callback',
      'https://localhost:3000/api/auth/callback',
    ],
    logoutUrls: ['http://localhost:3000', 'https://localhost:3000'],
    passwordPolicy: {
      minLength: 8,
      requireLowercase: true,
      requireUppercase: true,
      requireDigits: true,
      requireSymbols: true,
    },
    mfaConfig: cognito.Mfa.OPTIONAL,
  }

  // 環境別の設定オーバーライド
  switch (environment) {
    case 'prod':
      return {
        ...baseConfig,
        callbackUrls: ['https://yourdomain.com/api/auth/callback'],
        logoutUrls: ['https://yourdomain.com'],
        mfaConfig: cognito.Mfa.REQUIRED,
      }
    case 'staging':
      return {
        ...baseConfig,
        callbackUrls: ['https://staging.yourdomain.com/api/auth/callback'],
        logoutUrls: ['https://staging.yourdomain.com'],
      }
    default:
      return baseConfig
  }
}

/**
 * Cognito User Poolの標準属性設定
 */
export const standardAttributes: cognito.StandardAttributes = {
  email: {
    required: true,
    mutable: true,
  },
  givenName: {
    required: false,
    mutable: true,
  },
  familyName: {
    required: false,
    mutable: true,
  },
  phoneNumber: {
    required: false,
    mutable: true,
  },
}

/**
 * OAuth設定
 */
export const oAuthSettings: cognito.OAuthSettings = {
  flows: {
    authorizationCodeGrant: true,
    implicitCodeGrant: false,
  },
  scopes: [
    cognito.OAuthScope.EMAIL,
    cognito.OAuthScope.OPENID,
    cognito.OAuthScope.PROFILE,
  ],
}

/**
 * User Pool Client認証フロー設定
 */
export const authFlows: cognito.AuthFlow = {
  adminUserPassword: true,
  userPassword: true,
  userSrp: true,
  custom: true,
}

/**
 * トークンの有効期限設定
 */
export const tokenValidity = {
  refreshToken: cdk.Duration.days(30),
  accessToken: cdk.Duration.hours(1),
  idToken: cdk.Duration.hours(1),
}

/**
 * ユーザー検証設定
 */
export const userVerificationConfig: cognito.UserVerificationConfig = {
  emailSubject: 'Verify your email for our app!',
  emailBody:
    'Thanks for signing up to our app! Your verification code is {####}',
  emailStyle: cognito.VerificationEmailStyle.CODE,
  smsMessage: 'Your verification code is {####}',
}

/**
 * Cognito構築用のヘルパー関数
 */
export class CognitoConstructor {
  /**
   * User Poolを作成
   */
  static createUserPool(
    scope: cdk.Stack,
    id: string,
    config: CognitoConfig
  ): cognito.UserPool {
    return new cognito.UserPool(this, id, {
      userPoolName: config.userPoolName,
      signInAliases: {
        email: true,
        username: true,
      },
      autoVerify: {
        email: true,
      },
      passwordPolicy: config.passwordPolicy,
      accountRecovery: cognito.AccountRecovery.EMAIL_ONLY,
      standardAttributes,
      selfSignUpEnabled: true,
      userVerification: userVerificationConfig,
      mfa: config.mfaConfig,
      mfaSecondFactor: {
        sms: true,
        otp: true,
      },
      removalPolicy: cdk.RemovalPolicy.RETAIN,
    })
  }

  /**
   * User Pool Clientを作成
   */
  static createUserPoolClient(
    scope: cdk.Stack,
    id: string,
    userPool: cognito.UserPool,
    config: CognitoConfig
  ): cognito.UserPoolClient {
    return new cognito.UserPoolClient(this, id, {
      userPool,
      userPoolClientName: config.clientName,
      authFlows,
      oAuth: {
        ...oAuthSettings,
        callbackUrls: config.callbackUrls,
        logoutUrls: config.logoutUrls,
      },
      refreshTokenValidity: tokenValidity.refreshToken,
      accessTokenValidity: tokenValidity.accessToken,
      idTokenValidity: tokenValidity.idToken,
      preventUserExistenceErrors: true,
    })
  }

  /**
   * User Pool Domainを作成
   */
  static createUserPoolDomain(
    scope: cdk.Stack,
    id: string,
    userPool: cognito.UserPool,
    domainPrefix: string
  ): cognito.UserPoolDomain {
    return new cognito.UserPoolDomain(this, id, {
      userPool,
      cognitoDomain: {
        domainPrefix: `${domainPrefix}-${cdk.Stack.of(scope).account}-${
          cdk.Stack.of(scope).region
        }`,
      },
    })
  }

  /**
   * Identity Poolを作成
   */
  static createIdentityPool(
    scope: cdk.Stack,
    id: string,
    userPool: cognito.UserPool,
    userPoolClient: cognito.UserPoolClient,
    identityPoolName: string
  ): cognito.CfnIdentityPool {
    return new cognito.CfnIdentityPool(this, id, {
      identityPoolName,
      allowUnauthenticatedIdentities: false,
      cognitoIdentityProviders: [
        {
          clientId: userPoolClient.userPoolClientId,
          providerName: userPool.userPoolProviderName,
        },
      ],
    })
  }
}
