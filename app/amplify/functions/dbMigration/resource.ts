import { defineFunction } from '@aws-amplify/backend'

export const dbMigration = defineFunction({
  name: 'db-migration',
  entry: './handler.ts',
})
