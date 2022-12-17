import type { CodegenConfig } from '@graphql-codegen/cli';
const config: CodegenConfig = {
 schema: 'schema.graphql',
  generates: {
    './src/resolvers-types.ts': {    
      plugins: ['typescript', 'typescript-resolvers'],
    },
 },
 hooks: {
  afterAllFileWrite: [
    'prettier --write'
  ]
 },
 config: {
  avoidOptionals: {
    field: true,
    inputValue: true,
    object: true,
    defaultValue: true,
    immutableTypes: true,
    defaultScalarType: 'unknown'
  },
  strictScalars: true,
    scalars: {
    DateTime: 'Date',
    Date: 'Date'
  }
 }
};
export default config;
