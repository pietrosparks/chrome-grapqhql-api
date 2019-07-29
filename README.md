
## Getting started

```sh
# 1. Bootstrap GraphQL server in directory `my-app`, based on `node-basic` boilerplate
graphql create my-app --boilerplate node-basic

# 2. When prompted, deploy the Prisma service to a _public cluster_

# 3. Navigate to the new project
cd my-app

# 4. Start server (runs on http://localhost:4000)
yarn start
```

![](https://imgur.com/hElq68i.png)

## Documentation

### Commands

* `yarn start` starts GraphQL server on `http://localhost:4000`
* `yarn prisma <subcommand>` gives access to local version of Prisma CLI (e.g. `yarn prisma deploy`)

### Project structure

![](https://imgur.com/95faUsa.png)

| File name 　　　　　　　　　　　　　　| Description 　　　　　　　　<br><br>| 
| :--  | :--         |
| `└── prisma ` (_directory_) | _Contains all files that are related to the Prisma database service_ |\
| `　　├── prisma.yml` | The root configuration file for your Prisma database service ([docs](https://www.prismagraphql.com/docs/reference/prisma.yml/overview-and-example-foatho8aip)) |
| `　　└── datamodel.graphql` | Defines your data model (written in [GraphQL SDL](https://blog.graph.cool/graphql-sdl-schema-definition-language-6755bcb9ce51)) |
| `└── src ` (_directory_) | _Contains the source files for your GraphQL server_ |
| `　　├── index.js` | The entry point for your GraphQL server |
| `　　├── schema.graphql` | The **application schema** that defines the GraphQL API  |
| `　　└── generated` (_directory_) | _Contains generated files_ |
| `　　　　└── prisma-client` (_directory_) | The generated Prisma client  |

## Contributing

The GraphQL boilerplates are maintained by the GraphQL community, with official support from the [Apollo](https://www.apollographql.com/) & [Prisma](https://www.prisma.io) teams.

Your feedback is **very helpful**, please share your opinion and thoughts! If you have any questions or want to contribute yourself, join the `#graphql-boilerplate` channel on our [Slack](https://slack.prisma.io/).