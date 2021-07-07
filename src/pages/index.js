import * as React from "react"
import { Link, graphql } from "gatsby"
import Masonry from "react-masonry-css"

import {
  GatsbyImage as Image,
  filterImageString,
} from "@tsaristbomba/gatsby-theme-bomba"
// import BlogLayout from "../components/blogLayout"
import Seo from "../components/seo"
import Layout from "../components/layout"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout>
        <Seo title="All posts" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  const masonryBreakpoints = {
    default: 3,
    768: 2,
    480: 1,
  }

  return (
    <Layout>
      <Seo title="All posts" />
      <div>
        <ol>
          <Masonry
            breakpointCols={masonryBreakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {posts.map((post, key) => {
              const title = post.frontmatter.title || post.fields.slug

              return (
                <li key={post.fields.slug} className={`mb-6`}>
                  <article
                    className="post-list-item"
                    itemScope
                    itemType="http://schema.org/Article"
                  >
                    <header>
                      <h2 className="font-thin">
                        <Link
                          className="text-xl text-gray-500 font-semibold cursor-pointer hover:text-gray-900 transition-colors ease-in-out"
                          to={`/blog${post.fields.slug}`}
                          itemProp="url"
                        >
                          <Image
                            image={filterImageString(post.frontmatter.image)}
                            rounded
                            grayscale
                            shadow
                            cursor="true"
                            alt={title}
                          />
                          <span
                            className="mt-2 font-encode font-light text-xl hover:underline"
                            itemProp="headline"
                          >
                            {title}
                          </span>
                        </Link>
                      </h2>
                      <small className="text-gray-400 text-xs">
                        {post.frontmatter.date}
                      </small>
                    </header>
                    <section>
                      <p
                        className="font-light text-gray-500"
                        dangerouslySetInnerHTML={{
                          __html: post.frontmatter.description || post.excerpt,
                        }}
                        itemProp="description"
                      />
                    </section>
                  </article>
                </li>
              )
            })}
          </Masonry>
        </ol>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "DD/MM/YYYY", locale: "pt-br")
          title
          description
          image
        }
      }
    }
  }
`
