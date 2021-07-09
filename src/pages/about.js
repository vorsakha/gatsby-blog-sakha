import * as React from "react"
import GatsbyImage from "../components/common/GatsbyImage"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = () => {
  //   const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout>
      <Seo title="Sobre" />
      <div className="grid md:grid-cols-3 gap-6 mt-2 mb-4 items-center">
        <div className="md:col-span-2">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo,
            minus nam! Exercitationem vitae minima laudantium expedita quam
            ducimus consectetur eveniet. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Autem eius molestias magnam corporis placeat
            assumenda ab quae excepturi mollitia eveniet ducimus aliquid
            voluptatum debitis, aliquam facilis dolorem cupiditate non saepe! Ex
            vel unde excepturi?
          </p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo,
            minus nam! Exercitationem vitae minima laudantium expedita quam
            ducimus consectetur eveniet.
          </p>
        </div>
        <div>
          <GatsbyImage
            image="jumba"
            alt="Dande"
            rounded="true"
            shadow="true"
            grayscale
          />
        </div>
      </div>
    </Layout>
  )
}

export default BlogIndex
