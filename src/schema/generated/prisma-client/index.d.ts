// Code generated by Prisma (prisma@1.30.2). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  subscribedItem: (where?: SubscribedItemWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  subscribedItem: (
    where: SubscribedItemWhereUniqueInput
  ) => SubscribedItemPromise;
  subscribedItems: (
    args?: {
      where?: SubscribedItemWhereInput;
      orderBy?: SubscribedItemOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<SubscribedItem>;
  subscribedItemsConnection: (
    args?: {
      where?: SubscribedItemWhereInput;
      orderBy?: SubscribedItemOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => SubscribedItemConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserPromise;
  users: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<User>;
  usersConnection: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createSubscribedItem: (
    data: SubscribedItemCreateInput
  ) => SubscribedItemPromise;
  updateSubscribedItem: (
    args: {
      data: SubscribedItemUpdateInput;
      where: SubscribedItemWhereUniqueInput;
    }
  ) => SubscribedItemPromise;
  updateManySubscribedItems: (
    args: {
      data: SubscribedItemUpdateManyMutationInput;
      where?: SubscribedItemWhereInput;
    }
  ) => BatchPayloadPromise;
  upsertSubscribedItem: (
    args: {
      where: SubscribedItemWhereUniqueInput;
      create: SubscribedItemCreateInput;
      update: SubscribedItemUpdateInput;
    }
  ) => SubscribedItemPromise;
  deleteSubscribedItem: (
    where: SubscribedItemWhereUniqueInput
  ) => SubscribedItemPromise;
  deleteManySubscribedItems: (
    where?: SubscribedItemWhereInput
  ) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (
    args: { data: UserUpdateInput; where: UserWhereUniqueInput }
  ) => UserPromise;
  updateManyUsers: (
    args: { data: UserUpdateManyMutationInput; where?: UserWhereInput }
  ) => BatchPayloadPromise;
  upsertUser: (
    args: {
      where: UserWhereUniqueInput;
      create: UserCreateInput;
      update: UserUpdateInput;
    }
  ) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  subscribedItem: (
    where?: SubscribedItemSubscriptionWhereInput
  ) => SubscribedItemSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type SubscribedItemOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "count_ASC"
  | "count_DESC"
  | "lastPing_ASC"
  | "lastPing_DESC"
  | "maxStreakDays_ASC"
  | "maxStreakDays_DESC"
  | "currentStreak_ASC"
  | "currentStreak_DESC"
  | "timeStarted_ASC"
  | "timeStarted_DESC"
  | "active_ASC"
  | "active_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "email_ASC"
  | "email_DESC"
  | "password_ASC"
  | "password_DESC"
  | "subscribed_ASC"
  | "subscribed_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput;
  create: UserCreateInput;
}

export type SubscribedItemWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface UserUpdateOneRequiredInput {
  create?: UserCreateInput;
  update?: UserUpdateDataInput;
  upsert?: UserUpsertNestedInput;
  connect?: UserWhereUniqueInput;
}

export interface UserUpdateInput {
  email?: String;
  password?: String;
  subscribed?: Boolean;
}

export interface SubscribedItemUpdateInput {
  user?: UserUpdateOneRequiredInput;
  count?: Float;
  lastPing?: DateTimeInput;
  maxStreakDays?: Float;
  currentStreak?: Float;
  timeStarted?: DateTimeInput;
  active?: Boolean;
}

export interface SubscribedItemWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  user?: UserWhereInput;
  count?: Float;
  count_not?: Float;
  count_in?: Float[] | Float;
  count_not_in?: Float[] | Float;
  count_lt?: Float;
  count_lte?: Float;
  count_gt?: Float;
  count_gte?: Float;
  lastPing?: DateTimeInput;
  lastPing_not?: DateTimeInput;
  lastPing_in?: DateTimeInput[] | DateTimeInput;
  lastPing_not_in?: DateTimeInput[] | DateTimeInput;
  lastPing_lt?: DateTimeInput;
  lastPing_lte?: DateTimeInput;
  lastPing_gt?: DateTimeInput;
  lastPing_gte?: DateTimeInput;
  maxStreakDays?: Float;
  maxStreakDays_not?: Float;
  maxStreakDays_in?: Float[] | Float;
  maxStreakDays_not_in?: Float[] | Float;
  maxStreakDays_lt?: Float;
  maxStreakDays_lte?: Float;
  maxStreakDays_gt?: Float;
  maxStreakDays_gte?: Float;
  currentStreak?: Float;
  currentStreak_not?: Float;
  currentStreak_in?: Float[] | Float;
  currentStreak_not_in?: Float[] | Float;
  currentStreak_lt?: Float;
  currentStreak_lte?: Float;
  currentStreak_gt?: Float;
  currentStreak_gte?: Float;
  timeStarted?: DateTimeInput;
  timeStarted_not?: DateTimeInput;
  timeStarted_in?: DateTimeInput[] | DateTimeInput;
  timeStarted_not_in?: DateTimeInput[] | DateTimeInput;
  timeStarted_lt?: DateTimeInput;
  timeStarted_lte?: DateTimeInput;
  timeStarted_gt?: DateTimeInput;
  timeStarted_gte?: DateTimeInput;
  active?: Boolean;
  active_not?: Boolean;
  AND?: SubscribedItemWhereInput[] | SubscribedItemWhereInput;
  OR?: SubscribedItemWhereInput[] | SubscribedItemWhereInput;
  NOT?: SubscribedItemWhereInput[] | SubscribedItemWhereInput;
}

export interface UserCreateInput {
  id?: ID_Input;
  email: String;
  password: String;
  subscribed?: Boolean;
}

export interface UserUpdateManyMutationInput {
  email?: String;
  password?: String;
  subscribed?: Boolean;
}

export interface SubscribedItemCreateInput {
  id?: ID_Input;
  user: UserCreateOneInput;
  count?: Float;
  lastPing?: DateTimeInput;
  maxStreakDays: Float;
  currentStreak?: Float;
  timeStarted: DateTimeInput;
  active?: Boolean;
}

export interface UserCreateOneInput {
  create?: UserCreateInput;
  connect?: UserWhereUniqueInput;
}

export interface SubscribedItemSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: SubscribedItemWhereInput;
  AND?:
    | SubscribedItemSubscriptionWhereInput[]
    | SubscribedItemSubscriptionWhereInput;
  OR?:
    | SubscribedItemSubscriptionWhereInput[]
    | SubscribedItemSubscriptionWhereInput;
  NOT?:
    | SubscribedItemSubscriptionWhereInput[]
    | SubscribedItemSubscriptionWhereInput;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  email?: String;
}>;

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  password?: String;
  password_not?: String;
  password_in?: String[] | String;
  password_not_in?: String[] | String;
  password_lt?: String;
  password_lte?: String;
  password_gt?: String;
  password_gte?: String;
  password_contains?: String;
  password_not_contains?: String;
  password_starts_with?: String;
  password_not_starts_with?: String;
  password_ends_with?: String;
  password_not_ends_with?: String;
  subscribed?: Boolean;
  subscribed_not?: Boolean;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export interface SubscribedItemUpdateManyMutationInput {
  count?: Float;
  lastPing?: DateTimeInput;
  maxStreakDays?: Float;
  currentStreak?: Float;
  timeStarted?: DateTimeInput;
  active?: Boolean;
}

export interface UserUpdateDataInput {
  email?: String;
  password?: String;
  subscribed?: Boolean;
}

export interface NodeNode {
  id: ID_Output;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface User {
  id: ID_Output;
  email: String;
  password: String;
  subscribed: Boolean;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  subscribed: () => Promise<Boolean>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  subscribed: () => Promise<AsyncIterator<Boolean>>;
}

export interface SubscribedItem {
  id: ID_Output;
  count: Float;
  lastPing?: DateTimeOutput;
  maxStreakDays: Float;
  currentStreak: Float;
  timeStarted: DateTimeOutput;
  active: Boolean;
}

export interface SubscribedItemPromise
  extends Promise<SubscribedItem>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  user: <T = UserPromise>() => T;
  count: () => Promise<Float>;
  lastPing: () => Promise<DateTimeOutput>;
  maxStreakDays: () => Promise<Float>;
  currentStreak: () => Promise<Float>;
  timeStarted: () => Promise<DateTimeOutput>;
  active: () => Promise<Boolean>;
}

export interface SubscribedItemSubscription
  extends Promise<AsyncIterator<SubscribedItem>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  user: <T = UserSubscription>() => T;
  count: () => Promise<AsyncIterator<Float>>;
  lastPing: () => Promise<AsyncIterator<DateTimeOutput>>;
  maxStreakDays: () => Promise<AsyncIterator<Float>>;
  currentStreak: () => Promise<AsyncIterator<Float>>;
  timeStarted: () => Promise<AsyncIterator<DateTimeOutput>>;
  active: () => Promise<AsyncIterator<Boolean>>;
}

