module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.30.2). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateSubscribedItem {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createSubscribedItem(data: SubscribedItemCreateInput!): SubscribedItem!
  updateSubscribedItem(data: SubscribedItemUpdateInput!, where: SubscribedItemWhereUniqueInput!): SubscribedItem
  updateManySubscribedItems(data: SubscribedItemUpdateManyMutationInput!, where: SubscribedItemWhereInput): BatchPayload!
  upsertSubscribedItem(where: SubscribedItemWhereUniqueInput!, create: SubscribedItemCreateInput!, update: SubscribedItemUpdateInput!): SubscribedItem!
  deleteSubscribedItem(where: SubscribedItemWhereUniqueInput!): SubscribedItem
  deleteManySubscribedItems(where: SubscribedItemWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  subscribedItem(where: SubscribedItemWhereUniqueInput!): SubscribedItem
  subscribedItems(where: SubscribedItemWhereInput, orderBy: SubscribedItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SubscribedItem]!
  subscribedItemsConnection(where: SubscribedItemWhereInput, orderBy: SubscribedItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SubscribedItemConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type SubscribedItem {
  id: ID!
  user: User!
  count: Float!
  lastPing: DateTime
  maxStreakDays: Float!
  currentStreak: Float!
  timeStarted: DateTime!
  active: Boolean!
}

type SubscribedItemConnection {
  pageInfo: PageInfo!
  edges: [SubscribedItemEdge]!
  aggregate: AggregateSubscribedItem!
}

input SubscribedItemCreateInput {
  id: ID
  user: UserCreateOneInput!
  count: Float
  lastPing: DateTime
  maxStreakDays: Float!
  currentStreak: Float
  timeStarted: DateTime!
  active: Boolean
}

type SubscribedItemEdge {
  node: SubscribedItem!
  cursor: String!
}

enum SubscribedItemOrderByInput {
  id_ASC
  id_DESC
  count_ASC
  count_DESC
  lastPing_ASC
  lastPing_DESC
  maxStreakDays_ASC
  maxStreakDays_DESC
  currentStreak_ASC
  currentStreak_DESC
  timeStarted_ASC
  timeStarted_DESC
  active_ASC
  active_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SubscribedItemPreviousValues {
  id: ID!
  count: Float!
  lastPing: DateTime
  maxStreakDays: Float!
  currentStreak: Float!
  timeStarted: DateTime!
  active: Boolean!
}

type SubscribedItemSubscriptionPayload {
  mutation: MutationType!
  node: SubscribedItem
  updatedFields: [String!]
  previousValues: SubscribedItemPreviousValues
}

input SubscribedItemSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SubscribedItemWhereInput
  AND: [SubscribedItemSubscriptionWhereInput!]
  OR: [SubscribedItemSubscriptionWhereInput!]
  NOT: [SubscribedItemSubscriptionWhereInput!]
}

input SubscribedItemUpdateInput {
  user: UserUpdateOneRequiredInput
  count: Float
  lastPing: DateTime
  maxStreakDays: Float
  currentStreak: Float
  timeStarted: DateTime
  active: Boolean
}

input SubscribedItemUpdateManyMutationInput {
  count: Float
  lastPing: DateTime
  maxStreakDays: Float
  currentStreak: Float
  timeStarted: DateTime
  active: Boolean
}

input SubscribedItemWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  user: UserWhereInput
  count: Float
  count_not: Float
  count_in: [Float!]
  count_not_in: [Float!]
  count_lt: Float
  count_lte: Float
  count_gt: Float
  count_gte: Float
  lastPing: DateTime
  lastPing_not: DateTime
  lastPing_in: [DateTime!]
  lastPing_not_in: [DateTime!]
  lastPing_lt: DateTime
  lastPing_lte: DateTime
  lastPing_gt: DateTime
  lastPing_gte: DateTime
  maxStreakDays: Float
  maxStreakDays_not: Float
  maxStreakDays_in: [Float!]
  maxStreakDays_not_in: [Float!]
  maxStreakDays_lt: Float
  maxStreakDays_lte: Float
  maxStreakDays_gt: Float
  maxStreakDays_gte: Float
  currentStreak: Float
  currentStreak_not: Float
  currentStreak_in: [Float!]
  currentStreak_not_in: [Float!]
  currentStreak_lt: Float
  currentStreak_lte: Float
  currentStreak_gt: Float
  currentStreak_gte: Float
  timeStarted: DateTime
  timeStarted_not: DateTime
  timeStarted_in: [DateTime!]
  timeStarted_not_in: [DateTime!]
  timeStarted_lt: DateTime
  timeStarted_lte: DateTime
  timeStarted_gt: DateTime
  timeStarted_gte: DateTime
  active: Boolean
  active_not: Boolean
  AND: [SubscribedItemWhereInput!]
  OR: [SubscribedItemWhereInput!]
  NOT: [SubscribedItemWhereInput!]
}

input SubscribedItemWhereUniqueInput {
  id: ID
}

type Subscription {
  subscribedItem(where: SubscribedItemSubscriptionWhereInput): SubscribedItemSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  password: String!
  subscribed: Boolean!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  email: String!
  password: String!
  subscribed: Boolean
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  subscribed_ASC
  subscribed_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  subscribed: Boolean!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  email: String
  password: String
  subscribed: Boolean
}

input UserUpdateInput {
  email: String
  password: String
  subscribed: Boolean
}

input UserUpdateManyMutationInput {
  email: String
  password: String
  subscribed: Boolean
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  subscribed: Boolean
  subscribed_not: Boolean
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    