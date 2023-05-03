# template-esm

Quickly setup ESM repositories with preconfigured functionality.

## Installation

1. Run `npm init` and answer the required prompts
2. Run `npm install`

## Usage

Remove/replace the example source files in the `src` directory with your own.

When adding source files, remember to add the build output file details to the `files` & `exports` fields of [package.json](package.json) and [.gitignore](.gitignore).

<details>
  <summary>Build</summary>

`npm run prepare` runs all preparation clean & build scripts:

- `npm run prepare:clean` removes any files as specified in the `files` fields of [package.json](package.json)
- `npm run prepare:js` compiles JavaScript source files into the root directory files with [Babel](https://github.com/babel/babel)

_Note: the ["prepare" Life Cycle Script](https://docs.npmjs.com/cli/using-npm/scripts) runs automatically during `publish`, `pack` and on local `install`._

</details>

<details>
  <summary>Testing</summary>

The GitHub action [node.js.yml](.github/workflows/node.js.yml) is used to run the tests on pull requests and commit pushes into the main branch.

`npm run test` runs all tests:

- `npm run test:eslint` runs the [ESLint](https://github.com/eslint/eslint) JavaScript linting checks
- `npm run test:jest` runs the [Jest](https://github.com/facebook/jest) tests
- `npm run test:prettier` runs the [Prettier](https://github.com/prettier/prettier) code formatting checks

</details>

<details>
  <summary>Code linting</summary>

[Husky](https://github.com/typicode/husky) & [lint-staged](https://github.com/okonet/lint-staged) are used to automatically run code linting checks on each file of a commit.

You can manually run linting error fixes with:

- `npm run eslint` fixes JavaScript linting issues with [ESLint](https://github.com/eslint/eslint)
- `npm run prettier` fixes code formatting issues with [Prettier](https://github.com/prettier/prettier)

</details>

## Custom dev tooling

<details>
  <summary>npm init</summary>

- Automatically resets `name` with `--scope` arg (if given) and directory name (lowercased)
- Automatically resets `version` to `0.0.0`
- Automatically sets `repository`, `bugs` & `homepage` from `.git/config`
- Prompts user for `description` (required)
- Prompts user for `keywords`, `license` & `author` (optional)

</details>

<details>
  <summary>postprepare</summary>

`npm run postprepare` runs the following formatting:

- Updates [package.json](package.json):
  - Formats `repository` & `bugs` to shorthand urls
  - Sorts the order of keys - see [KEYS_ORDER](.npm-postprepare.cjs)
  - Sorts the order of sub-keys alphabetically
  - Sorts the order of `dependencies`, `devDependencies` & `peerDependencies` fields to the end
- Updates the [README.md](README.md):
  - Uses the package `name` for the main title
  - Uses the package `description` for the first paragraph after the main title
  - Keeps anything from the second title and below

_Note: the ["postprepare" Life Cycle Script](https://docs.npmjs.com/cli/using-npm/scripts) runs automatically on `install`._

</details>
