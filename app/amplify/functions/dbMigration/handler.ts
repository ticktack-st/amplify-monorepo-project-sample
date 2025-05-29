import type { Handler, Context } from 'aws-lambda'
const { execSync } = require('child_process')

export const handler: Handler = async (event: any, context: Context) => {
  try {
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
