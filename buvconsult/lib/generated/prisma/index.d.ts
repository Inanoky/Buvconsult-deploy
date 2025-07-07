
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Site
 * 
 */
export type Site = $Result.DefaultSelection<Prisma.$SitePayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model Invoices
 * 
 */
export type Invoices = $Result.DefaultSelection<Prisma.$InvoicesPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model InvoiceItems
 * 
 */
export type InvoiceItems = $Result.DefaultSelection<Prisma.$InvoiceItemsPayload>
/**
 * Model AIconversation
 * 
 */
export type AIconversation = $Result.DefaultSelection<Prisma.$AIconversationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.site`: Exposes CRUD operations for the **Site** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sites
    * const sites = await prisma.site.findMany()
    * ```
    */
  get site(): Prisma.SiteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoices`: Exposes CRUD operations for the **Invoices** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoices.findMany()
    * ```
    */
  get invoices(): Prisma.InvoicesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoiceItems`: Exposes CRUD operations for the **InvoiceItems** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InvoiceItems
    * const invoiceItems = await prisma.invoiceItems.findMany()
    * ```
    */
  get invoiceItems(): Prisma.InvoiceItemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aIconversation`: Exposes CRUD operations for the **AIconversation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AIconversations
    * const aIconversations = await prisma.aIconversation.findMany()
    * ```
    */
  get aIconversation(): Prisma.AIconversationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Site: 'Site',
    Subscription: 'Subscription',
    Invoices: 'Invoices',
    Post: 'Post',
    InvoiceItems: 'InvoiceItems',
    AIconversation: 'AIconversation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "site" | "subscription" | "invoices" | "post" | "invoiceItems" | "aIconversation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Site: {
        payload: Prisma.$SitePayload<ExtArgs>
        fields: Prisma.SiteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SiteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SiteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          findFirst: {
            args: Prisma.SiteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SiteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          findMany: {
            args: Prisma.SiteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>[]
          }
          create: {
            args: Prisma.SiteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          createMany: {
            args: Prisma.SiteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SiteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>[]
          }
          delete: {
            args: Prisma.SiteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          update: {
            args: Prisma.SiteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          deleteMany: {
            args: Prisma.SiteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SiteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SiteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>[]
          }
          upsert: {
            args: Prisma.SiteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          aggregate: {
            args: Prisma.SiteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSite>
          }
          groupBy: {
            args: Prisma.SiteGroupByArgs<ExtArgs>
            result: $Utils.Optional<SiteGroupByOutputType>[]
          }
          count: {
            args: Prisma.SiteCountArgs<ExtArgs>
            result: $Utils.Optional<SiteCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      Invoices: {
        payload: Prisma.$InvoicesPayload<ExtArgs>
        fields: Prisma.InvoicesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoicesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoicesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicesPayload>
          }
          findFirst: {
            args: Prisma.InvoicesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoicesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicesPayload>
          }
          findMany: {
            args: Prisma.InvoicesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicesPayload>[]
          }
          create: {
            args: Prisma.InvoicesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicesPayload>
          }
          createMany: {
            args: Prisma.InvoicesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoicesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicesPayload>[]
          }
          delete: {
            args: Prisma.InvoicesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicesPayload>
          }
          update: {
            args: Prisma.InvoicesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicesPayload>
          }
          deleteMany: {
            args: Prisma.InvoicesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoicesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvoicesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicesPayload>[]
          }
          upsert: {
            args: Prisma.InvoicesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicesPayload>
          }
          aggregate: {
            args: Prisma.InvoicesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoices>
          }
          groupBy: {
            args: Prisma.InvoicesGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoicesGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoicesCountArgs<ExtArgs>
            result: $Utils.Optional<InvoicesCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      InvoiceItems: {
        payload: Prisma.$InvoiceItemsPayload<ExtArgs>
        fields: Prisma.InvoiceItemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceItemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceItemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemsPayload>
          }
          findFirst: {
            args: Prisma.InvoiceItemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceItemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemsPayload>
          }
          findMany: {
            args: Prisma.InvoiceItemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemsPayload>[]
          }
          create: {
            args: Prisma.InvoiceItemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemsPayload>
          }
          createMany: {
            args: Prisma.InvoiceItemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoiceItemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemsPayload>[]
          }
          delete: {
            args: Prisma.InvoiceItemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemsPayload>
          }
          update: {
            args: Prisma.InvoiceItemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemsPayload>
          }
          deleteMany: {
            args: Prisma.InvoiceItemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceItemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvoiceItemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemsPayload>[]
          }
          upsert: {
            args: Prisma.InvoiceItemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemsPayload>
          }
          aggregate: {
            args: Prisma.InvoiceItemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoiceItems>
          }
          groupBy: {
            args: Prisma.InvoiceItemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceItemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceItemsCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceItemsCountAggregateOutputType> | number
          }
        }
      }
      AIconversation: {
        payload: Prisma.$AIconversationPayload<ExtArgs>
        fields: Prisma.AIconversationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AIconversationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIconversationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AIconversationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIconversationPayload>
          }
          findFirst: {
            args: Prisma.AIconversationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIconversationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AIconversationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIconversationPayload>
          }
          findMany: {
            args: Prisma.AIconversationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIconversationPayload>[]
          }
          create: {
            args: Prisma.AIconversationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIconversationPayload>
          }
          createMany: {
            args: Prisma.AIconversationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AIconversationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIconversationPayload>[]
          }
          delete: {
            args: Prisma.AIconversationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIconversationPayload>
          }
          update: {
            args: Prisma.AIconversationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIconversationPayload>
          }
          deleteMany: {
            args: Prisma.AIconversationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AIconversationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AIconversationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIconversationPayload>[]
          }
          upsert: {
            args: Prisma.AIconversationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIconversationPayload>
          }
          aggregate: {
            args: Prisma.AIconversationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAIconversation>
          }
          groupBy: {
            args: Prisma.AIconversationGroupByArgs<ExtArgs>
            result: $Utils.Optional<AIconversationGroupByOutputType>[]
          }
          count: {
            args: Prisma.AIconversationCountArgs<ExtArgs>
            result: $Utils.Optional<AIconversationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    site?: SiteOmit
    subscription?: SubscriptionOmit
    invoices?: InvoicesOmit
    post?: PostOmit
    invoiceItems?: InvoiceItemsOmit
    aIconversation?: AIconversationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Site: number
    posts: number
    Invoices: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Site?: boolean | UserCountOutputTypeCountSiteArgs
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    Invoices?: boolean | UserCountOutputTypeCountInvoicesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSiteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoicesWhereInput
  }


  /**
   * Count Type SiteCountOutputType
   */

  export type SiteCountOutputType = {
    posts: number
    invoices: number
    InvoiceItems: number
  }

  export type SiteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | SiteCountOutputTypeCountPostsArgs
    invoices?: boolean | SiteCountOutputTypeCountInvoicesArgs
    InvoiceItems?: boolean | SiteCountOutputTypeCountInvoiceItemsArgs
  }

  // Custom InputTypes
  /**
   * SiteCountOutputType without action
   */
  export type SiteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteCountOutputType
     */
    select?: SiteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SiteCountOutputType without action
   */
  export type SiteCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * SiteCountOutputType without action
   */
  export type SiteCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoicesWhereInput
  }

  /**
   * SiteCountOutputType without action
   */
  export type SiteCountOutputTypeCountInvoiceItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceItemsWhereInput
  }


  /**
   * Count Type InvoicesCountOutputType
   */

  export type InvoicesCountOutputType = {
    items: number
  }

  export type InvoicesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | InvoicesCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * InvoicesCountOutputType without action
   */
  export type InvoicesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoicesCountOutputType
     */
    select?: InvoicesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InvoicesCountOutputType without action
   */
  export type InvoicesCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceItemsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    profileImage: string | null
    customerId: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    profileImage: string | null
    customerId: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    firstName: number
    lastName: number
    profileImage: number
    customerId: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    lastName?: true
    profileImage?: true
    customerId?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    lastName?: true
    profileImage?: true
    customerId?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    lastName?: true
    profileImage?: true
    customerId?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    firstName: string
    lastName: string
    profileImage: string
    customerId: string | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    profileImage?: boolean
    customerId?: boolean
    createdAt?: boolean
    Site?: boolean | User$SiteArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    Invoices?: boolean | User$InvoicesArgs<ExtArgs>
    Subscription?: boolean | User$SubscriptionArgs<ExtArgs>
    AIconversation?: boolean | User$AIconversationArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    profileImage?: boolean
    customerId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    profileImage?: boolean
    customerId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    profileImage?: boolean
    customerId?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "firstName" | "lastName" | "profileImage" | "customerId" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Site?: boolean | User$SiteArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    Invoices?: boolean | User$InvoicesArgs<ExtArgs>
    Subscription?: boolean | User$SubscriptionArgs<ExtArgs>
    AIconversation?: boolean | User$AIconversationArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Site: Prisma.$SitePayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
      Invoices: Prisma.$InvoicesPayload<ExtArgs>[]
      Subscription: Prisma.$SubscriptionPayload<ExtArgs> | null
      AIconversation: Prisma.$AIconversationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      firstName: string
      lastName: string
      profileImage: string
      customerId: string | null
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Site<T extends User$SiteArgs<ExtArgs> = {}>(args?: Subset<T, User$SiteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Invoices<T extends User$InvoicesArgs<ExtArgs> = {}>(args?: Subset<T, User$InvoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Subscription<T extends User$SubscriptionArgs<ExtArgs> = {}>(args?: Subset<T, User$SubscriptionArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    AIconversation<T extends User$AIconversationArgs<ExtArgs> = {}>(args?: Subset<T, User$AIconversationArgs<ExtArgs>>): Prisma__AIconversationClient<$Result.GetResult<Prisma.$AIconversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly profileImage: FieldRef<"User", 'String'>
    readonly customerId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Site
   */
  export type User$SiteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    where?: SiteWhereInput
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    cursor?: SiteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User.Invoices
   */
  export type User$InvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesInclude<ExtArgs> | null
    where?: InvoicesWhereInput
    orderBy?: InvoicesOrderByWithRelationInput | InvoicesOrderByWithRelationInput[]
    cursor?: InvoicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * User.Subscription
   */
  export type User$SubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
  }

  /**
   * User.AIconversation
   */
  export type User$AIconversationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIconversation
     */
    select?: AIconversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIconversation
     */
    omit?: AIconversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIconversationInclude<ExtArgs> | null
    where?: AIconversationWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Site
   */

  export type AggregateSite = {
    _count: SiteCountAggregateOutputType | null
    _min: SiteMinAggregateOutputType | null
    _max: SiteMaxAggregateOutputType | null
  }

  export type SiteMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    subdirectory: string | null
    createdAt: Date | null
    updatedAt: Date | null
    imageUrl: string | null
    userId: string | null
  }

  export type SiteMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    subdirectory: string | null
    createdAt: Date | null
    updatedAt: Date | null
    imageUrl: string | null
    userId: string | null
  }

  export type SiteCountAggregateOutputType = {
    id: number
    name: number
    description: number
    subdirectory: number
    createdAt: number
    updatedAt: number
    imageUrl: number
    userId: number
    _all: number
  }


  export type SiteMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    subdirectory?: true
    createdAt?: true
    updatedAt?: true
    imageUrl?: true
    userId?: true
  }

  export type SiteMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    subdirectory?: true
    createdAt?: true
    updatedAt?: true
    imageUrl?: true
    userId?: true
  }

  export type SiteCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    subdirectory?: true
    createdAt?: true
    updatedAt?: true
    imageUrl?: true
    userId?: true
    _all?: true
  }

  export type SiteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Site to aggregate.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sites
    **/
    _count?: true | SiteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SiteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SiteMaxAggregateInputType
  }

  export type GetSiteAggregateType<T extends SiteAggregateArgs> = {
        [P in keyof T & keyof AggregateSite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSite[P]>
      : GetScalarType<T[P], AggregateSite[P]>
  }




  export type SiteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteWhereInput
    orderBy?: SiteOrderByWithAggregationInput | SiteOrderByWithAggregationInput[]
    by: SiteScalarFieldEnum[] | SiteScalarFieldEnum
    having?: SiteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SiteCountAggregateInputType | true
    _min?: SiteMinAggregateInputType
    _max?: SiteMaxAggregateInputType
  }

  export type SiteGroupByOutputType = {
    id: string
    name: string
    description: string
    subdirectory: string
    createdAt: Date
    updatedAt: Date
    imageUrl: string | null
    userId: string | null
    _count: SiteCountAggregateOutputType | null
    _min: SiteMinAggregateOutputType | null
    _max: SiteMaxAggregateOutputType | null
  }

  type GetSiteGroupByPayload<T extends SiteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SiteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiteGroupByOutputType[P]>
            : GetScalarType<T[P], SiteGroupByOutputType[P]>
        }
      >
    >


  export type SiteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    subdirectory?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    imageUrl?: boolean
    userId?: boolean
    User?: boolean | Site$UserArgs<ExtArgs>
    posts?: boolean | Site$postsArgs<ExtArgs>
    invoices?: boolean | Site$invoicesArgs<ExtArgs>
    InvoiceItems?: boolean | Site$InvoiceItemsArgs<ExtArgs>
    _count?: boolean | SiteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["site"]>

  export type SiteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    subdirectory?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    imageUrl?: boolean
    userId?: boolean
    User?: boolean | Site$UserArgs<ExtArgs>
  }, ExtArgs["result"]["site"]>

  export type SiteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    subdirectory?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    imageUrl?: boolean
    userId?: boolean
    User?: boolean | Site$UserArgs<ExtArgs>
  }, ExtArgs["result"]["site"]>

  export type SiteSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    subdirectory?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    imageUrl?: boolean
    userId?: boolean
  }

  export type SiteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "subdirectory" | "createdAt" | "updatedAt" | "imageUrl" | "userId", ExtArgs["result"]["site"]>
  export type SiteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Site$UserArgs<ExtArgs>
    posts?: boolean | Site$postsArgs<ExtArgs>
    invoices?: boolean | Site$invoicesArgs<ExtArgs>
    InvoiceItems?: boolean | Site$InvoiceItemsArgs<ExtArgs>
    _count?: boolean | SiteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SiteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Site$UserArgs<ExtArgs>
  }
  export type SiteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Site$UserArgs<ExtArgs>
  }

  export type $SitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Site"
    objects: {
      User: Prisma.$UserPayload<ExtArgs> | null
      posts: Prisma.$PostPayload<ExtArgs>[]
      invoices: Prisma.$InvoicesPayload<ExtArgs>[]
      InvoiceItems: Prisma.$InvoiceItemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      subdirectory: string
      createdAt: Date
      updatedAt: Date
      imageUrl: string | null
      userId: string | null
    }, ExtArgs["result"]["site"]>
    composites: {}
  }

  type SiteGetPayload<S extends boolean | null | undefined | SiteDefaultArgs> = $Result.GetResult<Prisma.$SitePayload, S>

  type SiteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SiteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SiteCountAggregateInputType | true
    }

  export interface SiteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Site'], meta: { name: 'Site' } }
    /**
     * Find zero or one Site that matches the filter.
     * @param {SiteFindUniqueArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SiteFindUniqueArgs>(args: SelectSubset<T, SiteFindUniqueArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Site that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SiteFindUniqueOrThrowArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SiteFindUniqueOrThrowArgs>(args: SelectSubset<T, SiteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Site that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteFindFirstArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SiteFindFirstArgs>(args?: SelectSubset<T, SiteFindFirstArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Site that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteFindFirstOrThrowArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SiteFindFirstOrThrowArgs>(args?: SelectSubset<T, SiteFindFirstOrThrowArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sites
     * const sites = await prisma.site.findMany()
     * 
     * // Get first 10 Sites
     * const sites = await prisma.site.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const siteWithIdOnly = await prisma.site.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SiteFindManyArgs>(args?: SelectSubset<T, SiteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Site.
     * @param {SiteCreateArgs} args - Arguments to create a Site.
     * @example
     * // Create one Site
     * const Site = await prisma.site.create({
     *   data: {
     *     // ... data to create a Site
     *   }
     * })
     * 
     */
    create<T extends SiteCreateArgs>(args: SelectSubset<T, SiteCreateArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sites.
     * @param {SiteCreateManyArgs} args - Arguments to create many Sites.
     * @example
     * // Create many Sites
     * const site = await prisma.site.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SiteCreateManyArgs>(args?: SelectSubset<T, SiteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sites and returns the data saved in the database.
     * @param {SiteCreateManyAndReturnArgs} args - Arguments to create many Sites.
     * @example
     * // Create many Sites
     * const site = await prisma.site.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sites and only return the `id`
     * const siteWithIdOnly = await prisma.site.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SiteCreateManyAndReturnArgs>(args?: SelectSubset<T, SiteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Site.
     * @param {SiteDeleteArgs} args - Arguments to delete one Site.
     * @example
     * // Delete one Site
     * const Site = await prisma.site.delete({
     *   where: {
     *     // ... filter to delete one Site
     *   }
     * })
     * 
     */
    delete<T extends SiteDeleteArgs>(args: SelectSubset<T, SiteDeleteArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Site.
     * @param {SiteUpdateArgs} args - Arguments to update one Site.
     * @example
     * // Update one Site
     * const site = await prisma.site.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SiteUpdateArgs>(args: SelectSubset<T, SiteUpdateArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sites.
     * @param {SiteDeleteManyArgs} args - Arguments to filter Sites to delete.
     * @example
     * // Delete a few Sites
     * const { count } = await prisma.site.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SiteDeleteManyArgs>(args?: SelectSubset<T, SiteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sites
     * const site = await prisma.site.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SiteUpdateManyArgs>(args: SelectSubset<T, SiteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sites and returns the data updated in the database.
     * @param {SiteUpdateManyAndReturnArgs} args - Arguments to update many Sites.
     * @example
     * // Update many Sites
     * const site = await prisma.site.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sites and only return the `id`
     * const siteWithIdOnly = await prisma.site.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SiteUpdateManyAndReturnArgs>(args: SelectSubset<T, SiteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Site.
     * @param {SiteUpsertArgs} args - Arguments to update or create a Site.
     * @example
     * // Update or create a Site
     * const site = await prisma.site.upsert({
     *   create: {
     *     // ... data to create a Site
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Site we want to update
     *   }
     * })
     */
    upsert<T extends SiteUpsertArgs>(args: SelectSubset<T, SiteUpsertArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteCountArgs} args - Arguments to filter Sites to count.
     * @example
     * // Count the number of Sites
     * const count = await prisma.site.count({
     *   where: {
     *     // ... the filter for the Sites we want to count
     *   }
     * })
    **/
    count<T extends SiteCountArgs>(
      args?: Subset<T, SiteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SiteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Site.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SiteAggregateArgs>(args: Subset<T, SiteAggregateArgs>): Prisma.PrismaPromise<GetSiteAggregateType<T>>

    /**
     * Group by Site.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SiteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SiteGroupByArgs['orderBy'] }
        : { orderBy?: SiteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SiteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Site model
   */
  readonly fields: SiteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Site.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SiteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends Site$UserArgs<ExtArgs> = {}>(args?: Subset<T, Site$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    posts<T extends Site$postsArgs<ExtArgs> = {}>(args?: Subset<T, Site$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invoices<T extends Site$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, Site$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    InvoiceItems<T extends Site$InvoiceItemsArgs<ExtArgs> = {}>(args?: Subset<T, Site$InvoiceItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Site model
   */
  interface SiteFieldRefs {
    readonly id: FieldRef<"Site", 'String'>
    readonly name: FieldRef<"Site", 'String'>
    readonly description: FieldRef<"Site", 'String'>
    readonly subdirectory: FieldRef<"Site", 'String'>
    readonly createdAt: FieldRef<"Site", 'DateTime'>
    readonly updatedAt: FieldRef<"Site", 'DateTime'>
    readonly imageUrl: FieldRef<"Site", 'String'>
    readonly userId: FieldRef<"Site", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Site findUnique
   */
  export type SiteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site findUniqueOrThrow
   */
  export type SiteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site findFirst
   */
  export type SiteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sites.
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sites.
     */
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }

  /**
   * Site findFirstOrThrow
   */
  export type SiteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sites.
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sites.
     */
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }

  /**
   * Site findMany
   */
  export type SiteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Sites to fetch.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sites.
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }

  /**
   * Site create
   */
  export type SiteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * The data needed to create a Site.
     */
    data: XOR<SiteCreateInput, SiteUncheckedCreateInput>
  }

  /**
   * Site createMany
   */
  export type SiteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sites.
     */
    data: SiteCreateManyInput | SiteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Site createManyAndReturn
   */
  export type SiteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * The data used to create many Sites.
     */
    data: SiteCreateManyInput | SiteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Site update
   */
  export type SiteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * The data needed to update a Site.
     */
    data: XOR<SiteUpdateInput, SiteUncheckedUpdateInput>
    /**
     * Choose, which Site to update.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site updateMany
   */
  export type SiteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sites.
     */
    data: XOR<SiteUpdateManyMutationInput, SiteUncheckedUpdateManyInput>
    /**
     * Filter which Sites to update
     */
    where?: SiteWhereInput
    /**
     * Limit how many Sites to update.
     */
    limit?: number
  }

  /**
   * Site updateManyAndReturn
   */
  export type SiteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * The data used to update Sites.
     */
    data: XOR<SiteUpdateManyMutationInput, SiteUncheckedUpdateManyInput>
    /**
     * Filter which Sites to update
     */
    where?: SiteWhereInput
    /**
     * Limit how many Sites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Site upsert
   */
  export type SiteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * The filter to search for the Site to update in case it exists.
     */
    where: SiteWhereUniqueInput
    /**
     * In case the Site found by the `where` argument doesn't exist, create a new Site with this data.
     */
    create: XOR<SiteCreateInput, SiteUncheckedCreateInput>
    /**
     * In case the Site was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SiteUpdateInput, SiteUncheckedUpdateInput>
  }

  /**
   * Site delete
   */
  export type SiteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter which Site to delete.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site deleteMany
   */
  export type SiteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sites to delete
     */
    where?: SiteWhereInput
    /**
     * Limit how many Sites to delete.
     */
    limit?: number
  }

  /**
   * Site.User
   */
  export type Site$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Site.posts
   */
  export type Site$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Site.invoices
   */
  export type Site$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesInclude<ExtArgs> | null
    where?: InvoicesWhereInput
    orderBy?: InvoicesOrderByWithRelationInput | InvoicesOrderByWithRelationInput[]
    cursor?: InvoicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * Site.InvoiceItems
   */
  export type Site$InvoiceItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItems
     */
    select?: InvoiceItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItems
     */
    omit?: InvoiceItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemsInclude<ExtArgs> | null
    where?: InvoiceItemsWhereInput
    orderBy?: InvoiceItemsOrderByWithRelationInput | InvoiceItemsOrderByWithRelationInput[]
    cursor?: InvoiceItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceItemsScalarFieldEnum | InvoiceItemsScalarFieldEnum[]
  }

  /**
   * Site without action
   */
  export type SiteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionAvgAggregateOutputType = {
    currentPeriodStart: number | null
    currentPeriodEnd: number | null
  }

  export type SubscriptionSumAggregateOutputType = {
    currentPeriodStart: number | null
    currentPeriodEnd: number | null
  }

  export type SubscriptionMinAggregateOutputType = {
    stripeSubscriptionId: string | null
    interval: string | null
    status: string | null
    planId: string | null
    currentPeriodStart: number | null
    currentPeriodEnd: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    stripeSubscriptionId: string | null
    interval: string | null
    status: string | null
    planId: string | null
    currentPeriodStart: number | null
    currentPeriodEnd: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type SubscriptionCountAggregateOutputType = {
    stripeSubscriptionId: number
    interval: number
    status: number
    planId: number
    currentPeriodStart: number
    currentPeriodEnd: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type SubscriptionAvgAggregateInputType = {
    currentPeriodStart?: true
    currentPeriodEnd?: true
  }

  export type SubscriptionSumAggregateInputType = {
    currentPeriodStart?: true
    currentPeriodEnd?: true
  }

  export type SubscriptionMinAggregateInputType = {
    stripeSubscriptionId?: true
    interval?: true
    status?: true
    planId?: true
    currentPeriodStart?: true
    currentPeriodEnd?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    stripeSubscriptionId?: true
    interval?: true
    status?: true
    planId?: true
    currentPeriodStart?: true
    currentPeriodEnd?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type SubscriptionCountAggregateInputType = {
    stripeSubscriptionId?: true
    interval?: true
    status?: true
    planId?: true
    currentPeriodStart?: true
    currentPeriodEnd?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _avg?: SubscriptionAvgAggregateInputType
    _sum?: SubscriptionSumAggregateInputType
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    stripeSubscriptionId: string
    interval: string
    status: string
    planId: string
    currentPeriodStart: number
    currentPeriodEnd: number
    createdAt: Date
    updatedAt: Date
    userId: string | null
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    stripeSubscriptionId?: boolean
    interval?: boolean
    status?: boolean
    planId?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    User?: boolean | Subscription$UserArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    stripeSubscriptionId?: boolean
    interval?: boolean
    status?: boolean
    planId?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    User?: boolean | Subscription$UserArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    stripeSubscriptionId?: boolean
    interval?: boolean
    status?: boolean
    planId?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    User?: boolean | Subscription$UserArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    stripeSubscriptionId?: boolean
    interval?: boolean
    status?: boolean
    planId?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type SubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"stripeSubscriptionId" | "interval" | "status" | "planId" | "currentPeriodStart" | "currentPeriodEnd" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["subscription"]>
  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Subscription$UserArgs<ExtArgs>
  }
  export type SubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Subscription$UserArgs<ExtArgs>
  }
  export type SubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Subscription$UserArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      stripeSubscriptionId: string
      interval: string
      status: string
      planId: string
      currentPeriodStart: number
      currentPeriodEnd: number
      createdAt: Date
      updatedAt: Date
      userId: string | null
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `stripeSubscriptionId`
     * const subscriptionWithStripeSubscriptionIdOnly = await prisma.subscription.findMany({ select: { stripeSubscriptionId: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `stripeSubscriptionId`
     * const subscriptionWithStripeSubscriptionIdOnly = await prisma.subscription.createManyAndReturn({
     *   select: { stripeSubscriptionId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {SubscriptionUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscriptions and only return the `stripeSubscriptionId`
     * const subscriptionWithStripeSubscriptionIdOnly = await prisma.subscription.updateManyAndReturn({
     *   select: { stripeSubscriptionId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends Subscription$UserArgs<ExtArgs> = {}>(args?: Subset<T, Subscription$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subscription model
   */
  interface SubscriptionFieldRefs {
    readonly stripeSubscriptionId: FieldRef<"Subscription", 'String'>
    readonly interval: FieldRef<"Subscription", 'String'>
    readonly status: FieldRef<"Subscription", 'String'>
    readonly planId: FieldRef<"Subscription", 'String'>
    readonly currentPeriodStart: FieldRef<"Subscription", 'Int'>
    readonly currentPeriodEnd: FieldRef<"Subscription", 'Int'>
    readonly createdAt: FieldRef<"Subscription", 'DateTime'>
    readonly updatedAt: FieldRef<"Subscription", 'DateTime'>
    readonly userId: FieldRef<"Subscription", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription updateManyAndReturn
   */
  export type SubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscription.User
   */
  export type Subscription$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model Invoices
   */

  export type AggregateInvoices = {
    _count: InvoicesCountAggregateOutputType | null
    _avg: InvoicesAvgAggregateOutputType | null
    _sum: InvoicesSumAggregateOutputType | null
    _min: InvoicesMinAggregateOutputType | null
    _max: InvoicesMaxAggregateOutputType | null
  }

  export type InvoicesAvgAggregateOutputType = {
    invoiceTotalSumNoVat: number | null
    invoiceTotalSumWithVat: number | null
  }

  export type InvoicesSumAggregateOutputType = {
    invoiceTotalSumNoVat: number | null
    invoiceTotalSumWithVat: number | null
  }

  export type InvoicesMinAggregateOutputType = {
    id: string | null
    url: string | null
    invoiceNumber: string | null
    sellerName: string | null
    invoiceTotalSumNoVat: number | null
    invoiceTotalSumWithVat: number | null
    buyerName: string | null
    invoiceDate: string | null
    paymentDate: string | null
    isInvoice: boolean | null
    isCreditDebitProformaOrAdvanced: string | null
    uploadedAt: Date | null
    userId: string | null
    SiteId: string | null
  }

  export type InvoicesMaxAggregateOutputType = {
    id: string | null
    url: string | null
    invoiceNumber: string | null
    sellerName: string | null
    invoiceTotalSumNoVat: number | null
    invoiceTotalSumWithVat: number | null
    buyerName: string | null
    invoiceDate: string | null
    paymentDate: string | null
    isInvoice: boolean | null
    isCreditDebitProformaOrAdvanced: string | null
    uploadedAt: Date | null
    userId: string | null
    SiteId: string | null
  }

  export type InvoicesCountAggregateOutputType = {
    id: number
    url: number
    invoiceNumber: number
    sellerName: number
    invoiceTotalSumNoVat: number
    invoiceTotalSumWithVat: number
    buyerName: number
    invoiceDate: number
    paymentDate: number
    isInvoice: number
    isCreditDebitProformaOrAdvanced: number
    uploadedAt: number
    userId: number
    SiteId: number
    _all: number
  }


  export type InvoicesAvgAggregateInputType = {
    invoiceTotalSumNoVat?: true
    invoiceTotalSumWithVat?: true
  }

  export type InvoicesSumAggregateInputType = {
    invoiceTotalSumNoVat?: true
    invoiceTotalSumWithVat?: true
  }

  export type InvoicesMinAggregateInputType = {
    id?: true
    url?: true
    invoiceNumber?: true
    sellerName?: true
    invoiceTotalSumNoVat?: true
    invoiceTotalSumWithVat?: true
    buyerName?: true
    invoiceDate?: true
    paymentDate?: true
    isInvoice?: true
    isCreditDebitProformaOrAdvanced?: true
    uploadedAt?: true
    userId?: true
    SiteId?: true
  }

  export type InvoicesMaxAggregateInputType = {
    id?: true
    url?: true
    invoiceNumber?: true
    sellerName?: true
    invoiceTotalSumNoVat?: true
    invoiceTotalSumWithVat?: true
    buyerName?: true
    invoiceDate?: true
    paymentDate?: true
    isInvoice?: true
    isCreditDebitProformaOrAdvanced?: true
    uploadedAt?: true
    userId?: true
    SiteId?: true
  }

  export type InvoicesCountAggregateInputType = {
    id?: true
    url?: true
    invoiceNumber?: true
    sellerName?: true
    invoiceTotalSumNoVat?: true
    invoiceTotalSumWithVat?: true
    buyerName?: true
    invoiceDate?: true
    paymentDate?: true
    isInvoice?: true
    isCreditDebitProformaOrAdvanced?: true
    uploadedAt?: true
    userId?: true
    SiteId?: true
    _all?: true
  }

  export type InvoicesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoices to aggregate.
     */
    where?: InvoicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoicesOrderByWithRelationInput | InvoicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invoices
    **/
    _count?: true | InvoicesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoicesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoicesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoicesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoicesMaxAggregateInputType
  }

  export type GetInvoicesAggregateType<T extends InvoicesAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoices[P]>
      : GetScalarType<T[P], AggregateInvoices[P]>
  }




  export type InvoicesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoicesWhereInput
    orderBy?: InvoicesOrderByWithAggregationInput | InvoicesOrderByWithAggregationInput[]
    by: InvoicesScalarFieldEnum[] | InvoicesScalarFieldEnum
    having?: InvoicesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoicesCountAggregateInputType | true
    _avg?: InvoicesAvgAggregateInputType
    _sum?: InvoicesSumAggregateInputType
    _min?: InvoicesMinAggregateInputType
    _max?: InvoicesMaxAggregateInputType
  }

  export type InvoicesGroupByOutputType = {
    id: string
    url: string
    invoiceNumber: string | null
    sellerName: string | null
    invoiceTotalSumNoVat: number | null
    invoiceTotalSumWithVat: number | null
    buyerName: string | null
    invoiceDate: string | null
    paymentDate: string | null
    isInvoice: boolean | null
    isCreditDebitProformaOrAdvanced: string | null
    uploadedAt: Date
    userId: string | null
    SiteId: string | null
    _count: InvoicesCountAggregateOutputType | null
    _avg: InvoicesAvgAggregateOutputType | null
    _sum: InvoicesSumAggregateOutputType | null
    _min: InvoicesMinAggregateOutputType | null
    _max: InvoicesMaxAggregateOutputType | null
  }

  type GetInvoicesGroupByPayload<T extends InvoicesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoicesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoicesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoicesGroupByOutputType[P]>
            : GetScalarType<T[P], InvoicesGroupByOutputType[P]>
        }
      >
    >


  export type InvoicesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    invoiceNumber?: boolean
    sellerName?: boolean
    invoiceTotalSumNoVat?: boolean
    invoiceTotalSumWithVat?: boolean
    buyerName?: boolean
    invoiceDate?: boolean
    paymentDate?: boolean
    isInvoice?: boolean
    isCreditDebitProformaOrAdvanced?: boolean
    uploadedAt?: boolean
    userId?: boolean
    SiteId?: boolean
    User?: boolean | Invoices$UserArgs<ExtArgs>
    Site?: boolean | Invoices$SiteArgs<ExtArgs>
    items?: boolean | Invoices$itemsArgs<ExtArgs>
    _count?: boolean | InvoicesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoices"]>

  export type InvoicesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    invoiceNumber?: boolean
    sellerName?: boolean
    invoiceTotalSumNoVat?: boolean
    invoiceTotalSumWithVat?: boolean
    buyerName?: boolean
    invoiceDate?: boolean
    paymentDate?: boolean
    isInvoice?: boolean
    isCreditDebitProformaOrAdvanced?: boolean
    uploadedAt?: boolean
    userId?: boolean
    SiteId?: boolean
    User?: boolean | Invoices$UserArgs<ExtArgs>
    Site?: boolean | Invoices$SiteArgs<ExtArgs>
  }, ExtArgs["result"]["invoices"]>

  export type InvoicesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    invoiceNumber?: boolean
    sellerName?: boolean
    invoiceTotalSumNoVat?: boolean
    invoiceTotalSumWithVat?: boolean
    buyerName?: boolean
    invoiceDate?: boolean
    paymentDate?: boolean
    isInvoice?: boolean
    isCreditDebitProformaOrAdvanced?: boolean
    uploadedAt?: boolean
    userId?: boolean
    SiteId?: boolean
    User?: boolean | Invoices$UserArgs<ExtArgs>
    Site?: boolean | Invoices$SiteArgs<ExtArgs>
  }, ExtArgs["result"]["invoices"]>

  export type InvoicesSelectScalar = {
    id?: boolean
    url?: boolean
    invoiceNumber?: boolean
    sellerName?: boolean
    invoiceTotalSumNoVat?: boolean
    invoiceTotalSumWithVat?: boolean
    buyerName?: boolean
    invoiceDate?: boolean
    paymentDate?: boolean
    isInvoice?: boolean
    isCreditDebitProformaOrAdvanced?: boolean
    uploadedAt?: boolean
    userId?: boolean
    SiteId?: boolean
  }

  export type InvoicesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "invoiceNumber" | "sellerName" | "invoiceTotalSumNoVat" | "invoiceTotalSumWithVat" | "buyerName" | "invoiceDate" | "paymentDate" | "isInvoice" | "isCreditDebitProformaOrAdvanced" | "uploadedAt" | "userId" | "SiteId", ExtArgs["result"]["invoices"]>
  export type InvoicesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Invoices$UserArgs<ExtArgs>
    Site?: boolean | Invoices$SiteArgs<ExtArgs>
    items?: boolean | Invoices$itemsArgs<ExtArgs>
    _count?: boolean | InvoicesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InvoicesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Invoices$UserArgs<ExtArgs>
    Site?: boolean | Invoices$SiteArgs<ExtArgs>
  }
  export type InvoicesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Invoices$UserArgs<ExtArgs>
    Site?: boolean | Invoices$SiteArgs<ExtArgs>
  }

  export type $InvoicesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invoices"
    objects: {
      User: Prisma.$UserPayload<ExtArgs> | null
      Site: Prisma.$SitePayload<ExtArgs> | null
      items: Prisma.$InvoiceItemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      invoiceNumber: string | null
      sellerName: string | null
      invoiceTotalSumNoVat: number | null
      invoiceTotalSumWithVat: number | null
      buyerName: string | null
      invoiceDate: string | null
      paymentDate: string | null
      isInvoice: boolean | null
      isCreditDebitProformaOrAdvanced: string | null
      uploadedAt: Date
      userId: string | null
      SiteId: string | null
    }, ExtArgs["result"]["invoices"]>
    composites: {}
  }

  type InvoicesGetPayload<S extends boolean | null | undefined | InvoicesDefaultArgs> = $Result.GetResult<Prisma.$InvoicesPayload, S>

  type InvoicesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvoicesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoicesCountAggregateInputType | true
    }

  export interface InvoicesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invoices'], meta: { name: 'Invoices' } }
    /**
     * Find zero or one Invoices that matches the filter.
     * @param {InvoicesFindUniqueArgs} args - Arguments to find a Invoices
     * @example
     * // Get one Invoices
     * const invoices = await prisma.invoices.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoicesFindUniqueArgs>(args: SelectSubset<T, InvoicesFindUniqueArgs<ExtArgs>>): Prisma__InvoicesClient<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invoices that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoicesFindUniqueOrThrowArgs} args - Arguments to find a Invoices
     * @example
     * // Get one Invoices
     * const invoices = await prisma.invoices.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoicesFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoicesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoicesClient<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoicesFindFirstArgs} args - Arguments to find a Invoices
     * @example
     * // Get one Invoices
     * const invoices = await prisma.invoices.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoicesFindFirstArgs>(args?: SelectSubset<T, InvoicesFindFirstArgs<ExtArgs>>): Prisma__InvoicesClient<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoices that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoicesFindFirstOrThrowArgs} args - Arguments to find a Invoices
     * @example
     * // Get one Invoices
     * const invoices = await prisma.invoices.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoicesFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoicesFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoicesClient<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoicesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoices.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoices.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoicesWithIdOnly = await prisma.invoices.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoicesFindManyArgs>(args?: SelectSubset<T, InvoicesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invoices.
     * @param {InvoicesCreateArgs} args - Arguments to create a Invoices.
     * @example
     * // Create one Invoices
     * const Invoices = await prisma.invoices.create({
     *   data: {
     *     // ... data to create a Invoices
     *   }
     * })
     * 
     */
    create<T extends InvoicesCreateArgs>(args: SelectSubset<T, InvoicesCreateArgs<ExtArgs>>): Prisma__InvoicesClient<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invoices.
     * @param {InvoicesCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoices = await prisma.invoices.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoicesCreateManyArgs>(args?: SelectSubset<T, InvoicesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoices and returns the data saved in the database.
     * @param {InvoicesCreateManyAndReturnArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoices = await prisma.invoices.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoices and only return the `id`
     * const invoicesWithIdOnly = await prisma.invoices.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoicesCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoicesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invoices.
     * @param {InvoicesDeleteArgs} args - Arguments to delete one Invoices.
     * @example
     * // Delete one Invoices
     * const Invoices = await prisma.invoices.delete({
     *   where: {
     *     // ... filter to delete one Invoices
     *   }
     * })
     * 
     */
    delete<T extends InvoicesDeleteArgs>(args: SelectSubset<T, InvoicesDeleteArgs<ExtArgs>>): Prisma__InvoicesClient<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invoices.
     * @param {InvoicesUpdateArgs} args - Arguments to update one Invoices.
     * @example
     * // Update one Invoices
     * const invoices = await prisma.invoices.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoicesUpdateArgs>(args: SelectSubset<T, InvoicesUpdateArgs<ExtArgs>>): Prisma__InvoicesClient<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invoices.
     * @param {InvoicesDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoices.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoicesDeleteManyArgs>(args?: SelectSubset<T, InvoicesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoices = await prisma.invoices.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoicesUpdateManyArgs>(args: SelectSubset<T, InvoicesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices and returns the data updated in the database.
     * @param {InvoicesUpdateManyAndReturnArgs} args - Arguments to update many Invoices.
     * @example
     * // Update many Invoices
     * const invoices = await prisma.invoices.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invoices and only return the `id`
     * const invoicesWithIdOnly = await prisma.invoices.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvoicesUpdateManyAndReturnArgs>(args: SelectSubset<T, InvoicesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invoices.
     * @param {InvoicesUpsertArgs} args - Arguments to update or create a Invoices.
     * @example
     * // Update or create a Invoices
     * const invoices = await prisma.invoices.upsert({
     *   create: {
     *     // ... data to create a Invoices
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoices we want to update
     *   }
     * })
     */
    upsert<T extends InvoicesUpsertArgs>(args: SelectSubset<T, InvoicesUpsertArgs<ExtArgs>>): Prisma__InvoicesClient<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoicesCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoices.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends InvoicesCountArgs>(
      args?: Subset<T, InvoicesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoicesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvoicesAggregateArgs>(args: Subset<T, InvoicesAggregateArgs>): Prisma.PrismaPromise<GetInvoicesAggregateType<T>>

    /**
     * Group by Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoicesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvoicesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoicesGroupByArgs['orderBy'] }
        : { orderBy?: InvoicesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvoicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoicesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invoices model
   */
  readonly fields: InvoicesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invoices.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoicesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends Invoices$UserArgs<ExtArgs> = {}>(args?: Subset<T, Invoices$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Site<T extends Invoices$SiteArgs<ExtArgs> = {}>(args?: Subset<T, Invoices$SiteArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    items<T extends Invoices$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Invoices$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Invoices model
   */
  interface InvoicesFieldRefs {
    readonly id: FieldRef<"Invoices", 'String'>
    readonly url: FieldRef<"Invoices", 'String'>
    readonly invoiceNumber: FieldRef<"Invoices", 'String'>
    readonly sellerName: FieldRef<"Invoices", 'String'>
    readonly invoiceTotalSumNoVat: FieldRef<"Invoices", 'Float'>
    readonly invoiceTotalSumWithVat: FieldRef<"Invoices", 'Float'>
    readonly buyerName: FieldRef<"Invoices", 'String'>
    readonly invoiceDate: FieldRef<"Invoices", 'String'>
    readonly paymentDate: FieldRef<"Invoices", 'String'>
    readonly isInvoice: FieldRef<"Invoices", 'Boolean'>
    readonly isCreditDebitProformaOrAdvanced: FieldRef<"Invoices", 'String'>
    readonly uploadedAt: FieldRef<"Invoices", 'DateTime'>
    readonly userId: FieldRef<"Invoices", 'String'>
    readonly SiteId: FieldRef<"Invoices", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Invoices findUnique
   */
  export type InvoicesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where: InvoicesWhereUniqueInput
  }

  /**
   * Invoices findUniqueOrThrow
   */
  export type InvoicesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where: InvoicesWhereUniqueInput
  }

  /**
   * Invoices findFirst
   */
  export type InvoicesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoicesOrderByWithRelationInput | InvoicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * Invoices findFirstOrThrow
   */
  export type InvoicesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoicesOrderByWithRelationInput | InvoicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * Invoices findMany
   */
  export type InvoicesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoicesOrderByWithRelationInput | InvoicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invoices.
     */
    cursor?: InvoicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * Invoices create
   */
  export type InvoicesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesInclude<ExtArgs> | null
    /**
     * The data needed to create a Invoices.
     */
    data: XOR<InvoicesCreateInput, InvoicesUncheckedCreateInput>
  }

  /**
   * Invoices createMany
   */
  export type InvoicesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invoices.
     */
    data: InvoicesCreateManyInput | InvoicesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invoices createManyAndReturn
   */
  export type InvoicesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * The data used to create many Invoices.
     */
    data: InvoicesCreateManyInput | InvoicesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoices update
   */
  export type InvoicesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesInclude<ExtArgs> | null
    /**
     * The data needed to update a Invoices.
     */
    data: XOR<InvoicesUpdateInput, InvoicesUncheckedUpdateInput>
    /**
     * Choose, which Invoices to update.
     */
    where: InvoicesWhereUniqueInput
  }

  /**
   * Invoices updateMany
   */
  export type InvoicesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoicesUpdateManyMutationInput, InvoicesUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoicesWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
  }

  /**
   * Invoices updateManyAndReturn
   */
  export type InvoicesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoicesUpdateManyMutationInput, InvoicesUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoicesWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoices upsert
   */
  export type InvoicesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesInclude<ExtArgs> | null
    /**
     * The filter to search for the Invoices to update in case it exists.
     */
    where: InvoicesWhereUniqueInput
    /**
     * In case the Invoices found by the `where` argument doesn't exist, create a new Invoices with this data.
     */
    create: XOR<InvoicesCreateInput, InvoicesUncheckedCreateInput>
    /**
     * In case the Invoices was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoicesUpdateInput, InvoicesUncheckedUpdateInput>
  }

  /**
   * Invoices delete
   */
  export type InvoicesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesInclude<ExtArgs> | null
    /**
     * Filter which Invoices to delete.
     */
    where: InvoicesWhereUniqueInput
  }

  /**
   * Invoices deleteMany
   */
  export type InvoicesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoices to delete
     */
    where?: InvoicesWhereInput
    /**
     * Limit how many Invoices to delete.
     */
    limit?: number
  }

  /**
   * Invoices.User
   */
  export type Invoices$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Invoices.Site
   */
  export type Invoices$SiteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    where?: SiteWhereInput
  }

  /**
   * Invoices.items
   */
  export type Invoices$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItems
     */
    select?: InvoiceItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItems
     */
    omit?: InvoiceItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemsInclude<ExtArgs> | null
    where?: InvoiceItemsWhereInput
    orderBy?: InvoiceItemsOrderByWithRelationInput | InvoiceItemsOrderByWithRelationInput[]
    cursor?: InvoiceItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceItemsScalarFieldEnum | InvoiceItemsScalarFieldEnum[]
  }

  /**
   * Invoices without action
   */
  export type InvoicesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    title: string | null
    smallDescription: string | null
    image: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    siteId: string | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    title: string | null
    smallDescription: string | null
    image: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    siteId: string | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    title: number
    articleContent: number
    smallDescription: number
    image: number
    slug: number
    createdAt: number
    updatedAt: number
    userId: number
    siteId: number
    _all: number
  }


  export type PostMinAggregateInputType = {
    id?: true
    title?: true
    smallDescription?: true
    image?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    siteId?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    title?: true
    smallDescription?: true
    image?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    siteId?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    title?: true
    articleContent?: true
    smallDescription?: true
    image?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    siteId?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    title: string
    articleContent: JsonValue
    smallDescription: string
    image: string
    slug: string
    createdAt: Date
    updatedAt: Date
    userId: string | null
    siteId: string | null
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    articleContent?: boolean
    smallDescription?: boolean
    image?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    siteId?: boolean
    User?: boolean | Post$UserArgs<ExtArgs>
    Site?: boolean | Post$SiteArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    articleContent?: boolean
    smallDescription?: boolean
    image?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    siteId?: boolean
    User?: boolean | Post$UserArgs<ExtArgs>
    Site?: boolean | Post$SiteArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    articleContent?: boolean
    smallDescription?: boolean
    image?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    siteId?: boolean
    User?: boolean | Post$UserArgs<ExtArgs>
    Site?: boolean | Post$SiteArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    title?: boolean
    articleContent?: boolean
    smallDescription?: boolean
    image?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    siteId?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "articleContent" | "smallDescription" | "image" | "slug" | "createdAt" | "updatedAt" | "userId" | "siteId", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Post$UserArgs<ExtArgs>
    Site?: boolean | Post$SiteArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Post$UserArgs<ExtArgs>
    Site?: boolean | Post$SiteArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Post$UserArgs<ExtArgs>
    Site?: boolean | Post$SiteArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      User: Prisma.$UserPayload<ExtArgs> | null
      Site: Prisma.$SitePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      articleContent: Prisma.JsonValue
      smallDescription: string
      image: string
      slug: string
      createdAt: Date
      updatedAt: Date
      userId: string | null
      siteId: string | null
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends Post$UserArgs<ExtArgs> = {}>(args?: Subset<T, Post$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Site<T extends Post$SiteArgs<ExtArgs> = {}>(args?: Subset<T, Post$SiteArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly title: FieldRef<"Post", 'String'>
    readonly articleContent: FieldRef<"Post", 'Json'>
    readonly smallDescription: FieldRef<"Post", 'String'>
    readonly image: FieldRef<"Post", 'String'>
    readonly slug: FieldRef<"Post", 'String'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
    readonly userId: FieldRef<"Post", 'String'>
    readonly siteId: FieldRef<"Post", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.User
   */
  export type Post$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Post.Site
   */
  export type Post$SiteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    where?: SiteWhereInput
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model InvoiceItems
   */

  export type AggregateInvoiceItems = {
    _count: InvoiceItemsCountAggregateOutputType | null
    _avg: InvoiceItemsAvgAggregateOutputType | null
    _sum: InvoiceItemsSumAggregateOutputType | null
    _min: InvoiceItemsMinAggregateOutputType | null
    _max: InvoiceItemsMaxAggregateOutputType | null
  }

  export type InvoiceItemsAvgAggregateOutputType = {
    quantity: number | null
    pricePerUnitOfMeasure: number | null
    sum: number | null
  }

  export type InvoiceItemsSumAggregateOutputType = {
    quantity: number | null
    pricePerUnitOfMeasure: number | null
    sum: number | null
  }

  export type InvoiceItemsMinAggregateOutputType = {
    id: string | null
    item: string | null
    quantity: number | null
    unitOfMeasure: string | null
    pricePerUnitOfMeasure: number | null
    sum: number | null
    currency: string | null
    category: string | null
    itemDescription: string | null
    commentsForUser: string | null
    isInvoice: boolean | null
    invoiceId: string | null
    siteId: string | null
    invoiceNumber: string | null
    sellerName: string | null
    invoiceDate: string | null
    paymentDate: string | null
  }

  export type InvoiceItemsMaxAggregateOutputType = {
    id: string | null
    item: string | null
    quantity: number | null
    unitOfMeasure: string | null
    pricePerUnitOfMeasure: number | null
    sum: number | null
    currency: string | null
    category: string | null
    itemDescription: string | null
    commentsForUser: string | null
    isInvoice: boolean | null
    invoiceId: string | null
    siteId: string | null
    invoiceNumber: string | null
    sellerName: string | null
    invoiceDate: string | null
    paymentDate: string | null
  }

  export type InvoiceItemsCountAggregateOutputType = {
    id: number
    item: number
    quantity: number
    unitOfMeasure: number
    pricePerUnitOfMeasure: number
    sum: number
    currency: number
    category: number
    itemDescription: number
    commentsForUser: number
    isInvoice: number
    invoiceId: number
    siteId: number
    invoiceNumber: number
    sellerName: number
    invoiceDate: number
    paymentDate: number
    _all: number
  }


  export type InvoiceItemsAvgAggregateInputType = {
    quantity?: true
    pricePerUnitOfMeasure?: true
    sum?: true
  }

  export type InvoiceItemsSumAggregateInputType = {
    quantity?: true
    pricePerUnitOfMeasure?: true
    sum?: true
  }

  export type InvoiceItemsMinAggregateInputType = {
    id?: true
    item?: true
    quantity?: true
    unitOfMeasure?: true
    pricePerUnitOfMeasure?: true
    sum?: true
    currency?: true
    category?: true
    itemDescription?: true
    commentsForUser?: true
    isInvoice?: true
    invoiceId?: true
    siteId?: true
    invoiceNumber?: true
    sellerName?: true
    invoiceDate?: true
    paymentDate?: true
  }

  export type InvoiceItemsMaxAggregateInputType = {
    id?: true
    item?: true
    quantity?: true
    unitOfMeasure?: true
    pricePerUnitOfMeasure?: true
    sum?: true
    currency?: true
    category?: true
    itemDescription?: true
    commentsForUser?: true
    isInvoice?: true
    invoiceId?: true
    siteId?: true
    invoiceNumber?: true
    sellerName?: true
    invoiceDate?: true
    paymentDate?: true
  }

  export type InvoiceItemsCountAggregateInputType = {
    id?: true
    item?: true
    quantity?: true
    unitOfMeasure?: true
    pricePerUnitOfMeasure?: true
    sum?: true
    currency?: true
    category?: true
    itemDescription?: true
    commentsForUser?: true
    isInvoice?: true
    invoiceId?: true
    siteId?: true
    invoiceNumber?: true
    sellerName?: true
    invoiceDate?: true
    paymentDate?: true
    _all?: true
  }

  export type InvoiceItemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvoiceItems to aggregate.
     */
    where?: InvoiceItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceItems to fetch.
     */
    orderBy?: InvoiceItemsOrderByWithRelationInput | InvoiceItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InvoiceItems
    **/
    _count?: true | InvoiceItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceItemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceItemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceItemsMaxAggregateInputType
  }

  export type GetInvoiceItemsAggregateType<T extends InvoiceItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoiceItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoiceItems[P]>
      : GetScalarType<T[P], AggregateInvoiceItems[P]>
  }




  export type InvoiceItemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceItemsWhereInput
    orderBy?: InvoiceItemsOrderByWithAggregationInput | InvoiceItemsOrderByWithAggregationInput[]
    by: InvoiceItemsScalarFieldEnum[] | InvoiceItemsScalarFieldEnum
    having?: InvoiceItemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceItemsCountAggregateInputType | true
    _avg?: InvoiceItemsAvgAggregateInputType
    _sum?: InvoiceItemsSumAggregateInputType
    _min?: InvoiceItemsMinAggregateInputType
    _max?: InvoiceItemsMaxAggregateInputType
  }

  export type InvoiceItemsGroupByOutputType = {
    id: string
    item: string | null
    quantity: number | null
    unitOfMeasure: string | null
    pricePerUnitOfMeasure: number | null
    sum: number | null
    currency: string | null
    category: string | null
    itemDescription: string | null
    commentsForUser: string | null
    isInvoice: boolean | null
    invoiceId: string
    siteId: string | null
    invoiceNumber: string | null
    sellerName: string | null
    invoiceDate: string | null
    paymentDate: string | null
    _count: InvoiceItemsCountAggregateOutputType | null
    _avg: InvoiceItemsAvgAggregateOutputType | null
    _sum: InvoiceItemsSumAggregateOutputType | null
    _min: InvoiceItemsMinAggregateOutputType | null
    _max: InvoiceItemsMaxAggregateOutputType | null
  }

  type GetInvoiceItemsGroupByPayload<T extends InvoiceItemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceItemsGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceItemsGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceItemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    item?: boolean
    quantity?: boolean
    unitOfMeasure?: boolean
    pricePerUnitOfMeasure?: boolean
    sum?: boolean
    currency?: boolean
    category?: boolean
    itemDescription?: boolean
    commentsForUser?: boolean
    isInvoice?: boolean
    invoiceId?: boolean
    siteId?: boolean
    invoiceNumber?: boolean
    sellerName?: boolean
    invoiceDate?: boolean
    paymentDate?: boolean
    invoice?: boolean | InvoicesDefaultArgs<ExtArgs>
    Site?: boolean | InvoiceItems$SiteArgs<ExtArgs>
  }, ExtArgs["result"]["invoiceItems"]>

  export type InvoiceItemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    item?: boolean
    quantity?: boolean
    unitOfMeasure?: boolean
    pricePerUnitOfMeasure?: boolean
    sum?: boolean
    currency?: boolean
    category?: boolean
    itemDescription?: boolean
    commentsForUser?: boolean
    isInvoice?: boolean
    invoiceId?: boolean
    siteId?: boolean
    invoiceNumber?: boolean
    sellerName?: boolean
    invoiceDate?: boolean
    paymentDate?: boolean
    invoice?: boolean | InvoicesDefaultArgs<ExtArgs>
    Site?: boolean | InvoiceItems$SiteArgs<ExtArgs>
  }, ExtArgs["result"]["invoiceItems"]>

  export type InvoiceItemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    item?: boolean
    quantity?: boolean
    unitOfMeasure?: boolean
    pricePerUnitOfMeasure?: boolean
    sum?: boolean
    currency?: boolean
    category?: boolean
    itemDescription?: boolean
    commentsForUser?: boolean
    isInvoice?: boolean
    invoiceId?: boolean
    siteId?: boolean
    invoiceNumber?: boolean
    sellerName?: boolean
    invoiceDate?: boolean
    paymentDate?: boolean
    invoice?: boolean | InvoicesDefaultArgs<ExtArgs>
    Site?: boolean | InvoiceItems$SiteArgs<ExtArgs>
  }, ExtArgs["result"]["invoiceItems"]>

  export type InvoiceItemsSelectScalar = {
    id?: boolean
    item?: boolean
    quantity?: boolean
    unitOfMeasure?: boolean
    pricePerUnitOfMeasure?: boolean
    sum?: boolean
    currency?: boolean
    category?: boolean
    itemDescription?: boolean
    commentsForUser?: boolean
    isInvoice?: boolean
    invoiceId?: boolean
    siteId?: boolean
    invoiceNumber?: boolean
    sellerName?: boolean
    invoiceDate?: boolean
    paymentDate?: boolean
  }

  export type InvoiceItemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "item" | "quantity" | "unitOfMeasure" | "pricePerUnitOfMeasure" | "sum" | "currency" | "category" | "itemDescription" | "commentsForUser" | "isInvoice" | "invoiceId" | "siteId" | "invoiceNumber" | "sellerName" | "invoiceDate" | "paymentDate", ExtArgs["result"]["invoiceItems"]>
  export type InvoiceItemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoicesDefaultArgs<ExtArgs>
    Site?: boolean | InvoiceItems$SiteArgs<ExtArgs>
  }
  export type InvoiceItemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoicesDefaultArgs<ExtArgs>
    Site?: boolean | InvoiceItems$SiteArgs<ExtArgs>
  }
  export type InvoiceItemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoicesDefaultArgs<ExtArgs>
    Site?: boolean | InvoiceItems$SiteArgs<ExtArgs>
  }

  export type $InvoiceItemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InvoiceItems"
    objects: {
      invoice: Prisma.$InvoicesPayload<ExtArgs>
      Site: Prisma.$SitePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      item: string | null
      quantity: number | null
      unitOfMeasure: string | null
      pricePerUnitOfMeasure: number | null
      sum: number | null
      currency: string | null
      category: string | null
      itemDescription: string | null
      commentsForUser: string | null
      isInvoice: boolean | null
      invoiceId: string
      siteId: string | null
      invoiceNumber: string | null
      sellerName: string | null
      invoiceDate: string | null
      paymentDate: string | null
    }, ExtArgs["result"]["invoiceItems"]>
    composites: {}
  }

  type InvoiceItemsGetPayload<S extends boolean | null | undefined | InvoiceItemsDefaultArgs> = $Result.GetResult<Prisma.$InvoiceItemsPayload, S>

  type InvoiceItemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvoiceItemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoiceItemsCountAggregateInputType | true
    }

  export interface InvoiceItemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InvoiceItems'], meta: { name: 'InvoiceItems' } }
    /**
     * Find zero or one InvoiceItems that matches the filter.
     * @param {InvoiceItemsFindUniqueArgs} args - Arguments to find a InvoiceItems
     * @example
     * // Get one InvoiceItems
     * const invoiceItems = await prisma.invoiceItems.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceItemsFindUniqueArgs>(args: SelectSubset<T, InvoiceItemsFindUniqueArgs<ExtArgs>>): Prisma__InvoiceItemsClient<$Result.GetResult<Prisma.$InvoiceItemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InvoiceItems that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoiceItemsFindUniqueOrThrowArgs} args - Arguments to find a InvoiceItems
     * @example
     * // Get one InvoiceItems
     * const invoiceItems = await prisma.invoiceItems.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceItemsFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceItemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceItemsClient<$Result.GetResult<Prisma.$InvoiceItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InvoiceItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemsFindFirstArgs} args - Arguments to find a InvoiceItems
     * @example
     * // Get one InvoiceItems
     * const invoiceItems = await prisma.invoiceItems.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceItemsFindFirstArgs>(args?: SelectSubset<T, InvoiceItemsFindFirstArgs<ExtArgs>>): Prisma__InvoiceItemsClient<$Result.GetResult<Prisma.$InvoiceItemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InvoiceItems that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemsFindFirstOrThrowArgs} args - Arguments to find a InvoiceItems
     * @example
     * // Get one InvoiceItems
     * const invoiceItems = await prisma.invoiceItems.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceItemsFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceItemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceItemsClient<$Result.GetResult<Prisma.$InvoiceItemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InvoiceItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InvoiceItems
     * const invoiceItems = await prisma.invoiceItems.findMany()
     * 
     * // Get first 10 InvoiceItems
     * const invoiceItems = await prisma.invoiceItems.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceItemsWithIdOnly = await prisma.invoiceItems.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoiceItemsFindManyArgs>(args?: SelectSubset<T, InvoiceItemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InvoiceItems.
     * @param {InvoiceItemsCreateArgs} args - Arguments to create a InvoiceItems.
     * @example
     * // Create one InvoiceItems
     * const InvoiceItems = await prisma.invoiceItems.create({
     *   data: {
     *     // ... data to create a InvoiceItems
     *   }
     * })
     * 
     */
    create<T extends InvoiceItemsCreateArgs>(args: SelectSubset<T, InvoiceItemsCreateArgs<ExtArgs>>): Prisma__InvoiceItemsClient<$Result.GetResult<Prisma.$InvoiceItemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InvoiceItems.
     * @param {InvoiceItemsCreateManyArgs} args - Arguments to create many InvoiceItems.
     * @example
     * // Create many InvoiceItems
     * const invoiceItems = await prisma.invoiceItems.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceItemsCreateManyArgs>(args?: SelectSubset<T, InvoiceItemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InvoiceItems and returns the data saved in the database.
     * @param {InvoiceItemsCreateManyAndReturnArgs} args - Arguments to create many InvoiceItems.
     * @example
     * // Create many InvoiceItems
     * const invoiceItems = await prisma.invoiceItems.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InvoiceItems and only return the `id`
     * const invoiceItemsWithIdOnly = await prisma.invoiceItems.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoiceItemsCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceItemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceItemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InvoiceItems.
     * @param {InvoiceItemsDeleteArgs} args - Arguments to delete one InvoiceItems.
     * @example
     * // Delete one InvoiceItems
     * const InvoiceItems = await prisma.invoiceItems.delete({
     *   where: {
     *     // ... filter to delete one InvoiceItems
     *   }
     * })
     * 
     */
    delete<T extends InvoiceItemsDeleteArgs>(args: SelectSubset<T, InvoiceItemsDeleteArgs<ExtArgs>>): Prisma__InvoiceItemsClient<$Result.GetResult<Prisma.$InvoiceItemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InvoiceItems.
     * @param {InvoiceItemsUpdateArgs} args - Arguments to update one InvoiceItems.
     * @example
     * // Update one InvoiceItems
     * const invoiceItems = await prisma.invoiceItems.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceItemsUpdateArgs>(args: SelectSubset<T, InvoiceItemsUpdateArgs<ExtArgs>>): Prisma__InvoiceItemsClient<$Result.GetResult<Prisma.$InvoiceItemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InvoiceItems.
     * @param {InvoiceItemsDeleteManyArgs} args - Arguments to filter InvoiceItems to delete.
     * @example
     * // Delete a few InvoiceItems
     * const { count } = await prisma.invoiceItems.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceItemsDeleteManyArgs>(args?: SelectSubset<T, InvoiceItemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvoiceItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InvoiceItems
     * const invoiceItems = await prisma.invoiceItems.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceItemsUpdateManyArgs>(args: SelectSubset<T, InvoiceItemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvoiceItems and returns the data updated in the database.
     * @param {InvoiceItemsUpdateManyAndReturnArgs} args - Arguments to update many InvoiceItems.
     * @example
     * // Update many InvoiceItems
     * const invoiceItems = await prisma.invoiceItems.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InvoiceItems and only return the `id`
     * const invoiceItemsWithIdOnly = await prisma.invoiceItems.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvoiceItemsUpdateManyAndReturnArgs>(args: SelectSubset<T, InvoiceItemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceItemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InvoiceItems.
     * @param {InvoiceItemsUpsertArgs} args - Arguments to update or create a InvoiceItems.
     * @example
     * // Update or create a InvoiceItems
     * const invoiceItems = await prisma.invoiceItems.upsert({
     *   create: {
     *     // ... data to create a InvoiceItems
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InvoiceItems we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceItemsUpsertArgs>(args: SelectSubset<T, InvoiceItemsUpsertArgs<ExtArgs>>): Prisma__InvoiceItemsClient<$Result.GetResult<Prisma.$InvoiceItemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InvoiceItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemsCountArgs} args - Arguments to filter InvoiceItems to count.
     * @example
     * // Count the number of InvoiceItems
     * const count = await prisma.invoiceItems.count({
     *   where: {
     *     // ... the filter for the InvoiceItems we want to count
     *   }
     * })
    **/
    count<T extends InvoiceItemsCountArgs>(
      args?: Subset<T, InvoiceItemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InvoiceItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvoiceItemsAggregateArgs>(args: Subset<T, InvoiceItemsAggregateArgs>): Prisma.PrismaPromise<GetInvoiceItemsAggregateType<T>>

    /**
     * Group by InvoiceItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvoiceItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceItemsGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceItemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvoiceItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InvoiceItems model
   */
  readonly fields: InvoiceItemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InvoiceItems.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceItemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invoice<T extends InvoicesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvoicesDefaultArgs<ExtArgs>>): Prisma__InvoicesClient<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Site<T extends InvoiceItems$SiteArgs<ExtArgs> = {}>(args?: Subset<T, InvoiceItems$SiteArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InvoiceItems model
   */
  interface InvoiceItemsFieldRefs {
    readonly id: FieldRef<"InvoiceItems", 'String'>
    readonly item: FieldRef<"InvoiceItems", 'String'>
    readonly quantity: FieldRef<"InvoiceItems", 'Float'>
    readonly unitOfMeasure: FieldRef<"InvoiceItems", 'String'>
    readonly pricePerUnitOfMeasure: FieldRef<"InvoiceItems", 'Float'>
    readonly sum: FieldRef<"InvoiceItems", 'Float'>
    readonly currency: FieldRef<"InvoiceItems", 'String'>
    readonly category: FieldRef<"InvoiceItems", 'String'>
    readonly itemDescription: FieldRef<"InvoiceItems", 'String'>
    readonly commentsForUser: FieldRef<"InvoiceItems", 'String'>
    readonly isInvoice: FieldRef<"InvoiceItems", 'Boolean'>
    readonly invoiceId: FieldRef<"InvoiceItems", 'String'>
    readonly siteId: FieldRef<"InvoiceItems", 'String'>
    readonly invoiceNumber: FieldRef<"InvoiceItems", 'String'>
    readonly sellerName: FieldRef<"InvoiceItems", 'String'>
    readonly invoiceDate: FieldRef<"InvoiceItems", 'String'>
    readonly paymentDate: FieldRef<"InvoiceItems", 'String'>
  }
    

  // Custom InputTypes
  /**
   * InvoiceItems findUnique
   */
  export type InvoiceItemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItems
     */
    select?: InvoiceItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItems
     */
    omit?: InvoiceItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemsInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceItems to fetch.
     */
    where: InvoiceItemsWhereUniqueInput
  }

  /**
   * InvoiceItems findUniqueOrThrow
   */
  export type InvoiceItemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItems
     */
    select?: InvoiceItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItems
     */
    omit?: InvoiceItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemsInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceItems to fetch.
     */
    where: InvoiceItemsWhereUniqueInput
  }

  /**
   * InvoiceItems findFirst
   */
  export type InvoiceItemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItems
     */
    select?: InvoiceItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItems
     */
    omit?: InvoiceItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemsInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceItems to fetch.
     */
    where?: InvoiceItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceItems to fetch.
     */
    orderBy?: InvoiceItemsOrderByWithRelationInput | InvoiceItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvoiceItems.
     */
    cursor?: InvoiceItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvoiceItems.
     */
    distinct?: InvoiceItemsScalarFieldEnum | InvoiceItemsScalarFieldEnum[]
  }

  /**
   * InvoiceItems findFirstOrThrow
   */
  export type InvoiceItemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItems
     */
    select?: InvoiceItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItems
     */
    omit?: InvoiceItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemsInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceItems to fetch.
     */
    where?: InvoiceItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceItems to fetch.
     */
    orderBy?: InvoiceItemsOrderByWithRelationInput | InvoiceItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvoiceItems.
     */
    cursor?: InvoiceItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvoiceItems.
     */
    distinct?: InvoiceItemsScalarFieldEnum | InvoiceItemsScalarFieldEnum[]
  }

  /**
   * InvoiceItems findMany
   */
  export type InvoiceItemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItems
     */
    select?: InvoiceItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItems
     */
    omit?: InvoiceItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemsInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceItems to fetch.
     */
    where?: InvoiceItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceItems to fetch.
     */
    orderBy?: InvoiceItemsOrderByWithRelationInput | InvoiceItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InvoiceItems.
     */
    cursor?: InvoiceItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceItems.
     */
    skip?: number
    distinct?: InvoiceItemsScalarFieldEnum | InvoiceItemsScalarFieldEnum[]
  }

  /**
   * InvoiceItems create
   */
  export type InvoiceItemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItems
     */
    select?: InvoiceItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItems
     */
    omit?: InvoiceItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemsInclude<ExtArgs> | null
    /**
     * The data needed to create a InvoiceItems.
     */
    data: XOR<InvoiceItemsCreateInput, InvoiceItemsUncheckedCreateInput>
  }

  /**
   * InvoiceItems createMany
   */
  export type InvoiceItemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InvoiceItems.
     */
    data: InvoiceItemsCreateManyInput | InvoiceItemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InvoiceItems createManyAndReturn
   */
  export type InvoiceItemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItems
     */
    select?: InvoiceItemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItems
     */
    omit?: InvoiceItemsOmit<ExtArgs> | null
    /**
     * The data used to create many InvoiceItems.
     */
    data: InvoiceItemsCreateManyInput | InvoiceItemsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InvoiceItems update
   */
  export type InvoiceItemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItems
     */
    select?: InvoiceItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItems
     */
    omit?: InvoiceItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemsInclude<ExtArgs> | null
    /**
     * The data needed to update a InvoiceItems.
     */
    data: XOR<InvoiceItemsUpdateInput, InvoiceItemsUncheckedUpdateInput>
    /**
     * Choose, which InvoiceItems to update.
     */
    where: InvoiceItemsWhereUniqueInput
  }

  /**
   * InvoiceItems updateMany
   */
  export type InvoiceItemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InvoiceItems.
     */
    data: XOR<InvoiceItemsUpdateManyMutationInput, InvoiceItemsUncheckedUpdateManyInput>
    /**
     * Filter which InvoiceItems to update
     */
    where?: InvoiceItemsWhereInput
    /**
     * Limit how many InvoiceItems to update.
     */
    limit?: number
  }

  /**
   * InvoiceItems updateManyAndReturn
   */
  export type InvoiceItemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItems
     */
    select?: InvoiceItemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItems
     */
    omit?: InvoiceItemsOmit<ExtArgs> | null
    /**
     * The data used to update InvoiceItems.
     */
    data: XOR<InvoiceItemsUpdateManyMutationInput, InvoiceItemsUncheckedUpdateManyInput>
    /**
     * Filter which InvoiceItems to update
     */
    where?: InvoiceItemsWhereInput
    /**
     * Limit how many InvoiceItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InvoiceItems upsert
   */
  export type InvoiceItemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItems
     */
    select?: InvoiceItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItems
     */
    omit?: InvoiceItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemsInclude<ExtArgs> | null
    /**
     * The filter to search for the InvoiceItems to update in case it exists.
     */
    where: InvoiceItemsWhereUniqueInput
    /**
     * In case the InvoiceItems found by the `where` argument doesn't exist, create a new InvoiceItems with this data.
     */
    create: XOR<InvoiceItemsCreateInput, InvoiceItemsUncheckedCreateInput>
    /**
     * In case the InvoiceItems was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceItemsUpdateInput, InvoiceItemsUncheckedUpdateInput>
  }

  /**
   * InvoiceItems delete
   */
  export type InvoiceItemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItems
     */
    select?: InvoiceItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItems
     */
    omit?: InvoiceItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemsInclude<ExtArgs> | null
    /**
     * Filter which InvoiceItems to delete.
     */
    where: InvoiceItemsWhereUniqueInput
  }

  /**
   * InvoiceItems deleteMany
   */
  export type InvoiceItemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvoiceItems to delete
     */
    where?: InvoiceItemsWhereInput
    /**
     * Limit how many InvoiceItems to delete.
     */
    limit?: number
  }

  /**
   * InvoiceItems.Site
   */
  export type InvoiceItems$SiteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    where?: SiteWhereInput
  }

  /**
   * InvoiceItems without action
   */
  export type InvoiceItemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItems
     */
    select?: InvoiceItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItems
     */
    omit?: InvoiceItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemsInclude<ExtArgs> | null
  }


  /**
   * Model AIconversation
   */

  export type AggregateAIconversation = {
    _count: AIconversationCountAggregateOutputType | null
    _min: AIconversationMinAggregateOutputType | null
    _max: AIconversationMaxAggregateOutputType | null
  }

  export type AIconversationMinAggregateOutputType = {
    id: string | null
    userId: string | null
  }

  export type AIconversationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
  }

  export type AIconversationCountAggregateOutputType = {
    id: number
    thread: number
    userId: number
    _all: number
  }


  export type AIconversationMinAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AIconversationMaxAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AIconversationCountAggregateInputType = {
    id?: true
    thread?: true
    userId?: true
    _all?: true
  }

  export type AIconversationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIconversation to aggregate.
     */
    where?: AIconversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIconversations to fetch.
     */
    orderBy?: AIconversationOrderByWithRelationInput | AIconversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AIconversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIconversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIconversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AIconversations
    **/
    _count?: true | AIconversationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AIconversationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AIconversationMaxAggregateInputType
  }

  export type GetAIconversationAggregateType<T extends AIconversationAggregateArgs> = {
        [P in keyof T & keyof AggregateAIconversation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAIconversation[P]>
      : GetScalarType<T[P], AggregateAIconversation[P]>
  }




  export type AIconversationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIconversationWhereInput
    orderBy?: AIconversationOrderByWithAggregationInput | AIconversationOrderByWithAggregationInput[]
    by: AIconversationScalarFieldEnum[] | AIconversationScalarFieldEnum
    having?: AIconversationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AIconversationCountAggregateInputType | true
    _min?: AIconversationMinAggregateInputType
    _max?: AIconversationMaxAggregateInputType
  }

  export type AIconversationGroupByOutputType = {
    id: string
    thread: JsonValue | null
    userId: string
    _count: AIconversationCountAggregateOutputType | null
    _min: AIconversationMinAggregateOutputType | null
    _max: AIconversationMaxAggregateOutputType | null
  }

  type GetAIconversationGroupByPayload<T extends AIconversationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AIconversationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AIconversationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AIconversationGroupByOutputType[P]>
            : GetScalarType<T[P], AIconversationGroupByOutputType[P]>
        }
      >
    >


  export type AIconversationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    thread?: boolean
    userId?: boolean
    User?: boolean | AIconversation$UserArgs<ExtArgs>
  }, ExtArgs["result"]["aIconversation"]>

  export type AIconversationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    thread?: boolean
    userId?: boolean
    User?: boolean | AIconversation$UserArgs<ExtArgs>
  }, ExtArgs["result"]["aIconversation"]>

  export type AIconversationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    thread?: boolean
    userId?: boolean
    User?: boolean | AIconversation$UserArgs<ExtArgs>
  }, ExtArgs["result"]["aIconversation"]>

  export type AIconversationSelectScalar = {
    id?: boolean
    thread?: boolean
    userId?: boolean
  }

  export type AIconversationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "thread" | "userId", ExtArgs["result"]["aIconversation"]>
  export type AIconversationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | AIconversation$UserArgs<ExtArgs>
  }
  export type AIconversationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | AIconversation$UserArgs<ExtArgs>
  }
  export type AIconversationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | AIconversation$UserArgs<ExtArgs>
  }

  export type $AIconversationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AIconversation"
    objects: {
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      thread: Prisma.JsonValue | null
      userId: string
    }, ExtArgs["result"]["aIconversation"]>
    composites: {}
  }

  type AIconversationGetPayload<S extends boolean | null | undefined | AIconversationDefaultArgs> = $Result.GetResult<Prisma.$AIconversationPayload, S>

  type AIconversationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AIconversationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AIconversationCountAggregateInputType | true
    }

  export interface AIconversationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AIconversation'], meta: { name: 'AIconversation' } }
    /**
     * Find zero or one AIconversation that matches the filter.
     * @param {AIconversationFindUniqueArgs} args - Arguments to find a AIconversation
     * @example
     * // Get one AIconversation
     * const aIconversation = await prisma.aIconversation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AIconversationFindUniqueArgs>(args: SelectSubset<T, AIconversationFindUniqueArgs<ExtArgs>>): Prisma__AIconversationClient<$Result.GetResult<Prisma.$AIconversationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AIconversation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AIconversationFindUniqueOrThrowArgs} args - Arguments to find a AIconversation
     * @example
     * // Get one AIconversation
     * const aIconversation = await prisma.aIconversation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AIconversationFindUniqueOrThrowArgs>(args: SelectSubset<T, AIconversationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AIconversationClient<$Result.GetResult<Prisma.$AIconversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIconversation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIconversationFindFirstArgs} args - Arguments to find a AIconversation
     * @example
     * // Get one AIconversation
     * const aIconversation = await prisma.aIconversation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AIconversationFindFirstArgs>(args?: SelectSubset<T, AIconversationFindFirstArgs<ExtArgs>>): Prisma__AIconversationClient<$Result.GetResult<Prisma.$AIconversationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIconversation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIconversationFindFirstOrThrowArgs} args - Arguments to find a AIconversation
     * @example
     * // Get one AIconversation
     * const aIconversation = await prisma.aIconversation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AIconversationFindFirstOrThrowArgs>(args?: SelectSubset<T, AIconversationFindFirstOrThrowArgs<ExtArgs>>): Prisma__AIconversationClient<$Result.GetResult<Prisma.$AIconversationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AIconversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIconversationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AIconversations
     * const aIconversations = await prisma.aIconversation.findMany()
     * 
     * // Get first 10 AIconversations
     * const aIconversations = await prisma.aIconversation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aIconversationWithIdOnly = await prisma.aIconversation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AIconversationFindManyArgs>(args?: SelectSubset<T, AIconversationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIconversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AIconversation.
     * @param {AIconversationCreateArgs} args - Arguments to create a AIconversation.
     * @example
     * // Create one AIconversation
     * const AIconversation = await prisma.aIconversation.create({
     *   data: {
     *     // ... data to create a AIconversation
     *   }
     * })
     * 
     */
    create<T extends AIconversationCreateArgs>(args: SelectSubset<T, AIconversationCreateArgs<ExtArgs>>): Prisma__AIconversationClient<$Result.GetResult<Prisma.$AIconversationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AIconversations.
     * @param {AIconversationCreateManyArgs} args - Arguments to create many AIconversations.
     * @example
     * // Create many AIconversations
     * const aIconversation = await prisma.aIconversation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AIconversationCreateManyArgs>(args?: SelectSubset<T, AIconversationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AIconversations and returns the data saved in the database.
     * @param {AIconversationCreateManyAndReturnArgs} args - Arguments to create many AIconversations.
     * @example
     * // Create many AIconversations
     * const aIconversation = await prisma.aIconversation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AIconversations and only return the `id`
     * const aIconversationWithIdOnly = await prisma.aIconversation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AIconversationCreateManyAndReturnArgs>(args?: SelectSubset<T, AIconversationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIconversationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AIconversation.
     * @param {AIconversationDeleteArgs} args - Arguments to delete one AIconversation.
     * @example
     * // Delete one AIconversation
     * const AIconversation = await prisma.aIconversation.delete({
     *   where: {
     *     // ... filter to delete one AIconversation
     *   }
     * })
     * 
     */
    delete<T extends AIconversationDeleteArgs>(args: SelectSubset<T, AIconversationDeleteArgs<ExtArgs>>): Prisma__AIconversationClient<$Result.GetResult<Prisma.$AIconversationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AIconversation.
     * @param {AIconversationUpdateArgs} args - Arguments to update one AIconversation.
     * @example
     * // Update one AIconversation
     * const aIconversation = await prisma.aIconversation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AIconversationUpdateArgs>(args: SelectSubset<T, AIconversationUpdateArgs<ExtArgs>>): Prisma__AIconversationClient<$Result.GetResult<Prisma.$AIconversationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AIconversations.
     * @param {AIconversationDeleteManyArgs} args - Arguments to filter AIconversations to delete.
     * @example
     * // Delete a few AIconversations
     * const { count } = await prisma.aIconversation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AIconversationDeleteManyArgs>(args?: SelectSubset<T, AIconversationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIconversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIconversationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AIconversations
     * const aIconversation = await prisma.aIconversation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AIconversationUpdateManyArgs>(args: SelectSubset<T, AIconversationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIconversations and returns the data updated in the database.
     * @param {AIconversationUpdateManyAndReturnArgs} args - Arguments to update many AIconversations.
     * @example
     * // Update many AIconversations
     * const aIconversation = await prisma.aIconversation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AIconversations and only return the `id`
     * const aIconversationWithIdOnly = await prisma.aIconversation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AIconversationUpdateManyAndReturnArgs>(args: SelectSubset<T, AIconversationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIconversationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AIconversation.
     * @param {AIconversationUpsertArgs} args - Arguments to update or create a AIconversation.
     * @example
     * // Update or create a AIconversation
     * const aIconversation = await prisma.aIconversation.upsert({
     *   create: {
     *     // ... data to create a AIconversation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AIconversation we want to update
     *   }
     * })
     */
    upsert<T extends AIconversationUpsertArgs>(args: SelectSubset<T, AIconversationUpsertArgs<ExtArgs>>): Prisma__AIconversationClient<$Result.GetResult<Prisma.$AIconversationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AIconversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIconversationCountArgs} args - Arguments to filter AIconversations to count.
     * @example
     * // Count the number of AIconversations
     * const count = await prisma.aIconversation.count({
     *   where: {
     *     // ... the filter for the AIconversations we want to count
     *   }
     * })
    **/
    count<T extends AIconversationCountArgs>(
      args?: Subset<T, AIconversationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AIconversationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AIconversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIconversationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AIconversationAggregateArgs>(args: Subset<T, AIconversationAggregateArgs>): Prisma.PrismaPromise<GetAIconversationAggregateType<T>>

    /**
     * Group by AIconversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIconversationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AIconversationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AIconversationGroupByArgs['orderBy'] }
        : { orderBy?: AIconversationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AIconversationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAIconversationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AIconversation model
   */
  readonly fields: AIconversationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AIconversation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AIconversationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends AIconversation$UserArgs<ExtArgs> = {}>(args?: Subset<T, AIconversation$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AIconversation model
   */
  interface AIconversationFieldRefs {
    readonly id: FieldRef<"AIconversation", 'String'>
    readonly thread: FieldRef<"AIconversation", 'Json'>
    readonly userId: FieldRef<"AIconversation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AIconversation findUnique
   */
  export type AIconversationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIconversation
     */
    select?: AIconversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIconversation
     */
    omit?: AIconversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIconversationInclude<ExtArgs> | null
    /**
     * Filter, which AIconversation to fetch.
     */
    where: AIconversationWhereUniqueInput
  }

  /**
   * AIconversation findUniqueOrThrow
   */
  export type AIconversationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIconversation
     */
    select?: AIconversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIconversation
     */
    omit?: AIconversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIconversationInclude<ExtArgs> | null
    /**
     * Filter, which AIconversation to fetch.
     */
    where: AIconversationWhereUniqueInput
  }

  /**
   * AIconversation findFirst
   */
  export type AIconversationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIconversation
     */
    select?: AIconversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIconversation
     */
    omit?: AIconversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIconversationInclude<ExtArgs> | null
    /**
     * Filter, which AIconversation to fetch.
     */
    where?: AIconversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIconversations to fetch.
     */
    orderBy?: AIconversationOrderByWithRelationInput | AIconversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIconversations.
     */
    cursor?: AIconversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIconversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIconversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIconversations.
     */
    distinct?: AIconversationScalarFieldEnum | AIconversationScalarFieldEnum[]
  }

  /**
   * AIconversation findFirstOrThrow
   */
  export type AIconversationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIconversation
     */
    select?: AIconversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIconversation
     */
    omit?: AIconversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIconversationInclude<ExtArgs> | null
    /**
     * Filter, which AIconversation to fetch.
     */
    where?: AIconversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIconversations to fetch.
     */
    orderBy?: AIconversationOrderByWithRelationInput | AIconversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIconversations.
     */
    cursor?: AIconversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIconversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIconversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIconversations.
     */
    distinct?: AIconversationScalarFieldEnum | AIconversationScalarFieldEnum[]
  }

  /**
   * AIconversation findMany
   */
  export type AIconversationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIconversation
     */
    select?: AIconversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIconversation
     */
    omit?: AIconversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIconversationInclude<ExtArgs> | null
    /**
     * Filter, which AIconversations to fetch.
     */
    where?: AIconversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIconversations to fetch.
     */
    orderBy?: AIconversationOrderByWithRelationInput | AIconversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AIconversations.
     */
    cursor?: AIconversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIconversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIconversations.
     */
    skip?: number
    distinct?: AIconversationScalarFieldEnum | AIconversationScalarFieldEnum[]
  }

  /**
   * AIconversation create
   */
  export type AIconversationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIconversation
     */
    select?: AIconversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIconversation
     */
    omit?: AIconversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIconversationInclude<ExtArgs> | null
    /**
     * The data needed to create a AIconversation.
     */
    data: XOR<AIconversationCreateInput, AIconversationUncheckedCreateInput>
  }

  /**
   * AIconversation createMany
   */
  export type AIconversationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AIconversations.
     */
    data: AIconversationCreateManyInput | AIconversationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AIconversation createManyAndReturn
   */
  export type AIconversationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIconversation
     */
    select?: AIconversationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AIconversation
     */
    omit?: AIconversationOmit<ExtArgs> | null
    /**
     * The data used to create many AIconversations.
     */
    data: AIconversationCreateManyInput | AIconversationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIconversationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AIconversation update
   */
  export type AIconversationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIconversation
     */
    select?: AIconversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIconversation
     */
    omit?: AIconversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIconversationInclude<ExtArgs> | null
    /**
     * The data needed to update a AIconversation.
     */
    data: XOR<AIconversationUpdateInput, AIconversationUncheckedUpdateInput>
    /**
     * Choose, which AIconversation to update.
     */
    where: AIconversationWhereUniqueInput
  }

  /**
   * AIconversation updateMany
   */
  export type AIconversationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AIconversations.
     */
    data: XOR<AIconversationUpdateManyMutationInput, AIconversationUncheckedUpdateManyInput>
    /**
     * Filter which AIconversations to update
     */
    where?: AIconversationWhereInput
    /**
     * Limit how many AIconversations to update.
     */
    limit?: number
  }

  /**
   * AIconversation updateManyAndReturn
   */
  export type AIconversationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIconversation
     */
    select?: AIconversationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AIconversation
     */
    omit?: AIconversationOmit<ExtArgs> | null
    /**
     * The data used to update AIconversations.
     */
    data: XOR<AIconversationUpdateManyMutationInput, AIconversationUncheckedUpdateManyInput>
    /**
     * Filter which AIconversations to update
     */
    where?: AIconversationWhereInput
    /**
     * Limit how many AIconversations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIconversationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AIconversation upsert
   */
  export type AIconversationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIconversation
     */
    select?: AIconversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIconversation
     */
    omit?: AIconversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIconversationInclude<ExtArgs> | null
    /**
     * The filter to search for the AIconversation to update in case it exists.
     */
    where: AIconversationWhereUniqueInput
    /**
     * In case the AIconversation found by the `where` argument doesn't exist, create a new AIconversation with this data.
     */
    create: XOR<AIconversationCreateInput, AIconversationUncheckedCreateInput>
    /**
     * In case the AIconversation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AIconversationUpdateInput, AIconversationUncheckedUpdateInput>
  }

  /**
   * AIconversation delete
   */
  export type AIconversationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIconversation
     */
    select?: AIconversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIconversation
     */
    omit?: AIconversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIconversationInclude<ExtArgs> | null
    /**
     * Filter which AIconversation to delete.
     */
    where: AIconversationWhereUniqueInput
  }

  /**
   * AIconversation deleteMany
   */
  export type AIconversationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIconversations to delete
     */
    where?: AIconversationWhereInput
    /**
     * Limit how many AIconversations to delete.
     */
    limit?: number
  }

  /**
   * AIconversation.User
   */
  export type AIconversation$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * AIconversation without action
   */
  export type AIconversationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIconversation
     */
    select?: AIconversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIconversation
     */
    omit?: AIconversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIconversationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    firstName: 'firstName',
    lastName: 'lastName',
    profileImage: 'profileImage',
    customerId: 'customerId',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SiteScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    subdirectory: 'subdirectory',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    imageUrl: 'imageUrl',
    userId: 'userId'
  };

  export type SiteScalarFieldEnum = (typeof SiteScalarFieldEnum)[keyof typeof SiteScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    stripeSubscriptionId: 'stripeSubscriptionId',
    interval: 'interval',
    status: 'status',
    planId: 'planId',
    currentPeriodStart: 'currentPeriodStart',
    currentPeriodEnd: 'currentPeriodEnd',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const InvoicesScalarFieldEnum: {
    id: 'id',
    url: 'url',
    invoiceNumber: 'invoiceNumber',
    sellerName: 'sellerName',
    invoiceTotalSumNoVat: 'invoiceTotalSumNoVat',
    invoiceTotalSumWithVat: 'invoiceTotalSumWithVat',
    buyerName: 'buyerName',
    invoiceDate: 'invoiceDate',
    paymentDate: 'paymentDate',
    isInvoice: 'isInvoice',
    isCreditDebitProformaOrAdvanced: 'isCreditDebitProformaOrAdvanced',
    uploadedAt: 'uploadedAt',
    userId: 'userId',
    SiteId: 'SiteId'
  };

  export type InvoicesScalarFieldEnum = (typeof InvoicesScalarFieldEnum)[keyof typeof InvoicesScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    articleContent: 'articleContent',
    smallDescription: 'smallDescription',
    image: 'image',
    slug: 'slug',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    siteId: 'siteId'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const InvoiceItemsScalarFieldEnum: {
    id: 'id',
    item: 'item',
    quantity: 'quantity',
    unitOfMeasure: 'unitOfMeasure',
    pricePerUnitOfMeasure: 'pricePerUnitOfMeasure',
    sum: 'sum',
    currency: 'currency',
    category: 'category',
    itemDescription: 'itemDescription',
    commentsForUser: 'commentsForUser',
    isInvoice: 'isInvoice',
    invoiceId: 'invoiceId',
    siteId: 'siteId',
    invoiceNumber: 'invoiceNumber',
    sellerName: 'sellerName',
    invoiceDate: 'invoiceDate',
    paymentDate: 'paymentDate'
  };

  export type InvoiceItemsScalarFieldEnum = (typeof InvoiceItemsScalarFieldEnum)[keyof typeof InvoiceItemsScalarFieldEnum]


  export const AIconversationScalarFieldEnum: {
    id: 'id',
    thread: 'thread',
    userId: 'userId'
  };

  export type AIconversationScalarFieldEnum = (typeof AIconversationScalarFieldEnum)[keyof typeof AIconversationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    profileImage?: StringFilter<"User"> | string
    customerId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    Site?: SiteListRelationFilter
    posts?: PostListRelationFilter
    Invoices?: InvoicesListRelationFilter
    Subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
    AIconversation?: XOR<AIconversationNullableScalarRelationFilter, AIconversationWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    profileImage?: SortOrder
    customerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    Site?: SiteOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
    Invoices?: InvoicesOrderByRelationAggregateInput
    Subscription?: SubscriptionOrderByWithRelationInput
    AIconversation?: AIconversationOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    customerId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    email?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    profileImage?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    Site?: SiteListRelationFilter
    posts?: PostListRelationFilter
    Invoices?: InvoicesListRelationFilter
    Subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
    AIconversation?: XOR<AIconversationNullableScalarRelationFilter, AIconversationWhereInput> | null
  }, "id" | "id" | "customerId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    profileImage?: SortOrder
    customerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    profileImage?: StringWithAggregatesFilter<"User"> | string
    customerId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SiteWhereInput = {
    AND?: SiteWhereInput | SiteWhereInput[]
    OR?: SiteWhereInput[]
    NOT?: SiteWhereInput | SiteWhereInput[]
    id?: StringFilter<"Site"> | string
    name?: StringFilter<"Site"> | string
    description?: StringFilter<"Site"> | string
    subdirectory?: StringFilter<"Site"> | string
    createdAt?: DateTimeFilter<"Site"> | Date | string
    updatedAt?: DateTimeFilter<"Site"> | Date | string
    imageUrl?: StringNullableFilter<"Site"> | string | null
    userId?: StringNullableFilter<"Site"> | string | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    posts?: PostListRelationFilter
    invoices?: InvoicesListRelationFilter
    InvoiceItems?: InvoiceItemsListRelationFilter
  }

  export type SiteOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    subdirectory?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
    posts?: PostOrderByRelationAggregateInput
    invoices?: InvoicesOrderByRelationAggregateInput
    InvoiceItems?: InvoiceItemsOrderByRelationAggregateInput
  }

  export type SiteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    subdirectory?: string
    AND?: SiteWhereInput | SiteWhereInput[]
    OR?: SiteWhereInput[]
    NOT?: SiteWhereInput | SiteWhereInput[]
    name?: StringFilter<"Site"> | string
    description?: StringFilter<"Site"> | string
    createdAt?: DateTimeFilter<"Site"> | Date | string
    updatedAt?: DateTimeFilter<"Site"> | Date | string
    imageUrl?: StringNullableFilter<"Site"> | string | null
    userId?: StringNullableFilter<"Site"> | string | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    posts?: PostListRelationFilter
    invoices?: InvoicesListRelationFilter
    InvoiceItems?: InvoiceItemsListRelationFilter
  }, "id" | "subdirectory">

  export type SiteOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    subdirectory?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: SiteCountOrderByAggregateInput
    _max?: SiteMaxOrderByAggregateInput
    _min?: SiteMinOrderByAggregateInput
  }

  export type SiteScalarWhereWithAggregatesInput = {
    AND?: SiteScalarWhereWithAggregatesInput | SiteScalarWhereWithAggregatesInput[]
    OR?: SiteScalarWhereWithAggregatesInput[]
    NOT?: SiteScalarWhereWithAggregatesInput | SiteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Site"> | string
    name?: StringWithAggregatesFilter<"Site"> | string
    description?: StringWithAggregatesFilter<"Site"> | string
    subdirectory?: StringWithAggregatesFilter<"Site"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Site"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Site"> | Date | string
    imageUrl?: StringNullableWithAggregatesFilter<"Site"> | string | null
    userId?: StringNullableWithAggregatesFilter<"Site"> | string | null
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    stripeSubscriptionId?: StringFilter<"Subscription"> | string
    interval?: StringFilter<"Subscription"> | string
    status?: StringFilter<"Subscription"> | string
    planId?: StringFilter<"Subscription"> | string
    currentPeriodStart?: IntFilter<"Subscription"> | number
    currentPeriodEnd?: IntFilter<"Subscription"> | number
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    userId?: StringNullableFilter<"Subscription"> | string | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type SubscriptionOrderByWithRelationInput = {
    stripeSubscriptionId?: SortOrder
    interval?: SortOrder
    status?: SortOrder
    planId?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    stripeSubscriptionId?: string
    userId?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    interval?: StringFilter<"Subscription"> | string
    status?: StringFilter<"Subscription"> | string
    planId?: StringFilter<"Subscription"> | string
    currentPeriodStart?: IntFilter<"Subscription"> | number
    currentPeriodEnd?: IntFilter<"Subscription"> | number
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "stripeSubscriptionId" | "stripeSubscriptionId" | "userId">

  export type SubscriptionOrderByWithAggregationInput = {
    stripeSubscriptionId?: SortOrder
    interval?: SortOrder
    status?: SortOrder
    planId?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _avg?: SubscriptionAvgOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
    _sum?: SubscriptionSumOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    stripeSubscriptionId?: StringWithAggregatesFilter<"Subscription"> | string
    interval?: StringWithAggregatesFilter<"Subscription"> | string
    status?: StringWithAggregatesFilter<"Subscription"> | string
    planId?: StringWithAggregatesFilter<"Subscription"> | string
    currentPeriodStart?: IntWithAggregatesFilter<"Subscription"> | number
    currentPeriodEnd?: IntWithAggregatesFilter<"Subscription"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
  }

  export type InvoicesWhereInput = {
    AND?: InvoicesWhereInput | InvoicesWhereInput[]
    OR?: InvoicesWhereInput[]
    NOT?: InvoicesWhereInput | InvoicesWhereInput[]
    id?: StringFilter<"Invoices"> | string
    url?: StringFilter<"Invoices"> | string
    invoiceNumber?: StringNullableFilter<"Invoices"> | string | null
    sellerName?: StringNullableFilter<"Invoices"> | string | null
    invoiceTotalSumNoVat?: FloatNullableFilter<"Invoices"> | number | null
    invoiceTotalSumWithVat?: FloatNullableFilter<"Invoices"> | number | null
    buyerName?: StringNullableFilter<"Invoices"> | string | null
    invoiceDate?: StringNullableFilter<"Invoices"> | string | null
    paymentDate?: StringNullableFilter<"Invoices"> | string | null
    isInvoice?: BoolNullableFilter<"Invoices"> | boolean | null
    isCreditDebitProformaOrAdvanced?: StringNullableFilter<"Invoices"> | string | null
    uploadedAt?: DateTimeFilter<"Invoices"> | Date | string
    userId?: StringNullableFilter<"Invoices"> | string | null
    SiteId?: StringNullableFilter<"Invoices"> | string | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    Site?: XOR<SiteNullableScalarRelationFilter, SiteWhereInput> | null
    items?: InvoiceItemsListRelationFilter
  }

  export type InvoicesOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    invoiceNumber?: SortOrderInput | SortOrder
    sellerName?: SortOrderInput | SortOrder
    invoiceTotalSumNoVat?: SortOrderInput | SortOrder
    invoiceTotalSumWithVat?: SortOrderInput | SortOrder
    buyerName?: SortOrderInput | SortOrder
    invoiceDate?: SortOrderInput | SortOrder
    paymentDate?: SortOrderInput | SortOrder
    isInvoice?: SortOrderInput | SortOrder
    isCreditDebitProformaOrAdvanced?: SortOrderInput | SortOrder
    uploadedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    SiteId?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
    Site?: SiteOrderByWithRelationInput
    items?: InvoiceItemsOrderByRelationAggregateInput
  }

  export type InvoicesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InvoicesWhereInput | InvoicesWhereInput[]
    OR?: InvoicesWhereInput[]
    NOT?: InvoicesWhereInput | InvoicesWhereInput[]
    url?: StringFilter<"Invoices"> | string
    invoiceNumber?: StringNullableFilter<"Invoices"> | string | null
    sellerName?: StringNullableFilter<"Invoices"> | string | null
    invoiceTotalSumNoVat?: FloatNullableFilter<"Invoices"> | number | null
    invoiceTotalSumWithVat?: FloatNullableFilter<"Invoices"> | number | null
    buyerName?: StringNullableFilter<"Invoices"> | string | null
    invoiceDate?: StringNullableFilter<"Invoices"> | string | null
    paymentDate?: StringNullableFilter<"Invoices"> | string | null
    isInvoice?: BoolNullableFilter<"Invoices"> | boolean | null
    isCreditDebitProformaOrAdvanced?: StringNullableFilter<"Invoices"> | string | null
    uploadedAt?: DateTimeFilter<"Invoices"> | Date | string
    userId?: StringNullableFilter<"Invoices"> | string | null
    SiteId?: StringNullableFilter<"Invoices"> | string | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    Site?: XOR<SiteNullableScalarRelationFilter, SiteWhereInput> | null
    items?: InvoiceItemsListRelationFilter
  }, "id">

  export type InvoicesOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    invoiceNumber?: SortOrderInput | SortOrder
    sellerName?: SortOrderInput | SortOrder
    invoiceTotalSumNoVat?: SortOrderInput | SortOrder
    invoiceTotalSumWithVat?: SortOrderInput | SortOrder
    buyerName?: SortOrderInput | SortOrder
    invoiceDate?: SortOrderInput | SortOrder
    paymentDate?: SortOrderInput | SortOrder
    isInvoice?: SortOrderInput | SortOrder
    isCreditDebitProformaOrAdvanced?: SortOrderInput | SortOrder
    uploadedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    SiteId?: SortOrderInput | SortOrder
    _count?: InvoicesCountOrderByAggregateInput
    _avg?: InvoicesAvgOrderByAggregateInput
    _max?: InvoicesMaxOrderByAggregateInput
    _min?: InvoicesMinOrderByAggregateInput
    _sum?: InvoicesSumOrderByAggregateInput
  }

  export type InvoicesScalarWhereWithAggregatesInput = {
    AND?: InvoicesScalarWhereWithAggregatesInput | InvoicesScalarWhereWithAggregatesInput[]
    OR?: InvoicesScalarWhereWithAggregatesInput[]
    NOT?: InvoicesScalarWhereWithAggregatesInput | InvoicesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Invoices"> | string
    url?: StringWithAggregatesFilter<"Invoices"> | string
    invoiceNumber?: StringNullableWithAggregatesFilter<"Invoices"> | string | null
    sellerName?: StringNullableWithAggregatesFilter<"Invoices"> | string | null
    invoiceTotalSumNoVat?: FloatNullableWithAggregatesFilter<"Invoices"> | number | null
    invoiceTotalSumWithVat?: FloatNullableWithAggregatesFilter<"Invoices"> | number | null
    buyerName?: StringNullableWithAggregatesFilter<"Invoices"> | string | null
    invoiceDate?: StringNullableWithAggregatesFilter<"Invoices"> | string | null
    paymentDate?: StringNullableWithAggregatesFilter<"Invoices"> | string | null
    isInvoice?: BoolNullableWithAggregatesFilter<"Invoices"> | boolean | null
    isCreditDebitProformaOrAdvanced?: StringNullableWithAggregatesFilter<"Invoices"> | string | null
    uploadedAt?: DateTimeWithAggregatesFilter<"Invoices"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"Invoices"> | string | null
    SiteId?: StringNullableWithAggregatesFilter<"Invoices"> | string | null
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    articleContent?: JsonFilter<"Post">
    smallDescription?: StringFilter<"Post"> | string
    image?: StringFilter<"Post"> | string
    slug?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    userId?: StringNullableFilter<"Post"> | string | null
    siteId?: StringNullableFilter<"Post"> | string | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    Site?: XOR<SiteNullableScalarRelationFilter, SiteWhereInput> | null
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    articleContent?: SortOrder
    smallDescription?: SortOrder
    image?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    siteId?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
    Site?: SiteOrderByWithRelationInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    title?: StringFilter<"Post"> | string
    articleContent?: JsonFilter<"Post">
    smallDescription?: StringFilter<"Post"> | string
    image?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    userId?: StringNullableFilter<"Post"> | string | null
    siteId?: StringNullableFilter<"Post"> | string | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    Site?: XOR<SiteNullableScalarRelationFilter, SiteWhereInput> | null
  }, "id" | "slug">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    articleContent?: SortOrder
    smallDescription?: SortOrder
    image?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    siteId?: SortOrderInput | SortOrder
    _count?: PostCountOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    title?: StringWithAggregatesFilter<"Post"> | string
    articleContent?: JsonWithAggregatesFilter<"Post">
    smallDescription?: StringWithAggregatesFilter<"Post"> | string
    image?: StringWithAggregatesFilter<"Post"> | string
    slug?: StringWithAggregatesFilter<"Post"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"Post"> | string | null
    siteId?: StringNullableWithAggregatesFilter<"Post"> | string | null
  }

  export type InvoiceItemsWhereInput = {
    AND?: InvoiceItemsWhereInput | InvoiceItemsWhereInput[]
    OR?: InvoiceItemsWhereInput[]
    NOT?: InvoiceItemsWhereInput | InvoiceItemsWhereInput[]
    id?: StringFilter<"InvoiceItems"> | string
    item?: StringNullableFilter<"InvoiceItems"> | string | null
    quantity?: FloatNullableFilter<"InvoiceItems"> | number | null
    unitOfMeasure?: StringNullableFilter<"InvoiceItems"> | string | null
    pricePerUnitOfMeasure?: FloatNullableFilter<"InvoiceItems"> | number | null
    sum?: FloatNullableFilter<"InvoiceItems"> | number | null
    currency?: StringNullableFilter<"InvoiceItems"> | string | null
    category?: StringNullableFilter<"InvoiceItems"> | string | null
    itemDescription?: StringNullableFilter<"InvoiceItems"> | string | null
    commentsForUser?: StringNullableFilter<"InvoiceItems"> | string | null
    isInvoice?: BoolNullableFilter<"InvoiceItems"> | boolean | null
    invoiceId?: StringFilter<"InvoiceItems"> | string
    siteId?: StringNullableFilter<"InvoiceItems"> | string | null
    invoiceNumber?: StringNullableFilter<"InvoiceItems"> | string | null
    sellerName?: StringNullableFilter<"InvoiceItems"> | string | null
    invoiceDate?: StringNullableFilter<"InvoiceItems"> | string | null
    paymentDate?: StringNullableFilter<"InvoiceItems"> | string | null
    invoice?: XOR<InvoicesScalarRelationFilter, InvoicesWhereInput>
    Site?: XOR<SiteNullableScalarRelationFilter, SiteWhereInput> | null
  }

  export type InvoiceItemsOrderByWithRelationInput = {
    id?: SortOrder
    item?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    unitOfMeasure?: SortOrderInput | SortOrder
    pricePerUnitOfMeasure?: SortOrderInput | SortOrder
    sum?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    itemDescription?: SortOrderInput | SortOrder
    commentsForUser?: SortOrderInput | SortOrder
    isInvoice?: SortOrderInput | SortOrder
    invoiceId?: SortOrder
    siteId?: SortOrderInput | SortOrder
    invoiceNumber?: SortOrderInput | SortOrder
    sellerName?: SortOrderInput | SortOrder
    invoiceDate?: SortOrderInput | SortOrder
    paymentDate?: SortOrderInput | SortOrder
    invoice?: InvoicesOrderByWithRelationInput
    Site?: SiteOrderByWithRelationInput
  }

  export type InvoiceItemsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InvoiceItemsWhereInput | InvoiceItemsWhereInput[]
    OR?: InvoiceItemsWhereInput[]
    NOT?: InvoiceItemsWhereInput | InvoiceItemsWhereInput[]
    item?: StringNullableFilter<"InvoiceItems"> | string | null
    quantity?: FloatNullableFilter<"InvoiceItems"> | number | null
    unitOfMeasure?: StringNullableFilter<"InvoiceItems"> | string | null
    pricePerUnitOfMeasure?: FloatNullableFilter<"InvoiceItems"> | number | null
    sum?: FloatNullableFilter<"InvoiceItems"> | number | null
    currency?: StringNullableFilter<"InvoiceItems"> | string | null
    category?: StringNullableFilter<"InvoiceItems"> | string | null
    itemDescription?: StringNullableFilter<"InvoiceItems"> | string | null
    commentsForUser?: StringNullableFilter<"InvoiceItems"> | string | null
    isInvoice?: BoolNullableFilter<"InvoiceItems"> | boolean | null
    invoiceId?: StringFilter<"InvoiceItems"> | string
    siteId?: StringNullableFilter<"InvoiceItems"> | string | null
    invoiceNumber?: StringNullableFilter<"InvoiceItems"> | string | null
    sellerName?: StringNullableFilter<"InvoiceItems"> | string | null
    invoiceDate?: StringNullableFilter<"InvoiceItems"> | string | null
    paymentDate?: StringNullableFilter<"InvoiceItems"> | string | null
    invoice?: XOR<InvoicesScalarRelationFilter, InvoicesWhereInput>
    Site?: XOR<SiteNullableScalarRelationFilter, SiteWhereInput> | null
  }, "id">

  export type InvoiceItemsOrderByWithAggregationInput = {
    id?: SortOrder
    item?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    unitOfMeasure?: SortOrderInput | SortOrder
    pricePerUnitOfMeasure?: SortOrderInput | SortOrder
    sum?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    itemDescription?: SortOrderInput | SortOrder
    commentsForUser?: SortOrderInput | SortOrder
    isInvoice?: SortOrderInput | SortOrder
    invoiceId?: SortOrder
    siteId?: SortOrderInput | SortOrder
    invoiceNumber?: SortOrderInput | SortOrder
    sellerName?: SortOrderInput | SortOrder
    invoiceDate?: SortOrderInput | SortOrder
    paymentDate?: SortOrderInput | SortOrder
    _count?: InvoiceItemsCountOrderByAggregateInput
    _avg?: InvoiceItemsAvgOrderByAggregateInput
    _max?: InvoiceItemsMaxOrderByAggregateInput
    _min?: InvoiceItemsMinOrderByAggregateInput
    _sum?: InvoiceItemsSumOrderByAggregateInput
  }

  export type InvoiceItemsScalarWhereWithAggregatesInput = {
    AND?: InvoiceItemsScalarWhereWithAggregatesInput | InvoiceItemsScalarWhereWithAggregatesInput[]
    OR?: InvoiceItemsScalarWhereWithAggregatesInput[]
    NOT?: InvoiceItemsScalarWhereWithAggregatesInput | InvoiceItemsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InvoiceItems"> | string
    item?: StringNullableWithAggregatesFilter<"InvoiceItems"> | string | null
    quantity?: FloatNullableWithAggregatesFilter<"InvoiceItems"> | number | null
    unitOfMeasure?: StringNullableWithAggregatesFilter<"InvoiceItems"> | string | null
    pricePerUnitOfMeasure?: FloatNullableWithAggregatesFilter<"InvoiceItems"> | number | null
    sum?: FloatNullableWithAggregatesFilter<"InvoiceItems"> | number | null
    currency?: StringNullableWithAggregatesFilter<"InvoiceItems"> | string | null
    category?: StringNullableWithAggregatesFilter<"InvoiceItems"> | string | null
    itemDescription?: StringNullableWithAggregatesFilter<"InvoiceItems"> | string | null
    commentsForUser?: StringNullableWithAggregatesFilter<"InvoiceItems"> | string | null
    isInvoice?: BoolNullableWithAggregatesFilter<"InvoiceItems"> | boolean | null
    invoiceId?: StringWithAggregatesFilter<"InvoiceItems"> | string
    siteId?: StringNullableWithAggregatesFilter<"InvoiceItems"> | string | null
    invoiceNumber?: StringNullableWithAggregatesFilter<"InvoiceItems"> | string | null
    sellerName?: StringNullableWithAggregatesFilter<"InvoiceItems"> | string | null
    invoiceDate?: StringNullableWithAggregatesFilter<"InvoiceItems"> | string | null
    paymentDate?: StringNullableWithAggregatesFilter<"InvoiceItems"> | string | null
  }

  export type AIconversationWhereInput = {
    AND?: AIconversationWhereInput | AIconversationWhereInput[]
    OR?: AIconversationWhereInput[]
    NOT?: AIconversationWhereInput | AIconversationWhereInput[]
    id?: StringFilter<"AIconversation"> | string
    thread?: JsonNullableFilter<"AIconversation">
    userId?: StringFilter<"AIconversation"> | string
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type AIconversationOrderByWithRelationInput = {
    id?: SortOrder
    thread?: SortOrderInput | SortOrder
    userId?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type AIconversationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: AIconversationWhereInput | AIconversationWhereInput[]
    OR?: AIconversationWhereInput[]
    NOT?: AIconversationWhereInput | AIconversationWhereInput[]
    thread?: JsonNullableFilter<"AIconversation">
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "userId">

  export type AIconversationOrderByWithAggregationInput = {
    id?: SortOrder
    thread?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: AIconversationCountOrderByAggregateInput
    _max?: AIconversationMaxOrderByAggregateInput
    _min?: AIconversationMinOrderByAggregateInput
  }

  export type AIconversationScalarWhereWithAggregatesInput = {
    AND?: AIconversationScalarWhereWithAggregatesInput | AIconversationScalarWhereWithAggregatesInput[]
    OR?: AIconversationScalarWhereWithAggregatesInput[]
    NOT?: AIconversationScalarWhereWithAggregatesInput | AIconversationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AIconversation"> | string
    thread?: JsonNullableWithAggregatesFilter<"AIconversation">
    userId?: StringWithAggregatesFilter<"AIconversation"> | string
  }

  export type UserCreateInput = {
    id: string
    email: string
    firstName: string
    lastName: string
    profileImage: string
    customerId?: string | null
    createdAt?: Date | string
    Site?: SiteCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    Invoices?: InvoicesCreateNestedManyWithoutUserInput
    Subscription?: SubscriptionCreateNestedOneWithoutUserInput
    AIconversation?: AIconversationCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    email: string
    firstName: string
    lastName: string
    profileImage: string
    customerId?: string | null
    createdAt?: Date | string
    Site?: SiteUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    Invoices?: InvoicesUncheckedCreateNestedManyWithoutUserInput
    Subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    AIconversation?: AIconversationUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Site?: SiteUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    Invoices?: InvoicesUpdateManyWithoutUserNestedInput
    Subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    AIconversation?: AIconversationUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Site?: SiteUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    Invoices?: InvoicesUncheckedUpdateManyWithoutUserNestedInput
    Subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    AIconversation?: AIconversationUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    email: string
    firstName: string
    lastName: string
    profileImage: string
    customerId?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteCreateInput = {
    id?: string
    name: string
    description: string
    subdirectory: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl?: string | null
    User?: UserCreateNestedOneWithoutSiteInput
    posts?: PostCreateNestedManyWithoutSiteInput
    invoices?: InvoicesCreateNestedManyWithoutSiteInput
    InvoiceItems?: InvoiceItemsCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    subdirectory: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl?: string | null
    userId?: string | null
    posts?: PostUncheckedCreateNestedManyWithoutSiteInput
    invoices?: InvoicesUncheckedCreateNestedManyWithoutSiteInput
    InvoiceItems?: InvoiceItemsUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subdirectory?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneWithoutSiteNestedInput
    posts?: PostUpdateManyWithoutSiteNestedInput
    invoices?: InvoicesUpdateManyWithoutSiteNestedInput
    InvoiceItems?: InvoiceItemsUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subdirectory?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUncheckedUpdateManyWithoutSiteNestedInput
    invoices?: InvoicesUncheckedUpdateManyWithoutSiteNestedInput
    InvoiceItems?: InvoiceItemsUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type SiteCreateManyInput = {
    id?: string
    name: string
    description: string
    subdirectory: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl?: string | null
    userId?: string | null
  }

  export type SiteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subdirectory?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SiteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subdirectory?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubscriptionCreateInput = {
    stripeSubscriptionId: string
    interval: string
    status: string
    planId: string
    currentPeriodStart: number
    currentPeriodEnd: number
    createdAt?: Date | string
    updatedAt?: Date | string
    User?: UserCreateNestedOneWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateInput = {
    stripeSubscriptionId: string
    interval: string
    status: string
    planId: string
    currentPeriodStart: number
    currentPeriodEnd: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type SubscriptionUpdateInput = {
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    interval?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    currentPeriodStart?: IntFieldUpdateOperationsInput | number
    currentPeriodEnd?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    interval?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    currentPeriodStart?: IntFieldUpdateOperationsInput | number
    currentPeriodEnd?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubscriptionCreateManyInput = {
    stripeSubscriptionId: string
    interval: string
    status: string
    planId: string
    currentPeriodStart: number
    currentPeriodEnd: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type SubscriptionUpdateManyMutationInput = {
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    interval?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    currentPeriodStart?: IntFieldUpdateOperationsInput | number
    currentPeriodEnd?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    interval?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    currentPeriodStart?: IntFieldUpdateOperationsInput | number
    currentPeriodEnd?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InvoicesCreateInput = {
    id?: string
    url: string
    invoiceNumber?: string | null
    sellerName?: string | null
    invoiceTotalSumNoVat?: number | null
    invoiceTotalSumWithVat?: number | null
    buyerName?: string | null
    invoiceDate?: string | null
    paymentDate?: string | null
    isInvoice?: boolean | null
    isCreditDebitProformaOrAdvanced?: string | null
    uploadedAt?: Date | string
    User?: UserCreateNestedOneWithoutInvoicesInput
    Site?: SiteCreateNestedOneWithoutInvoicesInput
    items?: InvoiceItemsCreateNestedManyWithoutInvoiceInput
  }

  export type InvoicesUncheckedCreateInput = {
    id?: string
    url: string
    invoiceNumber?: string | null
    sellerName?: string | null
    invoiceTotalSumNoVat?: number | null
    invoiceTotalSumWithVat?: number | null
    buyerName?: string | null
    invoiceDate?: string | null
    paymentDate?: string | null
    isInvoice?: boolean | null
    isCreditDebitProformaOrAdvanced?: string | null
    uploadedAt?: Date | string
    userId?: string | null
    SiteId?: string | null
    items?: InvoiceItemsUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoicesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    sellerName?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceTotalSumNoVat?: NullableFloatFieldUpdateOperationsInput | number | null
    invoiceTotalSumWithVat?: NullableFloatFieldUpdateOperationsInput | number | null
    buyerName?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceDate?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDate?: NullableStringFieldUpdateOperationsInput | string | null
    isInvoice?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isCreditDebitProformaOrAdvanced?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneWithoutInvoicesNestedInput
    Site?: SiteUpdateOneWithoutInvoicesNestedInput
    items?: InvoiceItemsUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoicesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    sellerName?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceTotalSumNoVat?: NullableFloatFieldUpdateOperationsInput | number | null
    invoiceTotalSumWithVat?: NullableFloatFieldUpdateOperationsInput | number | null
    buyerName?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceDate?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDate?: NullableStringFieldUpdateOperationsInput | string | null
    isInvoice?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isCreditDebitProformaOrAdvanced?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    SiteId?: NullableStringFieldUpdateOperationsInput | string | null
    items?: InvoiceItemsUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoicesCreateManyInput = {
    id?: string
    url: string
    invoiceNumber?: string | null
    sellerName?: string | null
    invoiceTotalSumNoVat?: number | null
    invoiceTotalSumWithVat?: number | null
    buyerName?: string | null
    invoiceDate?: string | null
    paymentDate?: string | null
    isInvoice?: boolean | null
    isCreditDebitProformaOrAdvanced?: string | null
    uploadedAt?: Date | string
    userId?: string | null
    SiteId?: string | null
  }

  export type InvoicesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    sellerName?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceTotalSumNoVat?: NullableFloatFieldUpdateOperationsInput | number | null
    invoiceTotalSumWithVat?: NullableFloatFieldUpdateOperationsInput | number | null
    buyerName?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceDate?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDate?: NullableStringFieldUpdateOperationsInput | string | null
    isInvoice?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isCreditDebitProformaOrAdvanced?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoicesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    sellerName?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceTotalSumNoVat?: NullableFloatFieldUpdateOperationsInput | number | null
    invoiceTotalSumWithVat?: NullableFloatFieldUpdateOperationsInput | number | null
    buyerName?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceDate?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDate?: NullableStringFieldUpdateOperationsInput | string | null
    isInvoice?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isCreditDebitProformaOrAdvanced?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    SiteId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostCreateInput = {
    id?: string
    title: string
    articleContent: JsonNullValueInput | InputJsonValue
    smallDescription: string
    image: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    User?: UserCreateNestedOneWithoutPostsInput
    Site?: SiteCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    title: string
    articleContent: JsonNullValueInput | InputJsonValue
    smallDescription: string
    image: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    siteId?: string | null
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    articleContent?: JsonNullValueInput | InputJsonValue
    smallDescription?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneWithoutPostsNestedInput
    Site?: SiteUpdateOneWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    articleContent?: JsonNullValueInput | InputJsonValue
    smallDescription?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    siteId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostCreateManyInput = {
    id?: string
    title: string
    articleContent: JsonNullValueInput | InputJsonValue
    smallDescription: string
    image: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    siteId?: string | null
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    articleContent?: JsonNullValueInput | InputJsonValue
    smallDescription?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    articleContent?: JsonNullValueInput | InputJsonValue
    smallDescription?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    siteId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InvoiceItemsCreateInput = {
    id?: string
    item?: string | null
    quantity?: number | null
    unitOfMeasure?: string | null
    pricePerUnitOfMeasure?: number | null
    sum?: number | null
    currency?: string | null
    category?: string | null
    itemDescription?: string | null
    commentsForUser?: string | null
    isInvoice?: boolean | null
    invoiceNumber?: string | null
    sellerName?: string | null
    invoiceDate?: string | null
    paymentDate?: string | null
    invoice: InvoicesCreateNestedOneWithoutItemsInput
    Site?: SiteCreateNestedOneWithoutInvoiceItemsInput
  }

  export type InvoiceItemsUncheckedCreateInput = {
    id?: string
    item?: string | null
    quantity?: number | null
    unitOfMeasure?: string | null
    pricePerUnitOfMeasure?: number | null
    sum?: number | null
    currency?: string | null
    category?: string | null
    itemDescription?: string | null
    commentsForUser?: string | null
    isInvoice?: boolean | null
    invoiceId: string
    siteId?: string | null
    invoiceNumber?: string | null
    sellerName?: string | null
    invoiceDate?: string | null
    paymentDate?: string | null
  }

  export type InvoiceItemsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    unitOfMeasure?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerUnitOfMeasure?: NullableFloatFieldUpdateOperationsInput | number | null
    sum?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    itemDescription?: NullableStringFieldUpdateOperationsInput | string | null
    commentsForUser?: NullableStringFieldUpdateOperationsInput | string | null
    isInvoice?: NullableBoolFieldUpdateOperationsInput | boolean | null
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    sellerName?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceDate?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDate?: NullableStringFieldUpdateOperationsInput | string | null
    invoice?: InvoicesUpdateOneRequiredWithoutItemsNestedInput
    Site?: SiteUpdateOneWithoutInvoiceItemsNestedInput
  }

  export type InvoiceItemsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    unitOfMeasure?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerUnitOfMeasure?: NullableFloatFieldUpdateOperationsInput | number | null
    sum?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    itemDescription?: NullableStringFieldUpdateOperationsInput | string | null
    commentsForUser?: NullableStringFieldUpdateOperationsInput | string | null
    isInvoice?: NullableBoolFieldUpdateOperationsInput | boolean | null
    invoiceId?: StringFieldUpdateOperationsInput | string
    siteId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    sellerName?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceDate?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDate?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InvoiceItemsCreateManyInput = {
    id?: string
    item?: string | null
    quantity?: number | null
    unitOfMeasure?: string | null
    pricePerUnitOfMeasure?: number | null
    sum?: number | null
    currency?: string | null
    category?: string | null
    itemDescription?: string | null
    commentsForUser?: string | null
    isInvoice?: boolean | null
    invoiceId: string
    siteId?: string | null
    invoiceNumber?: string | null
    sellerName?: string | null
    invoiceDate?: string | null
    paymentDate?: string | null
  }

  export type InvoiceItemsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    unitOfMeasure?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerUnitOfMeasure?: NullableFloatFieldUpdateOperationsInput | number | null
    sum?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    itemDescription?: NullableStringFieldUpdateOperationsInput | string | null
    commentsForUser?: NullableStringFieldUpdateOperationsInput | string | null
    isInvoice?: NullableBoolFieldUpdateOperationsInput | boolean | null
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    sellerName?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceDate?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDate?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InvoiceItemsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    unitOfMeasure?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerUnitOfMeasure?: NullableFloatFieldUpdateOperationsInput | number | null
    sum?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    itemDescription?: NullableStringFieldUpdateOperationsInput | string | null
    commentsForUser?: NullableStringFieldUpdateOperationsInput | string | null
    isInvoice?: NullableBoolFieldUpdateOperationsInput | boolean | null
    invoiceId?: StringFieldUpdateOperationsInput | string
    siteId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    sellerName?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceDate?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDate?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AIconversationCreateInput = {
    id?: string
    thread?: NullableJsonNullValueInput | InputJsonValue
    User?: UserCreateNestedOneWithoutAIconversationInput
  }

  export type AIconversationUncheckedCreateInput = {
    id?: string
    thread?: NullableJsonNullValueInput | InputJsonValue
    userId: string
  }

  export type AIconversationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    thread?: NullableJsonNullValueInput | InputJsonValue
    User?: UserUpdateOneWithoutAIconversationNestedInput
  }

  export type AIconversationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    thread?: NullableJsonNullValueInput | InputJsonValue
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AIconversationCreateManyInput = {
    id?: string
    thread?: NullableJsonNullValueInput | InputJsonValue
    userId: string
  }

  export type AIconversationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    thread?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AIconversationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    thread?: NullableJsonNullValueInput | InputJsonValue
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SiteListRelationFilter = {
    every?: SiteWhereInput
    some?: SiteWhereInput
    none?: SiteWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type InvoicesListRelationFilter = {
    every?: InvoicesWhereInput
    some?: InvoicesWhereInput
    none?: InvoicesWhereInput
  }

  export type SubscriptionNullableScalarRelationFilter = {
    is?: SubscriptionWhereInput | null
    isNot?: SubscriptionWhereInput | null
  }

  export type AIconversationNullableScalarRelationFilter = {
    is?: AIconversationWhereInput | null
    isNot?: AIconversationWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SiteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvoicesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    profileImage?: SortOrder
    customerId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    profileImage?: SortOrder
    customerId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    profileImage?: SortOrder
    customerId?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type InvoiceItemsListRelationFilter = {
    every?: InvoiceItemsWhereInput
    some?: InvoiceItemsWhereInput
    none?: InvoiceItemsWhereInput
  }

  export type InvoiceItemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SiteCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    subdirectory?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imageUrl?: SortOrder
    userId?: SortOrder
  }

  export type SiteMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    subdirectory?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imageUrl?: SortOrder
    userId?: SortOrder
  }

  export type SiteMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    subdirectory?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imageUrl?: SortOrder
    userId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type SubscriptionCountOrderByAggregateInput = {
    stripeSubscriptionId?: SortOrder
    interval?: SortOrder
    status?: SortOrder
    planId?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type SubscriptionAvgOrderByAggregateInput = {
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    stripeSubscriptionId?: SortOrder
    interval?: SortOrder
    status?: SortOrder
    planId?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    stripeSubscriptionId?: SortOrder
    interval?: SortOrder
    status?: SortOrder
    planId?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type SubscriptionSumOrderByAggregateInput = {
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type SiteNullableScalarRelationFilter = {
    is?: SiteWhereInput | null
    isNot?: SiteWhereInput | null
  }

  export type InvoicesCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    invoiceNumber?: SortOrder
    sellerName?: SortOrder
    invoiceTotalSumNoVat?: SortOrder
    invoiceTotalSumWithVat?: SortOrder
    buyerName?: SortOrder
    invoiceDate?: SortOrder
    paymentDate?: SortOrder
    isInvoice?: SortOrder
    isCreditDebitProformaOrAdvanced?: SortOrder
    uploadedAt?: SortOrder
    userId?: SortOrder
    SiteId?: SortOrder
  }

  export type InvoicesAvgOrderByAggregateInput = {
    invoiceTotalSumNoVat?: SortOrder
    invoiceTotalSumWithVat?: SortOrder
  }

  export type InvoicesMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    invoiceNumber?: SortOrder
    sellerName?: SortOrder
    invoiceTotalSumNoVat?: SortOrder
    invoiceTotalSumWithVat?: SortOrder
    buyerName?: SortOrder
    invoiceDate?: SortOrder
    paymentDate?: SortOrder
    isInvoice?: SortOrder
    isCreditDebitProformaOrAdvanced?: SortOrder
    uploadedAt?: SortOrder
    userId?: SortOrder
    SiteId?: SortOrder
  }

  export type InvoicesMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    invoiceNumber?: SortOrder
    sellerName?: SortOrder
    invoiceTotalSumNoVat?: SortOrder
    invoiceTotalSumWithVat?: SortOrder
    buyerName?: SortOrder
    invoiceDate?: SortOrder
    paymentDate?: SortOrder
    isInvoice?: SortOrder
    isCreditDebitProformaOrAdvanced?: SortOrder
    uploadedAt?: SortOrder
    userId?: SortOrder
    SiteId?: SortOrder
  }

  export type InvoicesSumOrderByAggregateInput = {
    invoiceTotalSumNoVat?: SortOrder
    invoiceTotalSumWithVat?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    articleContent?: SortOrder
    smallDescription?: SortOrder
    image?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    siteId?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    smallDescription?: SortOrder
    image?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    siteId?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    smallDescription?: SortOrder
    image?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    siteId?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type InvoicesScalarRelationFilter = {
    is?: InvoicesWhereInput
    isNot?: InvoicesWhereInput
  }

  export type InvoiceItemsCountOrderByAggregateInput = {
    id?: SortOrder
    item?: SortOrder
    quantity?: SortOrder
    unitOfMeasure?: SortOrder
    pricePerUnitOfMeasure?: SortOrder
    sum?: SortOrder
    currency?: SortOrder
    category?: SortOrder
    itemDescription?: SortOrder
    commentsForUser?: SortOrder
    isInvoice?: SortOrder
    invoiceId?: SortOrder
    siteId?: SortOrder
    invoiceNumber?: SortOrder
    sellerName?: SortOrder
    invoiceDate?: SortOrder
    paymentDate?: SortOrder
  }

  export type InvoiceItemsAvgOrderByAggregateInput = {
    quantity?: SortOrder
    pricePerUnitOfMeasure?: SortOrder
    sum?: SortOrder
  }

  export type InvoiceItemsMaxOrderByAggregateInput = {
    id?: SortOrder
    item?: SortOrder
    quantity?: SortOrder
    unitOfMeasure?: SortOrder
    pricePerUnitOfMeasure?: SortOrder
    sum?: SortOrder
    currency?: SortOrder
    category?: SortOrder
    itemDescription?: SortOrder
    commentsForUser?: SortOrder
    isInvoice?: SortOrder
    invoiceId?: SortOrder
    siteId?: SortOrder
    invoiceNumber?: SortOrder
    sellerName?: SortOrder
    invoiceDate?: SortOrder
    paymentDate?: SortOrder
  }

  export type InvoiceItemsMinOrderByAggregateInput = {
    id?: SortOrder
    item?: SortOrder
    quantity?: SortOrder
    unitOfMeasure?: SortOrder
    pricePerUnitOfMeasure?: SortOrder
    sum?: SortOrder
    currency?: SortOrder
    category?: SortOrder
    itemDescription?: SortOrder
    commentsForUser?: SortOrder
    isInvoice?: SortOrder
    invoiceId?: SortOrder
    siteId?: SortOrder
    invoiceNumber?: SortOrder
    sellerName?: SortOrder
    invoiceDate?: SortOrder
    paymentDate?: SortOrder
  }

  export type InvoiceItemsSumOrderByAggregateInput = {
    quantity?: SortOrder
    pricePerUnitOfMeasure?: SortOrder
    sum?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AIconversationCountOrderByAggregateInput = {
    id?: SortOrder
    thread?: SortOrder
    userId?: SortOrder
  }

  export type AIconversationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AIconversationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type SiteCreateNestedManyWithoutUserInput = {
    create?: XOR<SiteCreateWithoutUserInput, SiteUncheckedCreateWithoutUserInput> | SiteCreateWithoutUserInput[] | SiteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SiteCreateOrConnectWithoutUserInput | SiteCreateOrConnectWithoutUserInput[]
    createMany?: SiteCreateManyUserInputEnvelope
    connect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type InvoicesCreateNestedManyWithoutUserInput = {
    create?: XOR<InvoicesCreateWithoutUserInput, InvoicesUncheckedCreateWithoutUserInput> | InvoicesCreateWithoutUserInput[] | InvoicesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvoicesCreateOrConnectWithoutUserInput | InvoicesCreateOrConnectWithoutUserInput[]
    createMany?: InvoicesCreateManyUserInputEnvelope
    connect?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
  }

  export type SubscriptionCreateNestedOneWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type AIconversationCreateNestedOneWithoutUserInput = {
    create?: XOR<AIconversationCreateWithoutUserInput, AIconversationUncheckedCreateWithoutUserInput>
    connectOrCreate?: AIconversationCreateOrConnectWithoutUserInput
    connect?: AIconversationWhereUniqueInput
  }

  export type SiteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SiteCreateWithoutUserInput, SiteUncheckedCreateWithoutUserInput> | SiteCreateWithoutUserInput[] | SiteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SiteCreateOrConnectWithoutUserInput | SiteCreateOrConnectWithoutUserInput[]
    createMany?: SiteCreateManyUserInputEnvelope
    connect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type InvoicesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<InvoicesCreateWithoutUserInput, InvoicesUncheckedCreateWithoutUserInput> | InvoicesCreateWithoutUserInput[] | InvoicesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvoicesCreateOrConnectWithoutUserInput | InvoicesCreateOrConnectWithoutUserInput[]
    createMany?: InvoicesCreateManyUserInputEnvelope
    connect?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type AIconversationUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<AIconversationCreateWithoutUserInput, AIconversationUncheckedCreateWithoutUserInput>
    connectOrCreate?: AIconversationCreateOrConnectWithoutUserInput
    connect?: AIconversationWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SiteUpdateManyWithoutUserNestedInput = {
    create?: XOR<SiteCreateWithoutUserInput, SiteUncheckedCreateWithoutUserInput> | SiteCreateWithoutUserInput[] | SiteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SiteCreateOrConnectWithoutUserInput | SiteCreateOrConnectWithoutUserInput[]
    upsert?: SiteUpsertWithWhereUniqueWithoutUserInput | SiteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SiteCreateManyUserInputEnvelope
    set?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    disconnect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    delete?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    connect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    update?: SiteUpdateWithWhereUniqueWithoutUserInput | SiteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SiteUpdateManyWithWhereWithoutUserInput | SiteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SiteScalarWhereInput | SiteScalarWhereInput[]
  }

  export type PostUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type InvoicesUpdateManyWithoutUserNestedInput = {
    create?: XOR<InvoicesCreateWithoutUserInput, InvoicesUncheckedCreateWithoutUserInput> | InvoicesCreateWithoutUserInput[] | InvoicesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvoicesCreateOrConnectWithoutUserInput | InvoicesCreateOrConnectWithoutUserInput[]
    upsert?: InvoicesUpsertWithWhereUniqueWithoutUserInput | InvoicesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InvoicesCreateManyUserInputEnvelope
    set?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    disconnect?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    delete?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    connect?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    update?: InvoicesUpdateWithWhereUniqueWithoutUserInput | InvoicesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InvoicesUpdateManyWithWhereWithoutUserInput | InvoicesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InvoicesScalarWhereInput | InvoicesScalarWhereInput[]
  }

  export type SubscriptionUpdateOneWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    upsert?: SubscriptionUpsertWithoutUserInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutUserInput, SubscriptionUpdateWithoutUserInput>, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type AIconversationUpdateOneWithoutUserNestedInput = {
    create?: XOR<AIconversationCreateWithoutUserInput, AIconversationUncheckedCreateWithoutUserInput>
    connectOrCreate?: AIconversationCreateOrConnectWithoutUserInput
    upsert?: AIconversationUpsertWithoutUserInput
    disconnect?: AIconversationWhereInput | boolean
    delete?: AIconversationWhereInput | boolean
    connect?: AIconversationWhereUniqueInput
    update?: XOR<XOR<AIconversationUpdateToOneWithWhereWithoutUserInput, AIconversationUpdateWithoutUserInput>, AIconversationUncheckedUpdateWithoutUserInput>
  }

  export type SiteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SiteCreateWithoutUserInput, SiteUncheckedCreateWithoutUserInput> | SiteCreateWithoutUserInput[] | SiteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SiteCreateOrConnectWithoutUserInput | SiteCreateOrConnectWithoutUserInput[]
    upsert?: SiteUpsertWithWhereUniqueWithoutUserInput | SiteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SiteCreateManyUserInputEnvelope
    set?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    disconnect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    delete?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    connect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    update?: SiteUpdateWithWhereUniqueWithoutUserInput | SiteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SiteUpdateManyWithWhereWithoutUserInput | SiteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SiteScalarWhereInput | SiteScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type InvoicesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<InvoicesCreateWithoutUserInput, InvoicesUncheckedCreateWithoutUserInput> | InvoicesCreateWithoutUserInput[] | InvoicesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvoicesCreateOrConnectWithoutUserInput | InvoicesCreateOrConnectWithoutUserInput[]
    upsert?: InvoicesUpsertWithWhereUniqueWithoutUserInput | InvoicesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InvoicesCreateManyUserInputEnvelope
    set?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    disconnect?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    delete?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    connect?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    update?: InvoicesUpdateWithWhereUniqueWithoutUserInput | InvoicesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InvoicesUpdateManyWithWhereWithoutUserInput | InvoicesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InvoicesScalarWhereInput | InvoicesScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    upsert?: SubscriptionUpsertWithoutUserInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutUserInput, SubscriptionUpdateWithoutUserInput>, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type AIconversationUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<AIconversationCreateWithoutUserInput, AIconversationUncheckedCreateWithoutUserInput>
    connectOrCreate?: AIconversationCreateOrConnectWithoutUserInput
    upsert?: AIconversationUpsertWithoutUserInput
    disconnect?: AIconversationWhereInput | boolean
    delete?: AIconversationWhereInput | boolean
    connect?: AIconversationWhereUniqueInput
    update?: XOR<XOR<AIconversationUpdateToOneWithWhereWithoutUserInput, AIconversationUpdateWithoutUserInput>, AIconversationUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutSiteInput = {
    create?: XOR<UserCreateWithoutSiteInput, UserUncheckedCreateWithoutSiteInput>
    connectOrCreate?: UserCreateOrConnectWithoutSiteInput
    connect?: UserWhereUniqueInput
  }

  export type PostCreateNestedManyWithoutSiteInput = {
    create?: XOR<PostCreateWithoutSiteInput, PostUncheckedCreateWithoutSiteInput> | PostCreateWithoutSiteInput[] | PostUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: PostCreateOrConnectWithoutSiteInput | PostCreateOrConnectWithoutSiteInput[]
    createMany?: PostCreateManySiteInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type InvoicesCreateNestedManyWithoutSiteInput = {
    create?: XOR<InvoicesCreateWithoutSiteInput, InvoicesUncheckedCreateWithoutSiteInput> | InvoicesCreateWithoutSiteInput[] | InvoicesUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: InvoicesCreateOrConnectWithoutSiteInput | InvoicesCreateOrConnectWithoutSiteInput[]
    createMany?: InvoicesCreateManySiteInputEnvelope
    connect?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
  }

  export type InvoiceItemsCreateNestedManyWithoutSiteInput = {
    create?: XOR<InvoiceItemsCreateWithoutSiteInput, InvoiceItemsUncheckedCreateWithoutSiteInput> | InvoiceItemsCreateWithoutSiteInput[] | InvoiceItemsUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: InvoiceItemsCreateOrConnectWithoutSiteInput | InvoiceItemsCreateOrConnectWithoutSiteInput[]
    createMany?: InvoiceItemsCreateManySiteInputEnvelope
    connect?: InvoiceItemsWhereUniqueInput | InvoiceItemsWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutSiteInput = {
    create?: XOR<PostCreateWithoutSiteInput, PostUncheckedCreateWithoutSiteInput> | PostCreateWithoutSiteInput[] | PostUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: PostCreateOrConnectWithoutSiteInput | PostCreateOrConnectWithoutSiteInput[]
    createMany?: PostCreateManySiteInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type InvoicesUncheckedCreateNestedManyWithoutSiteInput = {
    create?: XOR<InvoicesCreateWithoutSiteInput, InvoicesUncheckedCreateWithoutSiteInput> | InvoicesCreateWithoutSiteInput[] | InvoicesUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: InvoicesCreateOrConnectWithoutSiteInput | InvoicesCreateOrConnectWithoutSiteInput[]
    createMany?: InvoicesCreateManySiteInputEnvelope
    connect?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
  }

  export type InvoiceItemsUncheckedCreateNestedManyWithoutSiteInput = {
    create?: XOR<InvoiceItemsCreateWithoutSiteInput, InvoiceItemsUncheckedCreateWithoutSiteInput> | InvoiceItemsCreateWithoutSiteInput[] | InvoiceItemsUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: InvoiceItemsCreateOrConnectWithoutSiteInput | InvoiceItemsCreateOrConnectWithoutSiteInput[]
    createMany?: InvoiceItemsCreateManySiteInputEnvelope
    connect?: InvoiceItemsWhereUniqueInput | InvoiceItemsWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutSiteNestedInput = {
    create?: XOR<UserCreateWithoutSiteInput, UserUncheckedCreateWithoutSiteInput>
    connectOrCreate?: UserCreateOrConnectWithoutSiteInput
    upsert?: UserUpsertWithoutSiteInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSiteInput, UserUpdateWithoutSiteInput>, UserUncheckedUpdateWithoutSiteInput>
  }

  export type PostUpdateManyWithoutSiteNestedInput = {
    create?: XOR<PostCreateWithoutSiteInput, PostUncheckedCreateWithoutSiteInput> | PostCreateWithoutSiteInput[] | PostUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: PostCreateOrConnectWithoutSiteInput | PostCreateOrConnectWithoutSiteInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutSiteInput | PostUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: PostCreateManySiteInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutSiteInput | PostUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: PostUpdateManyWithWhereWithoutSiteInput | PostUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type InvoicesUpdateManyWithoutSiteNestedInput = {
    create?: XOR<InvoicesCreateWithoutSiteInput, InvoicesUncheckedCreateWithoutSiteInput> | InvoicesCreateWithoutSiteInput[] | InvoicesUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: InvoicesCreateOrConnectWithoutSiteInput | InvoicesCreateOrConnectWithoutSiteInput[]
    upsert?: InvoicesUpsertWithWhereUniqueWithoutSiteInput | InvoicesUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: InvoicesCreateManySiteInputEnvelope
    set?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    disconnect?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    delete?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    connect?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    update?: InvoicesUpdateWithWhereUniqueWithoutSiteInput | InvoicesUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: InvoicesUpdateManyWithWhereWithoutSiteInput | InvoicesUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: InvoicesScalarWhereInput | InvoicesScalarWhereInput[]
  }

  export type InvoiceItemsUpdateManyWithoutSiteNestedInput = {
    create?: XOR<InvoiceItemsCreateWithoutSiteInput, InvoiceItemsUncheckedCreateWithoutSiteInput> | InvoiceItemsCreateWithoutSiteInput[] | InvoiceItemsUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: InvoiceItemsCreateOrConnectWithoutSiteInput | InvoiceItemsCreateOrConnectWithoutSiteInput[]
    upsert?: InvoiceItemsUpsertWithWhereUniqueWithoutSiteInput | InvoiceItemsUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: InvoiceItemsCreateManySiteInputEnvelope
    set?: InvoiceItemsWhereUniqueInput | InvoiceItemsWhereUniqueInput[]
    disconnect?: InvoiceItemsWhereUniqueInput | InvoiceItemsWhereUniqueInput[]
    delete?: InvoiceItemsWhereUniqueInput | InvoiceItemsWhereUniqueInput[]
    connect?: InvoiceItemsWhereUniqueInput | InvoiceItemsWhereUniqueInput[]
    update?: InvoiceItemsUpdateWithWhereUniqueWithoutSiteInput | InvoiceItemsUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: InvoiceItemsUpdateManyWithWhereWithoutSiteInput | InvoiceItemsUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: InvoiceItemsScalarWhereInput | InvoiceItemsScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutSiteNestedInput = {
    create?: XOR<PostCreateWithoutSiteInput, PostUncheckedCreateWithoutSiteInput> | PostCreateWithoutSiteInput[] | PostUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: PostCreateOrConnectWithoutSiteInput | PostCreateOrConnectWithoutSiteInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutSiteInput | PostUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: PostCreateManySiteInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutSiteInput | PostUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: PostUpdateManyWithWhereWithoutSiteInput | PostUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type InvoicesUncheckedUpdateManyWithoutSiteNestedInput = {
    create?: XOR<InvoicesCreateWithoutSiteInput, InvoicesUncheckedCreateWithoutSiteInput> | InvoicesCreateWithoutSiteInput[] | InvoicesUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: InvoicesCreateOrConnectWithoutSiteInput | InvoicesCreateOrConnectWithoutSiteInput[]
    upsert?: InvoicesUpsertWithWhereUniqueWithoutSiteInput | InvoicesUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: InvoicesCreateManySiteInputEnvelope
    set?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    disconnect?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    delete?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    connect?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    update?: InvoicesUpdateWithWhereUniqueWithoutSiteInput | InvoicesUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: InvoicesUpdateManyWithWhereWithoutSiteInput | InvoicesUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: InvoicesScalarWhereInput | InvoicesScalarWhereInput[]
  }

  export type InvoiceItemsUncheckedUpdateManyWithoutSiteNestedInput = {
    create?: XOR<InvoiceItemsCreateWithoutSiteInput, InvoiceItemsUncheckedCreateWithoutSiteInput> | InvoiceItemsCreateWithoutSiteInput[] | InvoiceItemsUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: InvoiceItemsCreateOrConnectWithoutSiteInput | InvoiceItemsCreateOrConnectWithoutSiteInput[]
    upsert?: InvoiceItemsUpsertWithWhereUniqueWithoutSiteInput | InvoiceItemsUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: InvoiceItemsCreateManySiteInputEnvelope
    set?: InvoiceItemsWhereUniqueInput | InvoiceItemsWhereUniqueInput[]
    disconnect?: InvoiceItemsWhereUniqueInput | InvoiceItemsWhereUniqueInput[]
    delete?: InvoiceItemsWhereUniqueInput | InvoiceItemsWhereUniqueInput[]
    connect?: InvoiceItemsWhereUniqueInput | InvoiceItemsWhereUniqueInput[]
    update?: InvoiceItemsUpdateWithWhereUniqueWithoutSiteInput | InvoiceItemsUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: InvoiceItemsUpdateManyWithWhereWithoutSiteInput | InvoiceItemsUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: InvoiceItemsScalarWhereInput | InvoiceItemsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneWithoutSubscriptionNestedInput = {
    create?: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput
    upsert?: UserUpsertWithoutSubscriptionInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubscriptionInput, UserUpdateWithoutSubscriptionInput>, UserUncheckedUpdateWithoutSubscriptionInput>
  }

  export type UserCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvoicesInput
    connect?: UserWhereUniqueInput
  }

  export type SiteCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<SiteCreateWithoutInvoicesInput, SiteUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: SiteCreateOrConnectWithoutInvoicesInput
    connect?: SiteWhereUniqueInput
  }

  export type InvoiceItemsCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<InvoiceItemsCreateWithoutInvoiceInput, InvoiceItemsUncheckedCreateWithoutInvoiceInput> | InvoiceItemsCreateWithoutInvoiceInput[] | InvoiceItemsUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceItemsCreateOrConnectWithoutInvoiceInput | InvoiceItemsCreateOrConnectWithoutInvoiceInput[]
    createMany?: InvoiceItemsCreateManyInvoiceInputEnvelope
    connect?: InvoiceItemsWhereUniqueInput | InvoiceItemsWhereUniqueInput[]
  }

  export type InvoiceItemsUncheckedCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<InvoiceItemsCreateWithoutInvoiceInput, InvoiceItemsUncheckedCreateWithoutInvoiceInput> | InvoiceItemsCreateWithoutInvoiceInput[] | InvoiceItemsUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceItemsCreateOrConnectWithoutInvoiceInput | InvoiceItemsCreateOrConnectWithoutInvoiceInput[]
    createMany?: InvoiceItemsCreateManyInvoiceInputEnvelope
    connect?: InvoiceItemsWhereUniqueInput | InvoiceItemsWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type UserUpdateOneWithoutInvoicesNestedInput = {
    create?: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvoicesInput
    upsert?: UserUpsertWithoutInvoicesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInvoicesInput, UserUpdateWithoutInvoicesInput>, UserUncheckedUpdateWithoutInvoicesInput>
  }

  export type SiteUpdateOneWithoutInvoicesNestedInput = {
    create?: XOR<SiteCreateWithoutInvoicesInput, SiteUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: SiteCreateOrConnectWithoutInvoicesInput
    upsert?: SiteUpsertWithoutInvoicesInput
    disconnect?: SiteWhereInput | boolean
    delete?: SiteWhereInput | boolean
    connect?: SiteWhereUniqueInput
    update?: XOR<XOR<SiteUpdateToOneWithWhereWithoutInvoicesInput, SiteUpdateWithoutInvoicesInput>, SiteUncheckedUpdateWithoutInvoicesInput>
  }

  export type InvoiceItemsUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<InvoiceItemsCreateWithoutInvoiceInput, InvoiceItemsUncheckedCreateWithoutInvoiceInput> | InvoiceItemsCreateWithoutInvoiceInput[] | InvoiceItemsUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceItemsCreateOrConnectWithoutInvoiceInput | InvoiceItemsCreateOrConnectWithoutInvoiceInput[]
    upsert?: InvoiceItemsUpsertWithWhereUniqueWithoutInvoiceInput | InvoiceItemsUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: InvoiceItemsCreateManyInvoiceInputEnvelope
    set?: InvoiceItemsWhereUniqueInput | InvoiceItemsWhereUniqueInput[]
    disconnect?: InvoiceItemsWhereUniqueInput | InvoiceItemsWhereUniqueInput[]
    delete?: InvoiceItemsWhereUniqueInput | InvoiceItemsWhereUniqueInput[]
    connect?: InvoiceItemsWhereUniqueInput | InvoiceItemsWhereUniqueInput[]
    update?: InvoiceItemsUpdateWithWhereUniqueWithoutInvoiceInput | InvoiceItemsUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: InvoiceItemsUpdateManyWithWhereWithoutInvoiceInput | InvoiceItemsUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: InvoiceItemsScalarWhereInput | InvoiceItemsScalarWhereInput[]
  }

  export type InvoiceItemsUncheckedUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<InvoiceItemsCreateWithoutInvoiceInput, InvoiceItemsUncheckedCreateWithoutInvoiceInput> | InvoiceItemsCreateWithoutInvoiceInput[] | InvoiceItemsUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceItemsCreateOrConnectWithoutInvoiceInput | InvoiceItemsCreateOrConnectWithoutInvoiceInput[]
    upsert?: InvoiceItemsUpsertWithWhereUniqueWithoutInvoiceInput | InvoiceItemsUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: InvoiceItemsCreateManyInvoiceInputEnvelope
    set?: InvoiceItemsWhereUniqueInput | InvoiceItemsWhereUniqueInput[]
    disconnect?: InvoiceItemsWhereUniqueInput | InvoiceItemsWhereUniqueInput[]
    delete?: InvoiceItemsWhereUniqueInput | InvoiceItemsWhereUniqueInput[]
    connect?: InvoiceItemsWhereUniqueInput | InvoiceItemsWhereUniqueInput[]
    update?: InvoiceItemsUpdateWithWhereUniqueWithoutInvoiceInput | InvoiceItemsUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: InvoiceItemsUpdateManyWithWhereWithoutInvoiceInput | InvoiceItemsUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: InvoiceItemsScalarWhereInput | InvoiceItemsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type SiteCreateNestedOneWithoutPostsInput = {
    create?: XOR<SiteCreateWithoutPostsInput, SiteUncheckedCreateWithoutPostsInput>
    connectOrCreate?: SiteCreateOrConnectWithoutPostsInput
    connect?: SiteWhereUniqueInput
  }

  export type UserUpdateOneWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type SiteUpdateOneWithoutPostsNestedInput = {
    create?: XOR<SiteCreateWithoutPostsInput, SiteUncheckedCreateWithoutPostsInput>
    connectOrCreate?: SiteCreateOrConnectWithoutPostsInput
    upsert?: SiteUpsertWithoutPostsInput
    disconnect?: SiteWhereInput | boolean
    delete?: SiteWhereInput | boolean
    connect?: SiteWhereUniqueInput
    update?: XOR<XOR<SiteUpdateToOneWithWhereWithoutPostsInput, SiteUpdateWithoutPostsInput>, SiteUncheckedUpdateWithoutPostsInput>
  }

  export type InvoicesCreateNestedOneWithoutItemsInput = {
    create?: XOR<InvoicesCreateWithoutItemsInput, InvoicesUncheckedCreateWithoutItemsInput>
    connectOrCreate?: InvoicesCreateOrConnectWithoutItemsInput
    connect?: InvoicesWhereUniqueInput
  }

  export type SiteCreateNestedOneWithoutInvoiceItemsInput = {
    create?: XOR<SiteCreateWithoutInvoiceItemsInput, SiteUncheckedCreateWithoutInvoiceItemsInput>
    connectOrCreate?: SiteCreateOrConnectWithoutInvoiceItemsInput
    connect?: SiteWhereUniqueInput
  }

  export type InvoicesUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<InvoicesCreateWithoutItemsInput, InvoicesUncheckedCreateWithoutItemsInput>
    connectOrCreate?: InvoicesCreateOrConnectWithoutItemsInput
    upsert?: InvoicesUpsertWithoutItemsInput
    connect?: InvoicesWhereUniqueInput
    update?: XOR<XOR<InvoicesUpdateToOneWithWhereWithoutItemsInput, InvoicesUpdateWithoutItemsInput>, InvoicesUncheckedUpdateWithoutItemsInput>
  }

  export type SiteUpdateOneWithoutInvoiceItemsNestedInput = {
    create?: XOR<SiteCreateWithoutInvoiceItemsInput, SiteUncheckedCreateWithoutInvoiceItemsInput>
    connectOrCreate?: SiteCreateOrConnectWithoutInvoiceItemsInput
    upsert?: SiteUpsertWithoutInvoiceItemsInput
    disconnect?: SiteWhereInput | boolean
    delete?: SiteWhereInput | boolean
    connect?: SiteWhereUniqueInput
    update?: XOR<XOR<SiteUpdateToOneWithWhereWithoutInvoiceItemsInput, SiteUpdateWithoutInvoiceItemsInput>, SiteUncheckedUpdateWithoutInvoiceItemsInput>
  }

  export type UserCreateNestedOneWithoutAIconversationInput = {
    create?: XOR<UserCreateWithoutAIconversationInput, UserUncheckedCreateWithoutAIconversationInput>
    connectOrCreate?: UserCreateOrConnectWithoutAIconversationInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutAIconversationNestedInput = {
    create?: XOR<UserCreateWithoutAIconversationInput, UserUncheckedCreateWithoutAIconversationInput>
    connectOrCreate?: UserCreateOrConnectWithoutAIconversationInput
    upsert?: UserUpsertWithoutAIconversationInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAIconversationInput, UserUpdateWithoutAIconversationInput>, UserUncheckedUpdateWithoutAIconversationInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SiteCreateWithoutUserInput = {
    id?: string
    name: string
    description: string
    subdirectory: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl?: string | null
    posts?: PostCreateNestedManyWithoutSiteInput
    invoices?: InvoicesCreateNestedManyWithoutSiteInput
    InvoiceItems?: InvoiceItemsCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description: string
    subdirectory: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl?: string | null
    posts?: PostUncheckedCreateNestedManyWithoutSiteInput
    invoices?: InvoicesUncheckedCreateNestedManyWithoutSiteInput
    InvoiceItems?: InvoiceItemsUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteCreateOrConnectWithoutUserInput = {
    where: SiteWhereUniqueInput
    create: XOR<SiteCreateWithoutUserInput, SiteUncheckedCreateWithoutUserInput>
  }

  export type SiteCreateManyUserInputEnvelope = {
    data: SiteCreateManyUserInput | SiteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutUserInput = {
    id?: string
    title: string
    articleContent: JsonNullValueInput | InputJsonValue
    smallDescription: string
    image: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Site?: SiteCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    articleContent: JsonNullValueInput | InputJsonValue
    smallDescription: string
    image: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    siteId?: string | null
  }

  export type PostCreateOrConnectWithoutUserInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostCreateManyUserInputEnvelope = {
    data: PostCreateManyUserInput | PostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type InvoicesCreateWithoutUserInput = {
    id?: string
    url: string
    invoiceNumber?: string | null
    sellerName?: string | null
    invoiceTotalSumNoVat?: number | null
    invoiceTotalSumWithVat?: number | null
    buyerName?: string | null
    invoiceDate?: string | null
    paymentDate?: string | null
    isInvoice?: boolean | null
    isCreditDebitProformaOrAdvanced?: string | null
    uploadedAt?: Date | string
    Site?: SiteCreateNestedOneWithoutInvoicesInput
    items?: InvoiceItemsCreateNestedManyWithoutInvoiceInput
  }

  export type InvoicesUncheckedCreateWithoutUserInput = {
    id?: string
    url: string
    invoiceNumber?: string | null
    sellerName?: string | null
    invoiceTotalSumNoVat?: number | null
    invoiceTotalSumWithVat?: number | null
    buyerName?: string | null
    invoiceDate?: string | null
    paymentDate?: string | null
    isInvoice?: boolean | null
    isCreditDebitProformaOrAdvanced?: string | null
    uploadedAt?: Date | string
    SiteId?: string | null
    items?: InvoiceItemsUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoicesCreateOrConnectWithoutUserInput = {
    where: InvoicesWhereUniqueInput
    create: XOR<InvoicesCreateWithoutUserInput, InvoicesUncheckedCreateWithoutUserInput>
  }

  export type InvoicesCreateManyUserInputEnvelope = {
    data: InvoicesCreateManyUserInput | InvoicesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionCreateWithoutUserInput = {
    stripeSubscriptionId: string
    interval: string
    status: string
    planId: string
    currentPeriodStart: number
    currentPeriodEnd: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUncheckedCreateWithoutUserInput = {
    stripeSubscriptionId: string
    interval: string
    status: string
    planId: string
    currentPeriodStart: number
    currentPeriodEnd: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionCreateOrConnectWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type AIconversationCreateWithoutUserInput = {
    id?: string
    thread?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AIconversationUncheckedCreateWithoutUserInput = {
    id?: string
    thread?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AIconversationCreateOrConnectWithoutUserInput = {
    where: AIconversationWhereUniqueInput
    create: XOR<AIconversationCreateWithoutUserInput, AIconversationUncheckedCreateWithoutUserInput>
  }

  export type SiteUpsertWithWhereUniqueWithoutUserInput = {
    where: SiteWhereUniqueInput
    update: XOR<SiteUpdateWithoutUserInput, SiteUncheckedUpdateWithoutUserInput>
    create: XOR<SiteCreateWithoutUserInput, SiteUncheckedCreateWithoutUserInput>
  }

  export type SiteUpdateWithWhereUniqueWithoutUserInput = {
    where: SiteWhereUniqueInput
    data: XOR<SiteUpdateWithoutUserInput, SiteUncheckedUpdateWithoutUserInput>
  }

  export type SiteUpdateManyWithWhereWithoutUserInput = {
    where: SiteScalarWhereInput
    data: XOR<SiteUpdateManyMutationInput, SiteUncheckedUpdateManyWithoutUserInput>
  }

  export type SiteScalarWhereInput = {
    AND?: SiteScalarWhereInput | SiteScalarWhereInput[]
    OR?: SiteScalarWhereInput[]
    NOT?: SiteScalarWhereInput | SiteScalarWhereInput[]
    id?: StringFilter<"Site"> | string
    name?: StringFilter<"Site"> | string
    description?: StringFilter<"Site"> | string
    subdirectory?: StringFilter<"Site"> | string
    createdAt?: DateTimeFilter<"Site"> | Date | string
    updatedAt?: DateTimeFilter<"Site"> | Date | string
    imageUrl?: StringNullableFilter<"Site"> | string | null
    userId?: StringNullableFilter<"Site"> | string | null
  }

  export type PostUpsertWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostUpdateWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
  }

  export type PostUpdateManyWithWhereWithoutUserInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutUserInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    articleContent?: JsonFilter<"Post">
    smallDescription?: StringFilter<"Post"> | string
    image?: StringFilter<"Post"> | string
    slug?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    userId?: StringNullableFilter<"Post"> | string | null
    siteId?: StringNullableFilter<"Post"> | string | null
  }

  export type InvoicesUpsertWithWhereUniqueWithoutUserInput = {
    where: InvoicesWhereUniqueInput
    update: XOR<InvoicesUpdateWithoutUserInput, InvoicesUncheckedUpdateWithoutUserInput>
    create: XOR<InvoicesCreateWithoutUserInput, InvoicesUncheckedCreateWithoutUserInput>
  }

  export type InvoicesUpdateWithWhereUniqueWithoutUserInput = {
    where: InvoicesWhereUniqueInput
    data: XOR<InvoicesUpdateWithoutUserInput, InvoicesUncheckedUpdateWithoutUserInput>
  }

  export type InvoicesUpdateManyWithWhereWithoutUserInput = {
    where: InvoicesScalarWhereInput
    data: XOR<InvoicesUpdateManyMutationInput, InvoicesUncheckedUpdateManyWithoutUserInput>
  }

  export type InvoicesScalarWhereInput = {
    AND?: InvoicesScalarWhereInput | InvoicesScalarWhereInput[]
    OR?: InvoicesScalarWhereInput[]
    NOT?: InvoicesScalarWhereInput | InvoicesScalarWhereInput[]
    id?: StringFilter<"Invoices"> | string
    url?: StringFilter<"Invoices"> | string
    invoiceNumber?: StringNullableFilter<"Invoices"> | string | null
    sellerName?: StringNullableFilter<"Invoices"> | string | null
    invoiceTotalSumNoVat?: FloatNullableFilter<"Invoices"> | number | null
    invoiceTotalSumWithVat?: FloatNullableFilter<"Invoices"> | number | null
    buyerName?: StringNullableFilter<"Invoices"> | string | null
    invoiceDate?: StringNullableFilter<"Invoices"> | string | null
    paymentDate?: StringNullableFilter<"Invoices"> | string | null
    isInvoice?: BoolNullableFilter<"Invoices"> | boolean | null
    isCreditDebitProformaOrAdvanced?: StringNullableFilter<"Invoices"> | string | null
    uploadedAt?: DateTimeFilter<"Invoices"> | Date | string
    userId?: StringNullableFilter<"Invoices"> | string | null
    SiteId?: StringNullableFilter<"Invoices"> | string | null
  }

  export type SubscriptionUpsertWithoutUserInput = {
    update: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    where?: SubscriptionWhereInput
  }

  export type SubscriptionUpdateToOneWithWhereWithoutUserInput = {
    where?: SubscriptionWhereInput
    data: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionUpdateWithoutUserInput = {
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    interval?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    currentPeriodStart?: IntFieldUpdateOperationsInput | number
    currentPeriodEnd?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateWithoutUserInput = {
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    interval?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    currentPeriodStart?: IntFieldUpdateOperationsInput | number
    currentPeriodEnd?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIconversationUpsertWithoutUserInput = {
    update: XOR<AIconversationUpdateWithoutUserInput, AIconversationUncheckedUpdateWithoutUserInput>
    create: XOR<AIconversationCreateWithoutUserInput, AIconversationUncheckedCreateWithoutUserInput>
    where?: AIconversationWhereInput
  }

  export type AIconversationUpdateToOneWithWhereWithoutUserInput = {
    where?: AIconversationWhereInput
    data: XOR<AIconversationUpdateWithoutUserInput, AIconversationUncheckedUpdateWithoutUserInput>
  }

  export type AIconversationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    thread?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AIconversationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    thread?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserCreateWithoutSiteInput = {
    id: string
    email: string
    firstName: string
    lastName: string
    profileImage: string
    customerId?: string | null
    createdAt?: Date | string
    posts?: PostCreateNestedManyWithoutUserInput
    Invoices?: InvoicesCreateNestedManyWithoutUserInput
    Subscription?: SubscriptionCreateNestedOneWithoutUserInput
    AIconversation?: AIconversationCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSiteInput = {
    id: string
    email: string
    firstName: string
    lastName: string
    profileImage: string
    customerId?: string | null
    createdAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    Invoices?: InvoicesUncheckedCreateNestedManyWithoutUserInput
    Subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    AIconversation?: AIconversationUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSiteInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSiteInput, UserUncheckedCreateWithoutSiteInput>
  }

  export type PostCreateWithoutSiteInput = {
    id?: string
    title: string
    articleContent: JsonNullValueInput | InputJsonValue
    smallDescription: string
    image: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    User?: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutSiteInput = {
    id?: string
    title: string
    articleContent: JsonNullValueInput | InputJsonValue
    smallDescription: string
    image: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type PostCreateOrConnectWithoutSiteInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutSiteInput, PostUncheckedCreateWithoutSiteInput>
  }

  export type PostCreateManySiteInputEnvelope = {
    data: PostCreateManySiteInput | PostCreateManySiteInput[]
    skipDuplicates?: boolean
  }

  export type InvoicesCreateWithoutSiteInput = {
    id?: string
    url: string
    invoiceNumber?: string | null
    sellerName?: string | null
    invoiceTotalSumNoVat?: number | null
    invoiceTotalSumWithVat?: number | null
    buyerName?: string | null
    invoiceDate?: string | null
    paymentDate?: string | null
    isInvoice?: boolean | null
    isCreditDebitProformaOrAdvanced?: string | null
    uploadedAt?: Date | string
    User?: UserCreateNestedOneWithoutInvoicesInput
    items?: InvoiceItemsCreateNestedManyWithoutInvoiceInput
  }

  export type InvoicesUncheckedCreateWithoutSiteInput = {
    id?: string
    url: string
    invoiceNumber?: string | null
    sellerName?: string | null
    invoiceTotalSumNoVat?: number | null
    invoiceTotalSumWithVat?: number | null
    buyerName?: string | null
    invoiceDate?: string | null
    paymentDate?: string | null
    isInvoice?: boolean | null
    isCreditDebitProformaOrAdvanced?: string | null
    uploadedAt?: Date | string
    userId?: string | null
    items?: InvoiceItemsUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoicesCreateOrConnectWithoutSiteInput = {
    where: InvoicesWhereUniqueInput
    create: XOR<InvoicesCreateWithoutSiteInput, InvoicesUncheckedCreateWithoutSiteInput>
  }

  export type InvoicesCreateManySiteInputEnvelope = {
    data: InvoicesCreateManySiteInput | InvoicesCreateManySiteInput[]
    skipDuplicates?: boolean
  }

  export type InvoiceItemsCreateWithoutSiteInput = {
    id?: string
    item?: string | null
    quantity?: number | null
    unitOfMeasure?: string | null
    pricePerUnitOfMeasure?: number | null
    sum?: number | null
    currency?: string | null
    category?: string | null
    itemDescription?: string | null
    commentsForUser?: string | null
    isInvoice?: boolean | null
    invoiceNumber?: string | null
    sellerName?: string | null
    invoiceDate?: string | null
    paymentDate?: string | null
    invoice: InvoicesCreateNestedOneWithoutItemsInput
  }

  export type InvoiceItemsUncheckedCreateWithoutSiteInput = {
    id?: string
    item?: string | null
    quantity?: number | null
    unitOfMeasure?: string | null
    pricePerUnitOfMeasure?: number | null
    sum?: number | null
    currency?: string | null
    category?: string | null
    itemDescription?: string | null
    commentsForUser?: string | null
    isInvoice?: boolean | null
    invoiceId: string
    invoiceNumber?: string | null
    sellerName?: string | null
    invoiceDate?: string | null
    paymentDate?: string | null
  }

  export type InvoiceItemsCreateOrConnectWithoutSiteInput = {
    where: InvoiceItemsWhereUniqueInput
    create: XOR<InvoiceItemsCreateWithoutSiteInput, InvoiceItemsUncheckedCreateWithoutSiteInput>
  }

  export type InvoiceItemsCreateManySiteInputEnvelope = {
    data: InvoiceItemsCreateManySiteInput | InvoiceItemsCreateManySiteInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSiteInput = {
    update: XOR<UserUpdateWithoutSiteInput, UserUncheckedUpdateWithoutSiteInput>
    create: XOR<UserCreateWithoutSiteInput, UserUncheckedCreateWithoutSiteInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSiteInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSiteInput, UserUncheckedUpdateWithoutSiteInput>
  }

  export type UserUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutUserNestedInput
    Invoices?: InvoicesUpdateManyWithoutUserNestedInput
    Subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    AIconversation?: AIconversationUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    Invoices?: InvoicesUncheckedUpdateManyWithoutUserNestedInput
    Subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    AIconversation?: AIconversationUncheckedUpdateOneWithoutUserNestedInput
  }

  export type PostUpsertWithWhereUniqueWithoutSiteInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutSiteInput, PostUncheckedUpdateWithoutSiteInput>
    create: XOR<PostCreateWithoutSiteInput, PostUncheckedCreateWithoutSiteInput>
  }

  export type PostUpdateWithWhereUniqueWithoutSiteInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutSiteInput, PostUncheckedUpdateWithoutSiteInput>
  }

  export type PostUpdateManyWithWhereWithoutSiteInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutSiteInput>
  }

  export type InvoicesUpsertWithWhereUniqueWithoutSiteInput = {
    where: InvoicesWhereUniqueInput
    update: XOR<InvoicesUpdateWithoutSiteInput, InvoicesUncheckedUpdateWithoutSiteInput>
    create: XOR<InvoicesCreateWithoutSiteInput, InvoicesUncheckedCreateWithoutSiteInput>
  }

  export type InvoicesUpdateWithWhereUniqueWithoutSiteInput = {
    where: InvoicesWhereUniqueInput
    data: XOR<InvoicesUpdateWithoutSiteInput, InvoicesUncheckedUpdateWithoutSiteInput>
  }

  export type InvoicesUpdateManyWithWhereWithoutSiteInput = {
    where: InvoicesScalarWhereInput
    data: XOR<InvoicesUpdateManyMutationInput, InvoicesUncheckedUpdateManyWithoutSiteInput>
  }

  export type InvoiceItemsUpsertWithWhereUniqueWithoutSiteInput = {
    where: InvoiceItemsWhereUniqueInput
    update: XOR<InvoiceItemsUpdateWithoutSiteInput, InvoiceItemsUncheckedUpdateWithoutSiteInput>
    create: XOR<InvoiceItemsCreateWithoutSiteInput, InvoiceItemsUncheckedCreateWithoutSiteInput>
  }

  export type InvoiceItemsUpdateWithWhereUniqueWithoutSiteInput = {
    where: InvoiceItemsWhereUniqueInput
    data: XOR<InvoiceItemsUpdateWithoutSiteInput, InvoiceItemsUncheckedUpdateWithoutSiteInput>
  }

  export type InvoiceItemsUpdateManyWithWhereWithoutSiteInput = {
    where: InvoiceItemsScalarWhereInput
    data: XOR<InvoiceItemsUpdateManyMutationInput, InvoiceItemsUncheckedUpdateManyWithoutSiteInput>
  }

  export type InvoiceItemsScalarWhereInput = {
    AND?: InvoiceItemsScalarWhereInput | InvoiceItemsScalarWhereInput[]
    OR?: InvoiceItemsScalarWhereInput[]
    NOT?: InvoiceItemsScalarWhereInput | InvoiceItemsScalarWhereInput[]
    id?: StringFilter<"InvoiceItems"> | string
    item?: StringNullableFilter<"InvoiceItems"> | string | null
    quantity?: FloatNullableFilter<"InvoiceItems"> | number | null
    unitOfMeasure?: StringNullableFilter<"InvoiceItems"> | string | null
    pricePerUnitOfMeasure?: FloatNullableFilter<"InvoiceItems"> | number | null
    sum?: FloatNullableFilter<"InvoiceItems"> | number | null
    currency?: StringNullableFilter<"InvoiceItems"> | string | null
    category?: StringNullableFilter<"InvoiceItems"> | string | null
    itemDescription?: StringNullableFilter<"InvoiceItems"> | string | null
    commentsForUser?: StringNullableFilter<"InvoiceItems"> | string | null
    isInvoice?: BoolNullableFilter<"InvoiceItems"> | boolean | null
    invoiceId?: StringFilter<"InvoiceItems"> | string
    siteId?: StringNullableFilter<"InvoiceItems"> | string | null
    invoiceNumber?: StringNullableFilter<"InvoiceItems"> | string | null
    sellerName?: StringNullableFilter<"InvoiceItems"> | string | null
    invoiceDate?: StringNullableFilter<"InvoiceItems"> | string | null
    paymentDate?: StringNullableFilter<"InvoiceItems"> | string | null
  }

  export type UserCreateWithoutSubscriptionInput = {
    id: string
    email: string
    firstName: string
    lastName: string
    profileImage: string
    customerId?: string | null
    createdAt?: Date | string
    Site?: SiteCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    Invoices?: InvoicesCreateNestedManyWithoutUserInput
    AIconversation?: AIconversationCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubscriptionInput = {
    id: string
    email: string
    firstName: string
    lastName: string
    profileImage: string
    customerId?: string | null
    createdAt?: Date | string
    Site?: SiteUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    Invoices?: InvoicesUncheckedCreateNestedManyWithoutUserInput
    AIconversation?: AIconversationUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubscriptionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
  }

  export type UserUpsertWithoutSubscriptionInput = {
    update: XOR<UserUpdateWithoutSubscriptionInput, UserUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubscriptionInput, UserUncheckedUpdateWithoutSubscriptionInput>
  }

  export type UserUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Site?: SiteUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    Invoices?: InvoicesUpdateManyWithoutUserNestedInput
    AIconversation?: AIconversationUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Site?: SiteUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    Invoices?: InvoicesUncheckedUpdateManyWithoutUserNestedInput
    AIconversation?: AIconversationUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutInvoicesInput = {
    id: string
    email: string
    firstName: string
    lastName: string
    profileImage: string
    customerId?: string | null
    createdAt?: Date | string
    Site?: SiteCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    Subscription?: SubscriptionCreateNestedOneWithoutUserInput
    AIconversation?: AIconversationCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInvoicesInput = {
    id: string
    email: string
    firstName: string
    lastName: string
    profileImage: string
    customerId?: string | null
    createdAt?: Date | string
    Site?: SiteUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    Subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    AIconversation?: AIconversationUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInvoicesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
  }

  export type SiteCreateWithoutInvoicesInput = {
    id?: string
    name: string
    description: string
    subdirectory: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl?: string | null
    User?: UserCreateNestedOneWithoutSiteInput
    posts?: PostCreateNestedManyWithoutSiteInput
    InvoiceItems?: InvoiceItemsCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateWithoutInvoicesInput = {
    id?: string
    name: string
    description: string
    subdirectory: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl?: string | null
    userId?: string | null
    posts?: PostUncheckedCreateNestedManyWithoutSiteInput
    InvoiceItems?: InvoiceItemsUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteCreateOrConnectWithoutInvoicesInput = {
    where: SiteWhereUniqueInput
    create: XOR<SiteCreateWithoutInvoicesInput, SiteUncheckedCreateWithoutInvoicesInput>
  }

  export type InvoiceItemsCreateWithoutInvoiceInput = {
    id?: string
    item?: string | null
    quantity?: number | null
    unitOfMeasure?: string | null
    pricePerUnitOfMeasure?: number | null
    sum?: number | null
    currency?: string | null
    category?: string | null
    itemDescription?: string | null
    commentsForUser?: string | null
    isInvoice?: boolean | null
    invoiceNumber?: string | null
    sellerName?: string | null
    invoiceDate?: string | null
    paymentDate?: string | null
    Site?: SiteCreateNestedOneWithoutInvoiceItemsInput
  }

  export type InvoiceItemsUncheckedCreateWithoutInvoiceInput = {
    id?: string
    item?: string | null
    quantity?: number | null
    unitOfMeasure?: string | null
    pricePerUnitOfMeasure?: number | null
    sum?: number | null
    currency?: string | null
    category?: string | null
    itemDescription?: string | null
    commentsForUser?: string | null
    isInvoice?: boolean | null
    siteId?: string | null
    invoiceNumber?: string | null
    sellerName?: string | null
    invoiceDate?: string | null
    paymentDate?: string | null
  }

  export type InvoiceItemsCreateOrConnectWithoutInvoiceInput = {
    where: InvoiceItemsWhereUniqueInput
    create: XOR<InvoiceItemsCreateWithoutInvoiceInput, InvoiceItemsUncheckedCreateWithoutInvoiceInput>
  }

  export type InvoiceItemsCreateManyInvoiceInputEnvelope = {
    data: InvoiceItemsCreateManyInvoiceInput | InvoiceItemsCreateManyInvoiceInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutInvoicesInput = {
    update: XOR<UserUpdateWithoutInvoicesInput, UserUncheckedUpdateWithoutInvoicesInput>
    create: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInvoicesInput, UserUncheckedUpdateWithoutInvoicesInput>
  }

  export type UserUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Site?: SiteUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    Subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    AIconversation?: AIconversationUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Site?: SiteUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    Subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    AIconversation?: AIconversationUncheckedUpdateOneWithoutUserNestedInput
  }

  export type SiteUpsertWithoutInvoicesInput = {
    update: XOR<SiteUpdateWithoutInvoicesInput, SiteUncheckedUpdateWithoutInvoicesInput>
    create: XOR<SiteCreateWithoutInvoicesInput, SiteUncheckedCreateWithoutInvoicesInput>
    where?: SiteWhereInput
  }

  export type SiteUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: SiteWhereInput
    data: XOR<SiteUpdateWithoutInvoicesInput, SiteUncheckedUpdateWithoutInvoicesInput>
  }

  export type SiteUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subdirectory?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneWithoutSiteNestedInput
    posts?: PostUpdateManyWithoutSiteNestedInput
    InvoiceItems?: InvoiceItemsUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subdirectory?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUncheckedUpdateManyWithoutSiteNestedInput
    InvoiceItems?: InvoiceItemsUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type InvoiceItemsUpsertWithWhereUniqueWithoutInvoiceInput = {
    where: InvoiceItemsWhereUniqueInput
    update: XOR<InvoiceItemsUpdateWithoutInvoiceInput, InvoiceItemsUncheckedUpdateWithoutInvoiceInput>
    create: XOR<InvoiceItemsCreateWithoutInvoiceInput, InvoiceItemsUncheckedCreateWithoutInvoiceInput>
  }

  export type InvoiceItemsUpdateWithWhereUniqueWithoutInvoiceInput = {
    where: InvoiceItemsWhereUniqueInput
    data: XOR<InvoiceItemsUpdateWithoutInvoiceInput, InvoiceItemsUncheckedUpdateWithoutInvoiceInput>
  }

  export type InvoiceItemsUpdateManyWithWhereWithoutInvoiceInput = {
    where: InvoiceItemsScalarWhereInput
    data: XOR<InvoiceItemsUpdateManyMutationInput, InvoiceItemsUncheckedUpdateManyWithoutInvoiceInput>
  }

  export type UserCreateWithoutPostsInput = {
    id: string
    email: string
    firstName: string
    lastName: string
    profileImage: string
    customerId?: string | null
    createdAt?: Date | string
    Site?: SiteCreateNestedManyWithoutUserInput
    Invoices?: InvoicesCreateNestedManyWithoutUserInput
    Subscription?: SubscriptionCreateNestedOneWithoutUserInput
    AIconversation?: AIconversationCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id: string
    email: string
    firstName: string
    lastName: string
    profileImage: string
    customerId?: string | null
    createdAt?: Date | string
    Site?: SiteUncheckedCreateNestedManyWithoutUserInput
    Invoices?: InvoicesUncheckedCreateNestedManyWithoutUserInput
    Subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    AIconversation?: AIconversationUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type SiteCreateWithoutPostsInput = {
    id?: string
    name: string
    description: string
    subdirectory: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl?: string | null
    User?: UserCreateNestedOneWithoutSiteInput
    invoices?: InvoicesCreateNestedManyWithoutSiteInput
    InvoiceItems?: InvoiceItemsCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateWithoutPostsInput = {
    id?: string
    name: string
    description: string
    subdirectory: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl?: string | null
    userId?: string | null
    invoices?: InvoicesUncheckedCreateNestedManyWithoutSiteInput
    InvoiceItems?: InvoiceItemsUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteCreateOrConnectWithoutPostsInput = {
    where: SiteWhereUniqueInput
    create: XOR<SiteCreateWithoutPostsInput, SiteUncheckedCreateWithoutPostsInput>
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Site?: SiteUpdateManyWithoutUserNestedInput
    Invoices?: InvoicesUpdateManyWithoutUserNestedInput
    Subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    AIconversation?: AIconversationUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Site?: SiteUncheckedUpdateManyWithoutUserNestedInput
    Invoices?: InvoicesUncheckedUpdateManyWithoutUserNestedInput
    Subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    AIconversation?: AIconversationUncheckedUpdateOneWithoutUserNestedInput
  }

  export type SiteUpsertWithoutPostsInput = {
    update: XOR<SiteUpdateWithoutPostsInput, SiteUncheckedUpdateWithoutPostsInput>
    create: XOR<SiteCreateWithoutPostsInput, SiteUncheckedCreateWithoutPostsInput>
    where?: SiteWhereInput
  }

  export type SiteUpdateToOneWithWhereWithoutPostsInput = {
    where?: SiteWhereInput
    data: XOR<SiteUpdateWithoutPostsInput, SiteUncheckedUpdateWithoutPostsInput>
  }

  export type SiteUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subdirectory?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneWithoutSiteNestedInput
    invoices?: InvoicesUpdateManyWithoutSiteNestedInput
    InvoiceItems?: InvoiceItemsUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subdirectory?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    invoices?: InvoicesUncheckedUpdateManyWithoutSiteNestedInput
    InvoiceItems?: InvoiceItemsUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type InvoicesCreateWithoutItemsInput = {
    id?: string
    url: string
    invoiceNumber?: string | null
    sellerName?: string | null
    invoiceTotalSumNoVat?: number | null
    invoiceTotalSumWithVat?: number | null
    buyerName?: string | null
    invoiceDate?: string | null
    paymentDate?: string | null
    isInvoice?: boolean | null
    isCreditDebitProformaOrAdvanced?: string | null
    uploadedAt?: Date | string
    User?: UserCreateNestedOneWithoutInvoicesInput
    Site?: SiteCreateNestedOneWithoutInvoicesInput
  }

  export type InvoicesUncheckedCreateWithoutItemsInput = {
    id?: string
    url: string
    invoiceNumber?: string | null
    sellerName?: string | null
    invoiceTotalSumNoVat?: number | null
    invoiceTotalSumWithVat?: number | null
    buyerName?: string | null
    invoiceDate?: string | null
    paymentDate?: string | null
    isInvoice?: boolean | null
    isCreditDebitProformaOrAdvanced?: string | null
    uploadedAt?: Date | string
    userId?: string | null
    SiteId?: string | null
  }

  export type InvoicesCreateOrConnectWithoutItemsInput = {
    where: InvoicesWhereUniqueInput
    create: XOR<InvoicesCreateWithoutItemsInput, InvoicesUncheckedCreateWithoutItemsInput>
  }

  export type SiteCreateWithoutInvoiceItemsInput = {
    id?: string
    name: string
    description: string
    subdirectory: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl?: string | null
    User?: UserCreateNestedOneWithoutSiteInput
    posts?: PostCreateNestedManyWithoutSiteInput
    invoices?: InvoicesCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateWithoutInvoiceItemsInput = {
    id?: string
    name: string
    description: string
    subdirectory: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl?: string | null
    userId?: string | null
    posts?: PostUncheckedCreateNestedManyWithoutSiteInput
    invoices?: InvoicesUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteCreateOrConnectWithoutInvoiceItemsInput = {
    where: SiteWhereUniqueInput
    create: XOR<SiteCreateWithoutInvoiceItemsInput, SiteUncheckedCreateWithoutInvoiceItemsInput>
  }

  export type InvoicesUpsertWithoutItemsInput = {
    update: XOR<InvoicesUpdateWithoutItemsInput, InvoicesUncheckedUpdateWithoutItemsInput>
    create: XOR<InvoicesCreateWithoutItemsInput, InvoicesUncheckedCreateWithoutItemsInput>
    where?: InvoicesWhereInput
  }

  export type InvoicesUpdateToOneWithWhereWithoutItemsInput = {
    where?: InvoicesWhereInput
    data: XOR<InvoicesUpdateWithoutItemsInput, InvoicesUncheckedUpdateWithoutItemsInput>
  }

  export type InvoicesUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    sellerName?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceTotalSumNoVat?: NullableFloatFieldUpdateOperationsInput | number | null
    invoiceTotalSumWithVat?: NullableFloatFieldUpdateOperationsInput | number | null
    buyerName?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceDate?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDate?: NullableStringFieldUpdateOperationsInput | string | null
    isInvoice?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isCreditDebitProformaOrAdvanced?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneWithoutInvoicesNestedInput
    Site?: SiteUpdateOneWithoutInvoicesNestedInput
  }

  export type InvoicesUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    sellerName?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceTotalSumNoVat?: NullableFloatFieldUpdateOperationsInput | number | null
    invoiceTotalSumWithVat?: NullableFloatFieldUpdateOperationsInput | number | null
    buyerName?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceDate?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDate?: NullableStringFieldUpdateOperationsInput | string | null
    isInvoice?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isCreditDebitProformaOrAdvanced?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    SiteId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SiteUpsertWithoutInvoiceItemsInput = {
    update: XOR<SiteUpdateWithoutInvoiceItemsInput, SiteUncheckedUpdateWithoutInvoiceItemsInput>
    create: XOR<SiteCreateWithoutInvoiceItemsInput, SiteUncheckedCreateWithoutInvoiceItemsInput>
    where?: SiteWhereInput
  }

  export type SiteUpdateToOneWithWhereWithoutInvoiceItemsInput = {
    where?: SiteWhereInput
    data: XOR<SiteUpdateWithoutInvoiceItemsInput, SiteUncheckedUpdateWithoutInvoiceItemsInput>
  }

  export type SiteUpdateWithoutInvoiceItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subdirectory?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneWithoutSiteNestedInput
    posts?: PostUpdateManyWithoutSiteNestedInput
    invoices?: InvoicesUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateWithoutInvoiceItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subdirectory?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUncheckedUpdateManyWithoutSiteNestedInput
    invoices?: InvoicesUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type UserCreateWithoutAIconversationInput = {
    id: string
    email: string
    firstName: string
    lastName: string
    profileImage: string
    customerId?: string | null
    createdAt?: Date | string
    Site?: SiteCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    Invoices?: InvoicesCreateNestedManyWithoutUserInput
    Subscription?: SubscriptionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAIconversationInput = {
    id: string
    email: string
    firstName: string
    lastName: string
    profileImage: string
    customerId?: string | null
    createdAt?: Date | string
    Site?: SiteUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    Invoices?: InvoicesUncheckedCreateNestedManyWithoutUserInput
    Subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAIconversationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAIconversationInput, UserUncheckedCreateWithoutAIconversationInput>
  }

  export type UserUpsertWithoutAIconversationInput = {
    update: XOR<UserUpdateWithoutAIconversationInput, UserUncheckedUpdateWithoutAIconversationInput>
    create: XOR<UserCreateWithoutAIconversationInput, UserUncheckedCreateWithoutAIconversationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAIconversationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAIconversationInput, UserUncheckedUpdateWithoutAIconversationInput>
  }

  export type UserUpdateWithoutAIconversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Site?: SiteUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    Invoices?: InvoicesUpdateManyWithoutUserNestedInput
    Subscription?: SubscriptionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAIconversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Site?: SiteUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    Invoices?: InvoicesUncheckedUpdateManyWithoutUserNestedInput
    Subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type SiteCreateManyUserInput = {
    id?: string
    name: string
    description: string
    subdirectory: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl?: string | null
  }

  export type PostCreateManyUserInput = {
    id?: string
    title: string
    articleContent: JsonNullValueInput | InputJsonValue
    smallDescription: string
    image: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    siteId?: string | null
  }

  export type InvoicesCreateManyUserInput = {
    id?: string
    url: string
    invoiceNumber?: string | null
    sellerName?: string | null
    invoiceTotalSumNoVat?: number | null
    invoiceTotalSumWithVat?: number | null
    buyerName?: string | null
    invoiceDate?: string | null
    paymentDate?: string | null
    isInvoice?: boolean | null
    isCreditDebitProformaOrAdvanced?: string | null
    uploadedAt?: Date | string
    SiteId?: string | null
  }

  export type SiteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subdirectory?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUpdateManyWithoutSiteNestedInput
    invoices?: InvoicesUpdateManyWithoutSiteNestedInput
    InvoiceItems?: InvoiceItemsUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subdirectory?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUncheckedUpdateManyWithoutSiteNestedInput
    invoices?: InvoicesUncheckedUpdateManyWithoutSiteNestedInput
    InvoiceItems?: InvoiceItemsUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subdirectory?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    articleContent?: JsonNullValueInput | InputJsonValue
    smallDescription?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Site?: SiteUpdateOneWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    articleContent?: JsonNullValueInput | InputJsonValue
    smallDescription?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    siteId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    articleContent?: JsonNullValueInput | InputJsonValue
    smallDescription?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    siteId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InvoicesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    sellerName?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceTotalSumNoVat?: NullableFloatFieldUpdateOperationsInput | number | null
    invoiceTotalSumWithVat?: NullableFloatFieldUpdateOperationsInput | number | null
    buyerName?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceDate?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDate?: NullableStringFieldUpdateOperationsInput | string | null
    isInvoice?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isCreditDebitProformaOrAdvanced?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Site?: SiteUpdateOneWithoutInvoicesNestedInput
    items?: InvoiceItemsUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoicesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    sellerName?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceTotalSumNoVat?: NullableFloatFieldUpdateOperationsInput | number | null
    invoiceTotalSumWithVat?: NullableFloatFieldUpdateOperationsInput | number | null
    buyerName?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceDate?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDate?: NullableStringFieldUpdateOperationsInput | string | null
    isInvoice?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isCreditDebitProformaOrAdvanced?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SiteId?: NullableStringFieldUpdateOperationsInput | string | null
    items?: InvoiceItemsUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoicesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    sellerName?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceTotalSumNoVat?: NullableFloatFieldUpdateOperationsInput | number | null
    invoiceTotalSumWithVat?: NullableFloatFieldUpdateOperationsInput | number | null
    buyerName?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceDate?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDate?: NullableStringFieldUpdateOperationsInput | string | null
    isInvoice?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isCreditDebitProformaOrAdvanced?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SiteId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostCreateManySiteInput = {
    id?: string
    title: string
    articleContent: JsonNullValueInput | InputJsonValue
    smallDescription: string
    image: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type InvoicesCreateManySiteInput = {
    id?: string
    url: string
    invoiceNumber?: string | null
    sellerName?: string | null
    invoiceTotalSumNoVat?: number | null
    invoiceTotalSumWithVat?: number | null
    buyerName?: string | null
    invoiceDate?: string | null
    paymentDate?: string | null
    isInvoice?: boolean | null
    isCreditDebitProformaOrAdvanced?: string | null
    uploadedAt?: Date | string
    userId?: string | null
  }

  export type InvoiceItemsCreateManySiteInput = {
    id?: string
    item?: string | null
    quantity?: number | null
    unitOfMeasure?: string | null
    pricePerUnitOfMeasure?: number | null
    sum?: number | null
    currency?: string | null
    category?: string | null
    itemDescription?: string | null
    commentsForUser?: string | null
    isInvoice?: boolean | null
    invoiceId: string
    invoiceNumber?: string | null
    sellerName?: string | null
    invoiceDate?: string | null
    paymentDate?: string | null
  }

  export type PostUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    articleContent?: JsonNullValueInput | InputJsonValue
    smallDescription?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    articleContent?: JsonNullValueInput | InputJsonValue
    smallDescription?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostUncheckedUpdateManyWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    articleContent?: JsonNullValueInput | InputJsonValue
    smallDescription?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InvoicesUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    sellerName?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceTotalSumNoVat?: NullableFloatFieldUpdateOperationsInput | number | null
    invoiceTotalSumWithVat?: NullableFloatFieldUpdateOperationsInput | number | null
    buyerName?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceDate?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDate?: NullableStringFieldUpdateOperationsInput | string | null
    isInvoice?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isCreditDebitProformaOrAdvanced?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneWithoutInvoicesNestedInput
    items?: InvoiceItemsUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoicesUncheckedUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    sellerName?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceTotalSumNoVat?: NullableFloatFieldUpdateOperationsInput | number | null
    invoiceTotalSumWithVat?: NullableFloatFieldUpdateOperationsInput | number | null
    buyerName?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceDate?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDate?: NullableStringFieldUpdateOperationsInput | string | null
    isInvoice?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isCreditDebitProformaOrAdvanced?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    items?: InvoiceItemsUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoicesUncheckedUpdateManyWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    sellerName?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceTotalSumNoVat?: NullableFloatFieldUpdateOperationsInput | number | null
    invoiceTotalSumWithVat?: NullableFloatFieldUpdateOperationsInput | number | null
    buyerName?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceDate?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDate?: NullableStringFieldUpdateOperationsInput | string | null
    isInvoice?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isCreditDebitProformaOrAdvanced?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InvoiceItemsUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    unitOfMeasure?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerUnitOfMeasure?: NullableFloatFieldUpdateOperationsInput | number | null
    sum?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    itemDescription?: NullableStringFieldUpdateOperationsInput | string | null
    commentsForUser?: NullableStringFieldUpdateOperationsInput | string | null
    isInvoice?: NullableBoolFieldUpdateOperationsInput | boolean | null
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    sellerName?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceDate?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDate?: NullableStringFieldUpdateOperationsInput | string | null
    invoice?: InvoicesUpdateOneRequiredWithoutItemsNestedInput
  }

  export type InvoiceItemsUncheckedUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    unitOfMeasure?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerUnitOfMeasure?: NullableFloatFieldUpdateOperationsInput | number | null
    sum?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    itemDescription?: NullableStringFieldUpdateOperationsInput | string | null
    commentsForUser?: NullableStringFieldUpdateOperationsInput | string | null
    isInvoice?: NullableBoolFieldUpdateOperationsInput | boolean | null
    invoiceId?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    sellerName?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceDate?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDate?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InvoiceItemsUncheckedUpdateManyWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    unitOfMeasure?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerUnitOfMeasure?: NullableFloatFieldUpdateOperationsInput | number | null
    sum?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    itemDescription?: NullableStringFieldUpdateOperationsInput | string | null
    commentsForUser?: NullableStringFieldUpdateOperationsInput | string | null
    isInvoice?: NullableBoolFieldUpdateOperationsInput | boolean | null
    invoiceId?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    sellerName?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceDate?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDate?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InvoiceItemsCreateManyInvoiceInput = {
    id?: string
    item?: string | null
    quantity?: number | null
    unitOfMeasure?: string | null
    pricePerUnitOfMeasure?: number | null
    sum?: number | null
    currency?: string | null
    category?: string | null
    itemDescription?: string | null
    commentsForUser?: string | null
    isInvoice?: boolean | null
    siteId?: string | null
    invoiceNumber?: string | null
    sellerName?: string | null
    invoiceDate?: string | null
    paymentDate?: string | null
  }

  export type InvoiceItemsUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    unitOfMeasure?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerUnitOfMeasure?: NullableFloatFieldUpdateOperationsInput | number | null
    sum?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    itemDescription?: NullableStringFieldUpdateOperationsInput | string | null
    commentsForUser?: NullableStringFieldUpdateOperationsInput | string | null
    isInvoice?: NullableBoolFieldUpdateOperationsInput | boolean | null
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    sellerName?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceDate?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDate?: NullableStringFieldUpdateOperationsInput | string | null
    Site?: SiteUpdateOneWithoutInvoiceItemsNestedInput
  }

  export type InvoiceItemsUncheckedUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    unitOfMeasure?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerUnitOfMeasure?: NullableFloatFieldUpdateOperationsInput | number | null
    sum?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    itemDescription?: NullableStringFieldUpdateOperationsInput | string | null
    commentsForUser?: NullableStringFieldUpdateOperationsInput | string | null
    isInvoice?: NullableBoolFieldUpdateOperationsInput | boolean | null
    siteId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    sellerName?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceDate?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDate?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InvoiceItemsUncheckedUpdateManyWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    unitOfMeasure?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerUnitOfMeasure?: NullableFloatFieldUpdateOperationsInput | number | null
    sum?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    itemDescription?: NullableStringFieldUpdateOperationsInput | string | null
    commentsForUser?: NullableStringFieldUpdateOperationsInput | string | null
    isInvoice?: NullableBoolFieldUpdateOperationsInput | boolean | null
    siteId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    sellerName?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceDate?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDate?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}