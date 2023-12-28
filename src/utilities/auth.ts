import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next"
import type { NextAuthOptions } from "next-auth"
import { getServerSession } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import {DynamoDBAdapter} from "@auth/dynamodb-adapter"
import {DynamoDB, DynamoDBClientConfig} from "@aws-sdk/client-dynamodb"
import {DynamoDBDocument} from "@aws-sdk/lib-dynamodb"
import {Adapter} from "next-auth/adapters"

const dbConfig: DynamoDBClientConfig = {
  credentials: {
    accessKeyId: process.env.NEXT_AUTH_AWS_ACCESS_KEY || "xxx",
    secretAccessKey: process.env.NEXT_AUTH_AWS_SECRET_KEY || "xxx",
  },
  region: process.env.NEXT_AUTH_AWS_REGION,
}

const client = DynamoDBDocument.from(new DynamoDB(dbConfig), {
  marshallOptions: {
    convertEmptyValues: true,
    removeUndefinedValues: true,
    convertClassInstanceToMap: true,
  },
})

export const config = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "xxx",
      clientSecret: process.env.GOOGLE_SECRET || "xxx"
    }),
  ],
  adapter: DynamoDBAdapter(
    client, { tableName: 'users' }
  ) as Adapter,
  // pages: {
  //   signIn: '/auth',
  //   signOut: '/auth/signout',
  //   error: '/auth/error',
  //   newUser: '/auth/new-user'
  // }
} satisfies NextAuthOptions

export function auth(...args: [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]] | [NextApiRequest, NextApiResponse] | []) {
  return getServerSession(...args, config)
}