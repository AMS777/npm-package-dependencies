# NPM Package Dependencies

This application takes the name of an [NPM package](https://www.npmjs.com/) and lists its dependencies recursively.

It caches the NPM packages with [React Query](https://react-query.tanstack.com/).

It's developed with TDD/BDD with [Cypress](https://www.cypress.io/).

## Install

On a terminal in the project directory, run:

```
npm install
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run cypress:open`

Runs the Cypress app.

Click on a test suit to run it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

## Known errors

The NPM registry API doesn't include the `Access-Control-Allow-Origin` header in the response. This makes it not possible to read the responses from a frontend like this application.

This application can use the NPM registry API with a local server, changing:

**src/utils/urls.js:**

```
export function makeNpmPackageUrl(packageName) {
  return `https://registry.npmjs.org/${packageName}/latest`;
}
```

with:

**src/utils/urls.js:**

```
export function makeNpmPackageUrl(packageName) {
  return `/${packageName}/latest`;
}
```

while having:

**package.json:**

```
{
  ...
  "proxy": "https://registry.npmjs.org",
  ...
}
```