export interface UserPreviousValues {
  id: ID_Output;
  email: String;
  password: String;
  subscribed: Boolean;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  subscribed: () => Promise<Boolean>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  subscribed: () => Promise<AsyncIterator<Boolean>>;
}

export interface AggregateSubscribedItem {
  count: Int;
}

export interface AggregateSubscribedItemPromise
  extends Promise<AggregateSubscribedItem>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateSubscribedItemSubscription
  extends Promise<AsyncIterator<AggregateSubscribedItem>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface SubscribedItemSubscriptionPayload {
  mutation: MutationType;
  node: SubscribedItem;
  updatedFields: String[];
  previousValues: SubscribedItemPreviousValues;
}

export interface SubscribedItemSubscriptionPayloadPromise
  extends Promise<SubscribedItemSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = SubscribedItemPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = SubscribedItemPreviousValuesPromise>() => T;
}

export interface SubscribedItemSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<SubscribedItemSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = SubscribedItemSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = SubscribedItemPreviousValuesSubscription>() => T;
}

export interface SubscribedItemPreviousValues {
  id: ID_Output;
  count: Float;
  lastPing?: DateTimeOutput;
  maxStreakDays: Float;
  currentStreak: Float;
  timeStarted: DateTimeOutput;
  active: Boolean;
}

