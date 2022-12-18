import { QueryResolvers, TaskResolvers } from '../resolvers-types'


export const TaskQueryResolever: QueryResolvers['drafts'] = (_parent, _args, ctx) => 
  ctx.prisma.task.findMany()

export const TaskResolver: TaskResolvers = ({
  createdOn: (parent) => parent.createdAt
})