import * as React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

// Utils
import getMetadata from "../utils/getMetadata"

// Styled components
const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5px auto 1rem auto;
  max-width: 1150px;

  a {
    text-decoration: none;
    color: ${({ colors }) => colors.tertiary};
    font-weight: 300;
    background-color: ${({ colors }) => colors.primary};
    padding: 0 3px;
    transition: all 0.2s ease-in-out;

    :hover {
      text-decoration: underline;
    }
  }

  small {
    color: ${({ colors }) => colors.secondary};
  }

  header {
    margin-bottom: 1rem;

    h1 {
      display: none;
    }
  }

  p,
  ul,
  ol {
    margin: 0 0 1rem 0;
  }

  table,
  td,
  th {
    border: 1px solid ${({ colors }) => colors.primary};
  }

  td,
  th {
    padding: 10px;
  }

  table {
    border-collapse: collapse;
    margin: 1rem auto;
    padding: 1rem 0;
    border-radius: 4px;
  }

  ol {
    list-style-position: inside;
  }

  ul {
    list-style-position: inside;
  }

  li {
    margin-left: 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 1rem 0;
  }

  img {
    border-radius: 4px;
    box-shadow: ${({ shadow }) =>
      shadow
        ? "rgb(17 17 26 / 10%) 0px 1px 0px, rgb(17 17 26 / 10%) 0px 8px 12px, rgb(17 17 26 / 1%) 0px 16px 28px !important"
        : "none"};
    filter: ${({ grayscale }) => (grayscale ? "grayscale(100%)" : "none")};
  }

  pre,
  code {
    font-family: Menlo, Monaco, "Courier New", monospace;
  }

  pre {
    background-color: ${({ colors }) => colors.secondary};
    font-size: 0.8rem;
    overflow: auto;
    padding: 1.125em;
    border-radius: 4px;
  }

  pre,
  blockquote {
    background-color: ${({ colors }) => colors.secondary};
    page-break-inside: avoid;
    border-radius: 4px;
    padding: 10px;
    margin: 1rem 0;
  }

  blockquote p {
    font-size: 1.5rem;
    font-style: italic;
    margin: 1rem auto 1rem;
    max-width: 48rem;
    font-weight: 100;
  }

  @media screen and (max-width: 768px) {
    blockquote p {
      font-size: 1.2rem;
    }
  }
`

const BlogLayout = ({ children, shadow }) => {
  const { primary, secondary, tertiary, grayscale } =
    getMetadata().site.siteMetadata.colors

  return (
    <Main
      colors={{ primary, secondary, tertiary }}
      grayscale={grayscale}
      shadow={shadow}
    >
      {children}
    </Main>
  )
}

BlogLayout.propTypes = {
  children: PropTypes.node.isRequired,
  shadow: PropTypes.bool,
}

export default BlogLayout
