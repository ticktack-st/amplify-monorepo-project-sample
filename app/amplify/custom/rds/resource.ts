import { Stack } from 'aws-cdk-lib'
import {
  Credentials,
  DatabaseInstance,
  DatabaseInstanceEngine,
  MysqlEngineVersion,
} from 'aws-cdk-lib/aws-rds'
import {
  InstanceClass,
  InstanceSize,
  InstanceType,
  SubnetType,
} from 'aws-cdk-lib/aws-ec2'
import * as ec2 from 'aws-cdk-lib/aws-ec2'

export function defineRds({ stack }: { stack: Stack }) {
  const vpc = ec2.Vpc.fromVpcAttributes(stack, 'MyImportedVPC', {
    vpcId: 'vpc-0103532b9805239be',
    availabilityZones: ['ap-northeast-1a', 'ap-northeast-1c'],
    publicSubnetIds: ['subnet-0aa1e91e4f0654614', 'subnet-02b7a06368ef1a819'],
  })

  const rdsInstance = new DatabaseInstance(stack, 'RDSInstance', {
    engine: DatabaseInstanceEngine.mysql({
      version: MysqlEngineVersion.VER_8_0_41,
    }),
    credentials: Credentials.fromGeneratedSecret('admin'),
    instanceType: InstanceType.of(InstanceClass.BURSTABLE3, InstanceSize.MICRO),
    vpc,
    vpcSubnets: {
      subnetType: SubnetType.PUBLIC,
    },
    securityGroups: [
      ec2.SecurityGroup.fromSecurityGroupId(
        stack,
        'MySecurityGroup',
        'sg-0738e478ff2be7ccb'
      ),
    ],
    databaseName: 'testsite',
    publiclyAccessible: true,
  })
}
