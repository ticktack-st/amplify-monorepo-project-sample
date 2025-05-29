import { defineFunction } from '@aws-amplify/backend'

export const prisma = defineFunction({
  name: 'prisma',
  entry: './handler.ts',
})
