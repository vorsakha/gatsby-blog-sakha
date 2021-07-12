<p align="center">
  <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
</p>
<h1 align="center">
    Sakha Blog Starter
</h1>

## Technology Stack

- [GatsbyJs](http://gatsbyjs.com).
- [Tailwind css](http://tailwindcss.com).
- [Styled components](https://styled-components.com/).
- [Netlify CMS](https://www.netlifycms.org).
- [Netlify CMS Locales](https://www.npmjs.com/package/netlify-cms-locales).
- [gatsby-plugin-image](https://www.gatsbyjs.com/plugins/gatsby-plugin-image/).

## Features

- [PWA](https://web.dev/progressive-web-apps/) support.
- [Mobile-First](https://medium.com/@mrmrs_/mobile-first-css-48bc4cc3f60f) approach in development.
- Archive and tags.
<!-- + Google Analytics. -->
- Pagination support.
- Blazing fast!

## Quick edit

You can edit basic information by:

- Default image - You can change it by replacing default.jpg at src/images (keep the same name "default") - it applies when the blog post has no image provided.
- Navigation Title - You can edit by changing gatsby-config.js metadata title.
- Author
  - Author name - You can edit by changing gatsby-config.js metadata.
  - Author picture - You can change it by replacing author.jpg at src/images (keep the same name "author" or change on gatsby-config.js also).
- Socials - You can edit by changing gatsby-config.js metadata. If social option is "", it won't show anything, if has any text, will start to show at footer using that text as href link.
- Color Scheme - You can edit by changing gatsby-config.js.

## Quick Start

#### Create a Gatsby site

Create a new site with Gatsby CLI, specifying the Sakha starter.

```sh
gatsby new my-blog https://github.com/tsaristbomba/gatsby-blog-sakha
```

#### Start Developing

Navigate into your new site’s directory and start the gatsby develop script.

```sh
cd blog
gatsby develop
```

#### Open the source code and start editing!

Your site is now running at `http://localhost:8000`!

Query your data at: `http://localhost:8000/___graphql`.

Learn more about how to query Gatsby data at - [Gatsby Tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).

## Deploy with Netlify

Try on [Netlify](https://netlify.com)'s quick deploy:

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/tsaristbomba/gatsby-blog-sakha" target="_blank"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

#### NetlifyCMS Locally

To test the CMS locally, you'll need run a production build of the site:

```
$ yarn build
$ gatsby serve
```

## Folder Structure

```
└── content
    ├── assets
    └── blog
└── static
    ├── admin
└── src
    ├── components
    │   ├── common
    │   └── Scroll
    ├── images
    ├── pages
    ├── styles
    ├── templates
    └── utils
```
