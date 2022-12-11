import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
 schema: 'schema.graphql',
 generates: {
 './src/resolvers-types.ts': {
  plugins: ['typescript', 'typescript-resolvers'],
 },
 },
};
export default config;
