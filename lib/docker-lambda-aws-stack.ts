import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';


export class DockerLambdaAwsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const dockerFunc = new lambda.DockerImageFunction(this,"dockerFunc",{
      code:lambda.DockerImageCode.fromImageAsset("./image"),
      memorySize:1024,
      timeout: cdk.Duration.seconds(10),
      architecture: lambda.Architecture.X86_64
    })
  }
}
