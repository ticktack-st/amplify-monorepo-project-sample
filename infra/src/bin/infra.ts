#!/usr/bin/env node
import { CognitoStack } from '@/lib/cognito-stack'
import * as cdk from 'aws-cdk-lib'
import 'source-map-support/register'

const app = new cdk.App()
new CognitoStack(app, 'CognitoStackTest', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
})