export interface SubscribedItemPreviousValuesPromise
  extends Promise<SubscribedItemPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  count: () => Promise<Float>;
  lastPing: () => Promise<DateTimeOutput>;
  maxStreakDays: () => Promise<Float>;
  currentStreak: () => Promise<Float>;
  timeStarted: () => Promise<DateTimeOutput>;
  active: () => Promise<Boolean>;
}

export interface SubscribedItemPreviousValuesSubscription
  extends Promise<AsyncIterator<SubscribedItemPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  count: () => Promise<AsyncIterator<Float>>;
  lastPing: () => Promise<AsyncIterator<DateTimeOutput>>;
  maxStreakDays: () => Promise<AsyncIterator<Float>>;
  currentStreak: () => Promise<AsyncIterator<Float>>;
  timeStarted: () => Promise<AsyncIterator<DateTimeOutput>>;
  active: () => Promise<AsyncIterator<Boolean>>;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface SubscribedItemEdge {
  node: SubscribedItem;
  cursor: String;
}

export interface SubscribedItemEdgePromise
  extends Promise<SubscribedItemEdge>,
    Fragmentable {
  node: <T = SubscribedItemPromise>() => T;
  cursor: () => Promise<String>;
}

export interface SubscribedItemEdgeSubscription
  extends Promise<AsyncIterator<SubscribedItemEdge>>,
    Fragmentable {
  node: <T = SubscribedItemSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface SubscribedItemConnection {
  pageInfo: PageInfo;
  edges: SubscribedItemEdge[];
}

export interface SubscribedItemConnectionPromise
  extends Promise<SubscribedItemConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<SubscribedItemEdge>>() => T;
  aggregate: <T = AggregateSubscribedItemPromise>() => T;
}

export interface SubscribedItemConnectionSubscription
  extends Promise<AsyncIterator<SubscribedItemConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<SubscribedItemEdgeSubscription>>>() => T;
  aggregate: <T = AggregateSubscribedItemSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "SubscribedItem",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
