import { Resolver, QueryResolvers } from '../resolvers-types'


export const TaskResolever: QueryResolvers['drafts'] = () => {
  return [
    {
      id: '111',
      hasDone: false,
      content: ""
    }
  ]
}