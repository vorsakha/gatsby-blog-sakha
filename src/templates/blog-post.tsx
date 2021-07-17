import * as React from "react"
import { Link, graphql } from "gatsby"

// Components
import BlogLayout from "../components/blogLayout"
import Layout from "../components/layout"
import Seo from "../components/seo"
import BlogHero from "../components/BlogHero"

// Utils
import kebabCase from "lodash/kebabCase"

// Types
type BlogPostTypes = {
  data: {
    previous: {
      fields: {
        slug: string
      }
      frontmatter: {
        title: string
      }
    }
    next: {
      fields: {
        slug: string
      }
      frontmatter: {
        title: string
      }
    }
    markdownRemark: {
      id: string
      excerpt: string
      html: string
      timeToRead: number
      frontmatter: {
        title: string
        date: string
        description: string
        image: string
        tags: string[]
      }
    }
  }
}

const BlogPostTemplate: React.FC<BlogPostTypes> = ({ data }): JSX.Element => {
  const [queryImg, setQuery] = React.useState<string>("")

  const post = data.markdownRemark
  const { previous, next } = data

  React.useEffect(() => {
    const postImage = post.frontmatter.image

    const newImage = postImage !== null ? postImage.substr(13) : "default"

    setQuery(newImage)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Layout scroll progress>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div className="font-encode shadow-xl text-2xl md:text-6xl">
        <BlogHero
          data={{
            title: post.frontmatter.title,
            image: queryImg,
          }}
          thin
          rounded
          //attach
        />
      </div>

      <BlogLayout shadow>
        <article>
          <header>
            <h1 itemProp="headline">{post.frontmatter.title}</h1>
            <small className="text-xs">
              {post.frontmatter.date} &bull; {post.timeToRead}{" "}
              {post.timeToRead === 1 ? " minute " : " minutes "}read. &bull;
              tags:
              {post.frontmatter.tags.map(tag => (
                <Link className="ml-2" to={`/tags/${kebabCase(tag)}`}>
                  {tag}
                </Link>
              ))}
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
      timeToRead
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY", locale: "pt-br")
        description
        image
        tags
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
