import * as React from "react"
import { Link, graphql } from "gatsby"
import { RiZzzFill as SleepIcon } from "@react-icons/all-files/ri/RiZzzFill"
import Layout from "../components/layout"
import Seo from "../components/seo"

// Utilities
import kebabCase from "lodash/kebabCase"
import getMetadata from "../functions/getMetadata"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const tags = data.allMarkdownRemark.group

  const { primary, tertiary } = getMetadata().site.siteMetadata.colors

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="Archive" />
        <div className="flex flex-row items-center">
          <SleepIcon className="mr-2 text-2xl" />
          <span> No blog posts yet.</span>
        </div>
      </Layout>
    )
  }

  return (
    <Layout transparent light sticky rounded="true">
      <Seo title="Archive" />
      <div className="grid md:grid-cols-2 pb-4">
        <div>
          <h2 className="text-lg mb-2 font-light">Tags</h2>
          <ul className="list-disc pl-5">
            {tags.map(tag => (
              <li className="pl-0 mb-2" key={tag.fieldValue}>
                <div className="flex flex-row">
                  <Link
                    className="p-4 px-4 pl-0 mr-1 font-thin hover:underline"
                    to={`/tags/${kebabCase(tag.fieldValue)}/`}
                    style={{
                      color: tertiary,
                      padding: "1px 3px",
                      backgroundColor: primary,
                    }}
                  >
                    {tag.fieldValue}
                  </Link>
                  <small className="flex items-center font-thin">
                    &bull; ({tag.totalCount})
                  </small>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-lg mb-2 font-light">Posts</h2>
          <ul className="list-disc pl-5">
            {posts.map(post => {
              const title = post.frontmatter.title || post.fields.slug

              return (
                <li key={post.fields.slug} className="pl-0 mb-2">
                  <div className="flex flex-row">
                    <Link
                      className="p-4 px-4 pl-0 mr-1 font-thin hover:underline"
                      to={`/blog${post.fields.slug}`}
                      itemProp="url"
                      style={{
                        color: tertiary,
                        padding: "1px 3px",
                        backgroundColor: primary,
                      }}
                    >
                      {title}
                    </Link>
                    <small className="flex items-center font-thin">
                      &bull; {post.frontmatter.date}
                    </small>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
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
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "DD/MM/YYYY", locale: "pt-br")
          title
          description
        }
      }
    }
  }
`
