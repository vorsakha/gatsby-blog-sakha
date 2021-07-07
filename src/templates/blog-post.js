import * as React from "react"
import { Link, graphql } from "gatsby"

import {
  BlogHero as Hero,
  Layout as ThemeLayout,
  Seo,
  ProgressBar,
} from "@tsaristbomba/gatsby-theme-bomba"
import BlogLayout from "../components/blogLayout"
import Layout from "../components/layout"

const BlogPostTemplate = ({ data, location }) => {
  const [queryImg, setQuery] = React.useState()

  // Progress bar
  const colors = { primary: "#6B7280", primaryDark: "#333" }
  //

  const post = data.markdownRemark
  // const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  React.useEffect(() => {
    const postImage = post.frontmatter.image

    const newImage = postImage !== null ? postImage.substr(13) : "default"

    setQuery(newImage)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Layout>
      <ProgressBar regular colors={colors} />
      <ThemeLayout light sticky rounded="true" progress nonav nofooter>
        <Seo
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <div className="font-encode shadow-xl">
          <Hero
            data={{
              //   topTitle: "Its Easy!",
              title: post.frontmatter.title,
              image: queryImg,
            }}
            // full={!svgImgs}
            bg
            grayscale
            thin="true"
            // svg={svgImgs}
            center
            small
            rounded="true"
            short
            // shadow="true"
            //   anchor={hero.anchor}
          />
        </div>

        <BlogLayout shadow="true">
          {/* <small style={{ fontWeight: "400" }}>
            <Link to="/">← Home</Link>
          </small> */}
          <article>
            <header>
              <h1 itemProp="headline">{post.frontmatter.title}</h1>
              <small className="text-gray-500 text-xs">
                {post.frontmatter.date}
              </small>
            </header>
            <section
              dangerouslySetInnerHTML={{ __html: post.html }}
              itemProp="articleBody"
            />
            <hr />
          </article>
          <nav className="blog-post-nav">
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <Link to={`/blog${previous.fields.slug}`} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={`/blog${next.fields.slug}`} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </BlogLayout>
      </ThemeLayout>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY", locale: "pt-br")
        description
        image
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
