import * as React from "react"
import { Link, graphql } from "gatsby"
import { Seo } from "@tsaristbomba/gatsby-theme-bomba"
import { RiZzzFill as SleepIcon } from "@react-icons/all-files/ri/RiZzzFill"
import Layout from "../components/layout"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <div className="flex flex-row items-center">
          <SleepIcon className="mr-2 text-2xl" />
          <span> Sem blogs postados.</span>
        </div>
      </Layout>
    )
  }

  return (
    <Layout transparent light sticky rounded="true">
      <Seo title="All posts" />
      <ol className="list-disc pl-5">
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug} className="pl-0">
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <div className="flex flex-row py-1">
                  <h2 className="p-0">
                    <Link
                      className="p-4 px-4 pl-0"
                      to={`/blog${post.fields.slug}`}
                      itemProp="url"
                    >
                      <span
                        className="font-thin text-bg hover:underline"
                        itemProp="headline"
                      >
                        {title}
                      </span>
                    </Link>
                  </h2>
                  <small className="flex items-center font-thin">
                    {post.frontmatter.date}
                  </small>
                </div>
              </article>
            </li>
          )
        })}
      </ol>
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
        }
      }
    }
  }
`
