import { mockServer } from '@graphql-tools/mock';
import { addResolversToSchema } from '@graphql-tools/schema';
import schemaString from './schema';
import resolvers from './resolvers';
import { buildSchema } from 'graphql'

const schema = buildSchema(schemaString)

const schemaWithResolvers = addResolversToSchema({
    schema,
    resolvers
})

const server = mockServer(schemaWithResolvers, {}, true)

export default server;