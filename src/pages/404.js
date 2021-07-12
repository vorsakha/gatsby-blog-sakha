import React from "react"
import { RiBugLine as ErrorIcon } from "@react-icons/all-files/ri/RiBugLine"

// Components
import Seo from "../components/seo"
import Layout from "../components/layout"

const ErrorPage = () => {
  return (
    <Layout>
      <Seo title="Error" />
      <div className="flex flex-row items-center">
        <ErrorIcon className="mr-2 text-2xl" />
        <span> 404 Error, Page not found.</span>
      </div>
    </Layout>
  )
}

export default ErrorPage
