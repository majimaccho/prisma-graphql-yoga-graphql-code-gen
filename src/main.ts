import { createYoga } from 'graphql-yoga'
import { createServer } from 'http'
import { schema } from './schema'
import { context } from './context'

function main() {
 const yoga = createYoga({
  context,
  schema 
})
 // eslint-disable-next-line @typescript-eslint/no-misused-promises
 const server = createServer(yoga)
 server.listen(4000, () => {
  console.info('Server is running on http://localhost:4000/graphql')
 })
}

main()
