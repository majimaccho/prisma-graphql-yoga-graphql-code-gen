import { readFileSync } from 'node:fs'
import { typeDefs as scalarTypeDefs } from 'graphql-scalars';
import { resolvers as scalarResolvers } from 'graphql-scalars';

import { makeExecutableSchema } from '@graphql-tools/schema'
import { Resolvers } from './resolvers-types'
import { TaskQueryResolever, TaskResolver } from './domain/task'

const typeDefs = readFileSync('./schema.graphql', 'utf8')


const resolvers: Resolvers = {
 Query: {
  drafts: TaskQueryResolever
 },
  Task: TaskResolver
}

export const schema = makeExecutableSchema({
 resolvers: [scalarResolvers, resolvers],
 typeDefs: [scalarTypeDefs, typeDefs]
})
