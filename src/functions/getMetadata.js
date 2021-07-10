import { graphql, useStaticQuery } from "gatsby"

export default function useMetadata() {
  const query = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author {
            name
            picture
            alt
          }
          socials {
            instagram
            facebook
            twitter
            linkedin
            twitch
            dev
          }
          colors {
            primary
            secondary
            tertiary
            grayscale
          }
        }
      }
    }
  `)
  return query
}
