import { mockServer } from '@graphql-tools/mock';
import typeDefs from './schema';
import resolvers from './resolvers';
import { buildSchema } from 'graphql'

const schema = buildSchema(typeDefs)

const server = mockServer(schema, resolvers)

export default server;