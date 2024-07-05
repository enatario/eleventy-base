# Eleventy base
A foundational static site generator using [11ty].

Includes:
* SCSS
* Javascript modules
* CSS and JS linting
* Netlify deployment

## Pre-requisites
* [Node]
* [Yarn]
* A general understanding of [11ty]

## Setup
* Use [this template][template] to generate a version in your own Github repo, or clone this locally and manually add to your remote repo.
* Run `yarn`

## Run locally
* Run `npm start`
* View your project on`localhost:8080`

## Where stuff lives
* Work in the `src` folder unless you need to adjust development configurations in `.eleventy.js` `package.json` or any other root file.
* SCSS lives in the `css` folder and processes to `app.css` in the `dist` folder.
* JS lives in the `js` folder and processes to `app.js` in the `dist` folder.
* The `static` folder is for images, fonts, and other media.
* `index.njk` is your root page. You can add other partials to this. And make sub-pages. Read up on [Nunjucks] and [11ty collections][collections].
  * You can change to [any other templating language][template-lang] that 11ty supports if you don't want to work in njk.
* Data can be passed to njk files and is stored in the `_data` folder. Currently the only file there is `metadata.json` that is being passed into the `head` in `_includes/layouts/base.njk`.
  * Read up on [frontmatter] to pass data to your templates within each page.

## Build
* Run `npm run build`
* All build files should end up in the `dist` folder

## Deploy
[Deploy to Netlify using this template][deploy-to-netlify] or manually connect to your Netlify account with the repository you've set up. The configuration lives in `netlify.toml` and you can make it fancier if you like.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)][deploy-to-netlify]

[11ty]: https://www.11ty.dev/
[Node]: https://nodejs.org/
[Yarn]: https://classic.yarnpkg.com/en/
[template]: https://github.com/enatario/eleventy-base/generate
[Nunjucks]: https://mozilla.github.io/nunjucks/
[collections]: https://www.11ty.dev/docs/collections/
[template-lang]: https://www.11ty.dev/docs/languages/
[frontmatter]: https://www.11ty.dev/docs/data-frontmatter/
[deploy-to-netlify]: https://app.netlify.com/start/deploy?repository=https://github.com/enatario/eleventy-base
