import * as cdk from 'aws-cdk-lib'
import * as cognito from 'aws-cdk-lib/aws-cognito'
import { Construct } from 'constructs'
import { CognitoConstructor, getCognitoConfig } from './cognito'

export class CognitoStack extends cdk.Stack {
  public readonly userPool
  public readonly userPoolClient
  public readonly identityPool

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    // 環境設定を取得（コンテキストから取得、デフォルトは'dev'）
    const environment =
      cdk.Stack.of(this).node.tryGetContext('environment') || 'dev'
    const config = getCognitoConfig(environment)

    // User Poolの作成
    this.userPool = CognitoConstructor.createUserPool(this, 'UserPool', config)

    // User Pool Clientの作成
    this.userPoolClient = CognitoConstructor.createUserPoolClient(
      this,
      'UserPoolClient',
      this.userPool,
      config
    )

    // User Pool Domainの作成
    const userPoolDomain = CognitoConstructor.createUserPoolDomain(
      this,
      'UserPoolDomain',
      this.userPool,
      config.domainPrefix
    )

    // Identity Poolの作成
    this.identityPool = CognitoConstructor.createIdentityPool(
      this,
      'IdentityPool',
      this.userPool,
      this.userPoolClient,
      config.identityPoolName
    )

    // 認証済みユーザー用のIAMロール
    const authenticatedRole = new cdk.aws_iam.Role(this, 'AuthenticatedRole', {
      assumedBy: new cdk.aws_iam.FederatedPrincipal(
        'cognito-identity.amazonaws.com',
        {
          StringEquals: {
            'cognito-identity.amazonaws.com:aud': this.identityPool.ref,
          },
          'ForAnyValue:StringLike': {
            'cognito-identity.amazonaws.com:amr': 'authenticated',
          },
        },
        'sts:AssumeRoleWithWebIdentity'
      ),
      managedPolicies: [
        cdk.aws_iam.ManagedPolicy.fromAwsManagedPolicyName(
          'AmazonCognitoPowerUser'
        ),
      ],
    })

    // 未認証ユーザー用のIAMロール
    const unauthenticatedRole = new cdk.aws_iam.Role(
      this,
      'UnauthenticatedRole',
      {
        assumedBy: new cdk.aws_iam.FederatedPrincipal(
          'cognito-identity.amazonaws.com',
          {
            StringEquals: {
              'cognito-identity.amazonaws.com:aud': this.identityPool.ref,
            },
            'ForAnyValue:StringLike': {
              'cognito-identity.amazonaws.com:amr': 'unauthenticated',
            },
          },
          'sts:AssumeRoleWithWebIdentity'
        ),
        managedPolicies: [
          cdk.aws_iam.ManagedPolicy.fromAwsManagedPolicyName(
            'AmazonCognitoUnauthorized'
          ),
        ],
      }
    )

    // Identity PoolにIAMロールをアタッチ
    new cognito.CfnIdentityPoolRoleAttachment(
      this,
      'IdentityPoolRoleAttachment',
      {
        identityPoolId: this.identityPool.ref,
        roles: {
          authenticated: authenticatedRole.roleArn,
          unauthenticated: unauthenticatedRole.roleArn,
        },
      }
    )

    // 出力値
    new cdk.CfnOutput(this, 'UserPoolId', {
      value: this.userPool.userPoolId,
      description: 'Cognito User Pool ID',
    })

    new cdk.CfnOutput(this, 'UserPoolClientId', {
      value: this.userPoolClient.userPoolClientId,
      description: 'Cognito User Pool Client ID',
    })

    new cdk.CfnOutput(this, 'IdentityPoolId', {
      value: this.identityPool.ref,
      description: 'Cognito Identity Pool ID',
    })

    new cdk.CfnOutput(this, 'UserPoolDomainName', {
      value: userPoolDomain.domainName,
      description: 'Cognito User Pool Domain',
    })

    new cdk.CfnOutput(this, 'Region', {
      value: cdk.Stack.of(this).region,
      description: 'AWS Region',
    })
  }
}
