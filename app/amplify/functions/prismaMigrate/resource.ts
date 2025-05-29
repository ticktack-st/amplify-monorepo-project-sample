// import { defineFunction } from '@aws-amplify/backend';
import { Runtime } from 'aws-cdk-lib/aws-lambda'
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs'
// import * as ec2 from 'aws-cdk-lib/aws-ec2';
// import { Vpc } from 'aws-cdk-lib/aws-ec2';
import { Duration } from 'aws-cdk-lib'
// import * as path from 'path';
// import { Stack, StackProps } from 'aws-cdk-lib';
// import { Construct } from 'constructs';
import { Stack } from 'aws-cdk-lib'
import * as ec2 from 'aws-cdk-lib/aws-ec2'
import { SecurityGroup, SubnetType } from 'aws-cdk-lib/aws-ec2'

// export const prismaMigrateHandler = defineFunction((scope) => {

//   return new NodejsFunction(scope, 'prismaMigrate', {
//     entry: './handler.ts',
//     handler: 'handler',
//     runtime: Runtime.NODEJS_22_X,
//     timeout: Duration.seconds(20),
//     functionName: 'prisma-migrate',
//     memorySize: 128,
//     // vpc,
//     // vpcSubnets: privateSubnets,
//     // securityGroups: [lambdaSecurityGroup],
//     environment: {
//       PRISMA_QUERY_ENGINE_LIBRARY: "./libquery_engine-rhel-openssl-3.0.x.so.node"
//     },
//     bundling: {
//       nodeModules: ["prisma", "@prisma/client"],
//       commandHooks: {
//         beforeInstall: (i, o) => [],
//         beforeBundling: (i, o) => [],
//         afterBundling(inputDir: string, outputDir: string): string[] {
//           return [
//             `cp ${inputDir}/node_modules/.prisma/client/libquery_engine-rhel-openssl-3.0.x.so.node ${outputDir}`,
//             `cp ${inputDir}/prisma/schema.prisma ${outputDir}`,
//             "npx prisma generate",
//           ];
//         },
//       },
//       forceDockerBundling: false,
//     },
//   });
// });

export function defineCustomFunction({ stack }: { stack: Stack }) {
  // 既存の VPC を取得
  const vpc = ec2.Vpc.fromVpcAttributes(stack, 'MyImportedVPC', {
    vpcId: 'vpc-0103532b9805239be',
    availabilityZones: ['ap-northeast-1a', 'ap-northeast-1c'],
    publicSubnetIds: ['subnet-0aa1e91e4f0654614', 'subnet-02b7a06368ef1a819'],
  })

  // 既存のセキュリティグループを取得
  const securityGroup = SecurityGroup.fromSecurityGroupId(
    stack,
    'ExistingSG',
    'sg-0738e478ff2be7ccb'
  ) // ご自身のセキュリティグループ ID に置き換えてください

  const prismaMigrate = new NodejsFunction(stack, 'PrismaMigrate', {
    entry: 'amplify/functions/prismaMigrate/handler.ts',
    runtime: Runtime.NODEJS_22_X,
    timeout: Duration.seconds(20),
    functionName: 'prisma-migrate',
    memorySize: 128,
    vpc,
    vpcSubnets: {
      subnetType: SubnetType.PUBLIC,
    },
    allowPublicSubnet: true,
    securityGroups: [
      ec2.SecurityGroup.fromSecurityGroupId(
        stack,
        'MySecurityGroup',
        'sg-0738e478ff2be7ccb'
      ),
    ],
    environment: {
      PRISMA_QUERY_ENGINE_LIBRARY:
        './libquery_engine-rhel-openssl-3.0.x.so.node',
    },
    bundling: {
      nodeModules: ['prisma', '@prisma/client'],
      commandHooks: {
        beforeInstall: (i, o) => [],
        beforeBundling: (i, o) => [],
        afterBundling(inputDir: string, outputDir: string): string[] {
          return [
            `cp ${inputDir}/node_modules/.prisma/client/libquery_engine-rhel-openssl-3.0.x.so.node ${outputDir}`,
            `cp -r ${inputDir}/prisma ${outputDir}`,
            'npx prisma generate',
          ]
        },
      },
      forceDockerBundling: false,
    },
  })
  return prismaMigrate
}
