<h1 align="center">
    Sakha Blog Starter
</h1>

## Technology Stack

- [GatsbyJs](http://prismjs.com).
- [Tailwind css](http://lostgrid.org).
- [Styled components](https://bitsofco.de/the-new-system-font-stack).
- [Netlify CMS](https://www.netlifycms.org).
- [Netlify CMS Locales](https://www.netlifycms.org).
- [gatsby-plugin-image](https://flow.org/).
- [PWA](https://flow.org/) support.

<!-- ## Features
+ [Mobile-First](https://medium.com/@mrmrs_/mobile-first-css-48bc4cc3f60f) approach in development.
+ Archive and tags.
+ Google Analytics.
+ Pagination support.(Coming soon) -->

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
