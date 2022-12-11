import { readFileSync } from 'node:fs'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { Resolvers } from './resolvers-types'
import { TaskResolever } from './domain/task'

const typeDefs = readFileSync('./schema.graphql', 'utf8')


const resolvers: Resolvers = {
 Query: {
  drafts: TaskResolever
 }
}

export const schema = makeExecutableSchema({
 resolvers: [resolvers],
 typeDefs: [typeDefs]
})
