import { execFile } from 'child_process'
import * as path from 'path'
import { type Handler, type Context } from 'aws-lambda'

/* prisma コマンドを実行 */
const execMigrate = async (command: string) => {
  const exitCode = await new Promise<number>((resolve, _reject) => {
    execFile(
      path.resolve('./node_modules/prisma/build/index.js'),
      ['migrate', command],
      (error, stdout, _stderr) => {
        console.log(stdout)

        if (error != null) {
          console.error(
            `prisma migrate ${command} exited with error ${error.message}`
          )
          resolve(Number(error.code) ?? 1)
        } else {
          resolve(0)
        }
      }
    )
  })

  if (exitCode !== 0)
    throw Error(`prisma migrate ${command} failed with exit code ${exitCode}`)
}

export const handler: Handler = async (event: any, _context: Context) => {
  console.log(`EVENT: ${JSON.stringify(event)}`)

  // 引数なしの場合は prisma migrate deploy を実行
  const command: string = 'deploy'

  // Prisma コマンドを実行
  await execMigrate(command)

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Migration completed successfully',
    }),
  }
}
