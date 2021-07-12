import * as React from "react"
import { Link, graphql } from "gatsby"
import Masonry from "react-masonry-css"
import { RiZzzFill as SleepIcon } from "@react-icons/all-files/ri/RiZzzFill"

// Components
import ImageComponent from "../components/common/ImageComponent"
import Seo from "../components/seo"
import Layout from "../components/layout"

// Utils
import getMetadata from "../utils/getMetadata"
import filterImageString from "../utils/filterImageString"

const BlogIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes
  const { primary, secondary } = getMetadata().site.siteMetadata.colors
  const { title } = getMetadata().site.siteMetadata

  // Pagination
  const [items, setItems] = React.useState(5)
  const getMoreItems = () => {
    setItems(items + 6)
  }
  const getLessItems = () => {
    setItems(5)
  }

  // No blog posts
  if (posts.length === 0) {
    return (
      <Layout>
        <Seo title={title} />
        <div className="flex flex-row items-center">
          <SleepIcon className="mr-2 text-2xl" />
          <span> No blog posts yet.</span>
        </div>
      </Layout>
    )
  }

  // Masonry options
  const masonryBreakpoints = {
    default: 3,
    768: 2,
    480: 1,
  }

  return (
    <Layout scroll>
      <Seo title={title} />
      <div>
        <Masonry
          breakpointCols={masonryBreakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {posts.map((post, key) => {
            const title = post.frontmatter.title || post.fields.slug

            if (key <= items) {
              return (
                <div key={post.fields.slug} className={`mb-6`}>
                  <article
                    className="post-list-item"
                    itemScope
                    itemType="http://schema.org/Article"
                  >
                    <header>
                      <h2 className="font-thin">
                        <Link
                          className="text-xl font-semibold cursor-pointer hover:underline transition-colors ease-in-out"
                          to={`/blog${post.fields.slug}`}
                          style={{ color: secondary }}
                          itemProp="url"
                        >
                          <ImageComponent
                            image={filterImageString(post.frontmatter.image)}
                            rounded
                            grayscale
                            shadow
                            hover
                            alt={title}
                          />
                          <span
                            className="mt-2 font-encode font-light text-xl hover:underline"
                            itemProp="headline"
                            style={{ color: primary }}
                          >
                            {title}
                          </span>
                        </Link>
                      </h2>
                      <small className="text-xs" style={{ color: secondary }}>
                        {post.frontmatter.date} &bull; {post.timeToRead} min.
                      </small>
                    </header>
                    <section>
                      <p
                        className="font-light"
                        style={{ color: secondary }}
                        dangerouslySetInnerHTML={{
                          __html: post.frontmatter.description || post.excerpt,
                        }}
                        itemProp="description"
                      />
                    </section>
                  </article>
                </div>
              )
            } else {
              return ""
            }
          })}
        </Masonry>
      </div>
      <div className="flex justify-center mt-4">
        {posts.length > items ? (
          <button
            className="hover:underline font-encode font-light"
            onClick={() => getMoreItems()}
            style={{ color: primary }}
          >
            SHOW MORE
          </button>
        ) : (
          ""
        )}
        {items > 5 ? (
          <button
            className="hover:underline ml-4 font-encode font-light"
            onClick={() => getLessItems()}
            style={{ color: primary }}
          >
            SHOW LESS
          </button>
        ) : (
          ""
        )}
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
        timeToRead
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
