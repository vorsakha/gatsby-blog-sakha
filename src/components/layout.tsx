import React from "react"
import { Link } from "gatsby"

// Components
import ScrollButton from "./Scroll/Scroll"
import ProgressBar from "./ProgressBar"

// Utils
import getMetadata from "../utils/getMetadata"
import getSocials from "../utils/getSocials"

// scroll
// progress

// Types
type LayoutTypes = {
  scroll?: boolean
  progress?: boolean
}

const Layout: React.FC<LayoutTypes> = (props): JSX.Element => {
  const year = new Date().getFullYear()

  const { title, description, author } = getMetadata().site.siteMetadata

  // Progress bar
  const { primary, secondary } = getMetadata().site.siteMetadata.colors
  const colors = { primary: secondary, primaryDark: primary }
  //

  const { socials } = getMetadata().site.siteMetadata

  // Get socials
  const socialsJsx = getSocials(socials)

  return (
    <div
      className="m-auto p-6 pt-0 bg-white font-sans"
      style={{ maxWidth: "1000px" }}
    >
      <nav className="flex flex-col m-auto w-full py-4 mt-8 mb-4">
        <div className="p-4 px-4 pl-0">
          <Link
            className="font-encode flex flex-row w-full items-center text-light text-4xl md:text-6xl"
            to="/"
            style={{ color: primary }}
          >
            {title}
          </Link>
          <p
            className="font-thin text-md md:text-xl"
            style={{ color: secondary }}
          >
            {description}
          </p>
        </div>

        <ul className="flex flex-row ml-auto items-center fix-height">
          <li>
            <Link
              className="font-encode font-light p-4 px-4 text-md transition-colors ease-in-out hover:underline"
              to="/"
              activeClassName="underline"
              style={{ color: secondary }}
              activeStyle={{ color: primary }}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              className="font-encode font-light p-4 px-4 text-md transition-colors ease-in-out hover:underline"
              to="/archive"
              activeClassName="underline"
              style={{ color: secondary }}
              activeStyle={{ color: primary }}
            >
              ARCHIVE
            </Link>
          </li>
          <li>
            <Link
              className="font-encode font-light p-4 px-4 pr-0 text-md transition-colors ease-in-out hover:underline"
              to="/about"
              activeClassName="underline"
              style={{ color: secondary }}
              activeStyle={{ color: primary }}
            >
              ABOUT
            </Link>
          </li>
        </ul>
      </nav>
      {props.scroll && (
        <ScrollButton
          data={{
            message: "To the top",
          }}
          msg={false}
          rounded
        />
      )}
      {props.progress && <ProgressBar colors={colors} />}
      <div
        style={{ minHeight: "calc(100vh - 180px - 57px - 32px - 16px - 24px)" }}
      >
        {props.children}
      </div>

      <footer
        className="flex flex-row items-center justify-between m-auto border-t border-gray-300 mt-4"
        style={{ color: primary }}
      >
        <div className="flex flex-row">
          {socialsJsx !== undefined && socialsJsx.map(item => item)}
        </div>
        <p className="text-xs" style={{ color: secondary }}>
          &copy;{year} {author.name}. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default Layout
