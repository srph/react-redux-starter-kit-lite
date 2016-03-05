# react-redux-starter-kit-lite
A less opinionated react+redux starter kit without server-side rendering and styling.

## Deprecation Notice
This boilerplate is the lite version of [react-redux-starter-kit](https://github.com/srph/react-redux-starter-kit). However, I recently decided to remove server-side rendering from the original boilerplate which makes this a redundant project.

## Libraries
**Mainly**:
- [react](http://facebook.github.io/react) (`v0.14.2`)
- [react-router](http://rackt.github.io/react-router) (`v1.0.0`)
- [redux](http://rackt.github.io/redux) (`v3.0.4`)
- [react-redux](http://github.com/gaearon/react-redux) (`v4.0.0`)
- [redux-simple-router](http://rackt.github.io/redux) (`v1.0.2`)
- [redux-thunk](http://github.com/gaearon/redux-thunk) (`v1.0.0`)
- [classnames](http://github.com/JedWatson/classnames) (`v2.2.0`)
- [axios](https://github.com/mzabriskie/axios) (`v0.7.0`)

**Development**:
- [webpack](http://webpack.github.io)
- [babel](http://babeljs.io) (`v6.1.5`)
- [redux-devtools](https://github.com/gaearon/redux-devtools/) (`v3.0.0-beta-3`)
- [redux-devtools-log-monitor](https://github.com/gaearon/redux-devtools/) (`v1.0.0-beta-3`)

## FAQ
- Where's my `actions`, `reducers`, and `constants`? This repository follows [ducks-modular-redux](https://github.com/erikras/ducks-modular-redux).

## Getting
Clone, and then run the following to install the dependencies:
```bash
npm install
```

## Development
|command|description|
|----|----|
|`npm watch:build`|compile script|
|`npm watch:script`|compile script and watch for changes|
|`npm prod:script`|compile and uglify script|
|`npm start`|compile script and open html|

## Configuration
We use [dotenv](https://www.npmjs.com/package/dotenv-style) configuration.

By convention, env configs are surrounded with underscores (`_`) when used throughout the application (e.g., `API` -> `_API_`). For more information, checkout `build/webpack.config.js`.

<sub>*Note*: If you don't have any `.env` file in the project root directory, run this: `cp .env.example .env`.</sub>

|config|description|
|----|----|
|`_ENV_`|A global variable for `process.env.NODE_ENV`.|
|`_PRODUCTION_`|`true` when `process.env.NODE_ENV` is set to `production`.|
|`_DEV_`|`true` when `process.env.NODE_ENV` is **not** set to `production`.|
|`_API_`|The URI of the your API. Mainly used to concatenate your requests with a base URI in `common/utils/axios/interceptors/concatBaseUrl`.|
|`_IMG_`|Path to your images folder. This can be used as such : ````${_IMG_}/cat.jpg````.|
|`_REDUX_DEVTOOLS_`|Condition which Redux Devtools will be enabled.|
