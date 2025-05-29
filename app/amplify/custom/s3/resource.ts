import * as cdk from 'aws-cdk-lib'
import { Stack } from 'aws-cdk-lib'
import * as iam from 'aws-cdk-lib/aws-iam'
import * as s3 from 'aws-cdk-lib/aws-s3'

export function defineS3({ stack }: { stack: Stack }) {
  const bucket = new s3.Bucket(stack, 'AmplifyFileUploadTestBucket', {
    bucketName: 'amplify-file-upload-test-bucket-ticktack',
    removalPolicy: cdk.RemovalPolicy.DESTROY,
    autoDeleteObjects: true,
  })
  // const bucketPolicy = new iam.PolicyStatement({
  //   actions: ['s3:PutObject', 's3:GetObject'],
  //   resources: [bucket.arnForObjects('*')],
  //   effect: iam.Effect.ALLOW,
  //   principals: [new iam.AnyPrincipal()],
  // });

  const unauthenticatedRole = iam.Role.fromRoleArn(
    stack,
    'UnauthRole',
    'arn:aws:iam::922848404494:role/service-role/submit-site-s3-access-role'
  )

  bucket.addToResourcePolicy(
    new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      principals: [new iam.ArnPrincipal(unauthenticatedRole.roleArn)],
      actions: ['s3:GetObject', 's3:PutObject'],
      resources: [`${bucket.bucketArn}/*`],
    })
  )
}
