import React from "react"

// Components
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

// Utils
import getMetadata from "../utils/getMetadata"

// Types
type TagsTypes = {
  pageContext: { tag: string }
  data: {
    allMarkdownRemark: {
      totalCount: number
      edges: {
        node: {
          frontmatter: {
            title: string
          }
          fields: {
            slug: string
          }
        }
      }[]
    }
  }
}

const Tags: React.FC<TagsTypes> = ({ pageContext, data }): JSX.Element => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  const { primary, tertiary } = getMetadata().site.siteMetadata.colors

  return (
    <Layout>
      <Seo title={`Tag: ${tag}`} />
      <h1 className="text-lg mb-2 font-light">{tagHeader}</h1>
      <ul className="list-disc pl-5">
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title } = node.frontmatter
          return (
            <li key={slug} className="pl-0 mb-2">
              <Link
                className="p-4 px-4 pl-0 mr-1 font-thin text-bg hover:underline"
                to={`/blog${slug}`}
                style={{
                  color: tertiary,
                  padding: "1px 3px",
                  backgroundColor: primary,
                }}
              >
                {title}
              </Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query ($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
