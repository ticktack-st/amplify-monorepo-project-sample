// https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/cognito-idp/client/describe_user_pool.html

export interface DescribeUserPoolResponse {
  UserPool?: UserPoolType
}

export interface UserPoolType {
  AccountRecoverySetting?: AccountRecoverySettingType
  AdminCreateUserConfig?: AdminCreateUserConfigType
  AliasAttributes?: ('phone_number' | 'email' | 'preferred_username')[]
  Arn?: string
  AutoVerifiedAttributes?: ('email' | 'phone_number')[]
  CreationDate?: string
  CustomDomain?: string
  DeviceConfiguration?: DeviceConfigurationType
  Domain?: string
  EmailConfiguration?: EmailConfigurationType
  EmailConfigurationFailure?: string
  EmailVerificationMessage?: string
  EmailVerificationSubject?: string
  EstimatedNumberOfUsers?: number
  Id?: string
  LambdaConfig?: LambdaConfigType
  LastModifiedDate?: string
  MfaConfiguration?: 'OFF' | 'ON' | 'OPTIONAL'
  Name?: string
  Policies?: UserPoolPolicyType
  SchemaAttributes?: SchemaAttributeType[]
  SmsAuthenticationMessage?: string
  SmsConfiguration?: SmsConfigurationType
  SmsConfigurationFailure?: string
  SmsVerificationMessage?: string
  Status?: 'Enabled' | 'Disabled'
  UsernameAttributes?: ('phone_number' | 'email')[]
  UsernameConfiguration?: UsernameConfigurationType
  UserPoolAddOns?: UserPoolAddOnsType
  UserPoolTags?: { [key: string]: string }
  VerificationMessageTemplate?: VerificationMessageTemplateType
}

export interface UserPoolPolicyType {
  PasswordPolicy?: PasswordPolicyType
}

export interface PasswordPolicyType {
  MinimumLength?: number
  RequireLowercase?: boolean
  RequireNumbers?: boolean
  RequireSymbols?: boolean
  RequireUppercase?: boolean
  TemporaryPasswordValidityDays?: number
}

export interface LambdaConfigType {
  CreateAuthChallenge?: string
  CustomEmailSender?: CustomEmailSenderType
  CustomMessage?: string
  CustomSMSSender?: CustomSMSSenderType
  DefineAuthChallenge?: string
  KMSKeyID?: string
  PostAuthentication?: string
  PostConfirmation?: string
  PreAuthentication?: string
  PreSignUp?: string
  PreTokenGeneration?: string
  UserMigration?: string
  VerifyAuthChallengeResponse?: string
}

export interface CustomSMSSenderType {
  LambdaArn?: string
  LambdaVersion?: string
}

export interface CustomEmailSenderType {
  LambdaArn?: string
  LambdaVersion?: string
}

export interface SchemaAttributeType {
  AttributeDataType?: 'String' | 'Number' | 'DateTime' | 'Boolean'
  DeveloperOnlyAttribute?: boolean
  Mutable?: boolean
  Name?: string
  NumberAttributeConstraints?: NumberAttributeConstraintsType
  Required?: boolean
  StringAttributeConstraints?: StringAttributeConstraintsType
}

export interface NumberAttributeConstraintsType {
  MaxValue?: string
  MinValue?: string
}

export interface StringAttributeConstraintsType {
  MaxLength?: string
  MinLength?: string
}

export interface VerificationMessageTemplateType {
  DefaultEmailOption?: 'CONFIRM_WITH_LINK' | 'CONFIRM_WITH_CODE'
  EmailMessage?: string
  EmailMessageByLink?: string
  EmailSubject?: string
  EmailSubjectByLink?: string
  SmsMessage?: string
}

export interface DeviceConfigurationType {
  ChallengeRequiredOnNewDevice?: boolean
  DeviceOnlyRememberedOnUserPrompt?: boolean
}

export interface EmailConfigurationType {
  ConfigurationSet?: string
  EmailSendingAccount?: 'COGNITO_DEFAULT' | 'DEVELOPER'
  From?: string
  ReplyToEmailAddress?: string
  SourceArn?: string
}

export interface SmsConfigurationType {
  ExternalId?: string
  SnsCallerArn?: string
}

export interface AdminCreateUserConfigType {
  AllowAdminCreateUserOnly?: boolean
  InviteMessageTemplate?: MessageTemplateType
  UnusedAccountValidityDays?: number
}

export interface MessageTemplateType {
  EmailMessage?: string
  EmailSubject?: string
  SMSMessage?: string
}

export interface UserPoolAddOnsType {
  AdvancedSecurityMode?: 'OFF' | 'AUDIT' | 'ENFORCED'
}

export interface UsernameConfigurationType {
  CaseSensitive?: boolean
}

export interface AccountRecoverySettingType {
  RecoveryMechanisms?: RecoveryOptionType[]
}

export interface RecoveryOptionType {
  Name?: 'verified_email' | 'verified_phone_number' | 'admin_only'
  Priority?: number
}
