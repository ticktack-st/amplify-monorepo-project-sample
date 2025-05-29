import type { Handler, Context } from 'aws-lambda'
import { execSync } from 'child_process'
import {
  SecretsManagerClient,
  GetSecretValueCommand,
} from '@aws-sdk/client-secrets-manager'

const client = new SecretsManagerClient({ region: 'ap-northeast-1' })

async function getDatabaseUrl() {
  const command = new GetSecretValueCommand({
    SecretId: 'amplify/product/dev/DATABASE_URL',
  })
  const response = await client.send(command)
  return response.SecretString!
}

export const handler: Handler = async (event: any, context: Context) => {
  try {
    process.env.PRISMA_CLI_BINARY_TARGETS = 'native,rhel-openssl-3.0.x'
    process.env.DATABASE_URL = await getDatabaseUrl()
    execSync('npx prisma migrate deploy', { stdio: 'inherit' })
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Migration successful' }),
    }
  } catch (error) {
    console.error('Migration failed:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Migration failed' }),
    }
  }
}
