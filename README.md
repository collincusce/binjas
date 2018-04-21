# BinJaS! The Binary Javascript Serializer

A library for compiling JSON into a very tighly compacted serialization model.

Built using webpack library starter: https://github.com/krasimir/webpack-library-starter

*Have in mind that you have to build your library before publishing. The files under the `lib` folder are the ones that should be distributed.*

## Getting started

Run `yarn install` (recommended) or `npm install` to get the project's dependencies.

Run `yarn build` or `npm run build` to produce minified version.

## Development mode

Having all the dependencies installed, run `yarn dev` or `npm run dev`. This command will generate an non-minified version and will run a watcher to get the compilation on file change.

## Running the tests

Run `yarn test` or `npm run test`.

## Scripts

* `yarn build` or `npm run build` - produces production version under the `lib` folder.
* `yarn dev` or `npm run dev` - produces development version and runs a watcher.
* `yarn test` or `npm run test` - well runs the tests.
* `yarn test:watch` or `npm run test:watch` - runs tests in watch mode.
