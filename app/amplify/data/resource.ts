/**
 * app sync + dynamodbを作成するCDKのリソース定義
 * 記載を変えればRDSも作成できる
 * defineDataでdynamoDBのスキーマごと定義できる
 */

import { a, defineData, type ClientSchema } from '@aws-amplify/backend'

const schema = a.schema({
  Todo: a
    .model({
      content: a.string(),
      isDone: a.boolean(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
})

// Used for code completion / highlighting when making requests from frontend
export type Schema = ClientSchema<typeof schema>

// defines the data resource to be deployed
export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    apiKeyAuthorizationMode: { expiresInDays: 30 },
  },
})
