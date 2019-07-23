This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Deployment

Uses [GitHub Actions](https://github.com/features/actions) to [zeit.co/now](https://zeit.co/now)

- [ori-homework-artsy.andykenward.com](https://ori-homework-artsy.andykenward.com)

- [ori-homework-artsy.andykenward.now.sh](https://ori-homework-artsy.andykenward.now.sh)

## Requirements

- node `^10.15.3`
- yarn `^1.16.0`

### Yarn

- [Yarn installation guide](https://yarnpkg.com/en/docs/install)

### Node

Recommend using a node version manager tool.

- [NVM](https://github.com/creationix/nvm#install-script)

Once NVM is installed go to the repos root directory

```
$ nvm use
```

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

## Enviroment Variables

Don't forget to set these up on the CI if changing environments or API.

**There are defaults used in the codebase if not set in the environment for now.**

```
REACT_APP_API=https://metaphysics-production.artsy.net/v2/
SCHEMA_PATH=./data/schema.graphql
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

### `yarn type-check:watch

Use [TypeScript] to check typings in `.ts` and `.tsx` files and watch for changes.

### `yarn sync-schema`

Downloads the [GraphQL] schema for [Artsy Metaphysics] endpoint to [data/schema.graphql]. We use this to generate the [TypeScript] typings for GraphQL queries and mutations.

### `yarn codegen`

Generate [TypeScript] typings for GraphQL queries and mutations using [GraphQL Code Generator].

See [`codegen.yml`] for configuration.

Outputs to [`src/generated/graphql.schema.json`] & [`graphql.tsx`].

Using [`@graphql-codegen/typescript-react-apollo`] to output [React Hooks] of [GraphQL] queries & mutations. Saves having to write out verbose typings manually.

### `yarn codegen:watch`

Runs the above `yarn codegen` in watch mode. Everytime you change a [GraphQL] query or mutation in the codebase the typings should update automatically.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## GraphQL

API EndPoint - https://metaphysics-production.artsy.net/v2/

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
