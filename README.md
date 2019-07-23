# ORI HOMEWORK ARTSY

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

[ori-homework-artsy.andykenward.com](https://ori-homework-artsy.andykenward.com)

[Artsy GraphQL API]

## Requirements

- node `^10.15.3`
- yarn `^1.16.0`

### Node

Recommend using a node version manager tool.

- [NVM](https://github.com/creationix/nvm#install-script)

Once NVM is installed go to the repos root directory

```
$ nvm use
```

### Yarn

- [Yarn installation guide](https://yarnpkg.com/en/docs/install)


## Installation

Please check the above [requirements](#Requirements) before installation.

```
$ yarn
$ cp .env.sample .env
$ yarn codegen && yarn start
```

## Development

In seperate terminal windows run.

```
$ yarn start
```

```
$ yarn codegen:watch
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn format`

Use [Prettier] to format `.css`, `.js`, `.jsx`, `.ts`, `.tsx` files in `/src` .

### `yarn lint`

Use [ESLint] to lint `.js`, `.ts`, `.tsx` files in `/src`.

### `yarn type-check`

Use [TypeScript] to check typings in `.ts` and `.tsx` files.

### `yarn type-check:watch`

Use [TypeScript] to check typings in `.ts` and `.tsx` files and watch for changes.

### `yarn sync-schema`

Downloads the [GraphQL] schema for [Artsy Metaphysics] endpoint to [data/schema.graphql]. We use this to generate the [TypeScript] typings for GraphQL queries and mutations.

### `yarn codegen`

Generate [TypeScript] typings for GraphQL queries and mutations using [GraphQL Code Generator].

See [`codegen.yml`] for configuration.

Outputs [`src/generated/graphql.tsx`] & [`src/generated/introspection-result.ts`]. 

**These are git ignored and will be generated on the CI during deployment, but you need them locally for typings.**

Using [`@graphql-codegen/typescript-react-apollo`] to output [React Hooks] of [GraphQL] queries & mutations. Saves having to write out verbose typings manually.

### `yarn codegen:watch`

Runs the above `yarn codegen` in watch mode. Everytime you change a [GraphQL] query or mutation in the codebase the typings should update automatically.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#Deployment) for more information.

## GraphQL

[Artsy GraphQL API]

[Apollo Client]

## Environment Variables

Don't forget to set these up on the CI if changing environments or API.

**There are defaults used in the codebase if not set in the environment**

```
REACT_APP_API=https://metaphysics-production.artsy.net/v2/
SCHEMA_PATH=./data/schema.graphql
```

For `now` deployment you need to add secrets to your account via now-cli.

**FYI `now` secrets keys are case sensitive, REACT_APP_API will be react_app_api when using on now-cli**
[using-environment-variables-and-secrets](https://zeit.co/docs/v2/build-step#using-environment-variables-and-secrets)

```
npx now secrets add react_app_api https://metaphysics-production.artsy.net/v2/
npx now secrets add schema_path ./data/schema.graphql
npx now secrets add ci true
```

## Deployment

Uses [GitHub Actions] to deploy to [zeit.co/now].

Every branch in the repo is deployed to [zeit.co/now]. 

And is aliased using a naming convention of `<project-name>-<branch>.<scope>.now.sh`. 

For example

[`ori-homework-artsy`-`develop`.andykenward.now.sh](https://ori-homework-artsy-develop.andykenward.now.sh)

The most recent committed branch will always alias to [ori-homework-artsy.andykenward.now.sh](https://ori-homework-artsy.andykenward.now.sh)

**`master` branch is aliased to [ori-homework-artsy.andykenward.com](https://ori-homework-artsy.andykenward.com)**

### Actions
- install
- codegen
- lint
- type-check
- test
- build
- deploy

[GitHub Actions] configuration see [`.github/main.workflow`] and [ori-homework-artsy/actions]

[zeit.co/now] configuration see [`now.json`]

Also see [Environment Variables](#environment-variables)

#### URLS

- [ori-homework-artsy.andykenward.now.sh](https://ori-homework-artsy.andykenward.now.sh)
- [ori-homework-artsy.andykenward.com](https://ori-homework-artsy.andykenward.com)

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

[prettier]: https://prettier.io
[eslint]: https://eslint.org
[artsy metaphysics]: https://github.com/artsy/metaphysics
[graphql]: https://graphql.org
[data/schema.graphql]: ./data/schema.graphql
[typescript]: https://www.typescriptlang.org
[graphql code generator]: https://graphql-code-generator.com
[`codegen.yml`]: ./codegen.yml
[`@graphql-codegen/typescript-react-apollo`]: https://graphql-code-generator.com/docs/plugins/typescript-react-apollo
[react hooks]: https://reactjs.org/docs/hooks-intro.html
[`.github/main.workflow`]: .github/main.workflow
[github actions]: https://github.com/features/actions
[ori-homework-artsy/actions]: https://github.com/andykenward/ori-homework-artsy/actions
[`now.json`]: ./now.json
[artsy graphql api]: https://metaphysics-production.artsy.net/v2/
[apollo client]: https://www.apollographql.com
[`src/generated/introspection-result.ts`]: ./src/generated/introspection-result.ts
[`src/generated/graphql.tsx`]: ./src/generated/graphql.tsx
[zeit.co/now]: https://zeit.co/now
