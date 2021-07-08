import React from "react"
import { Link } from "gatsby"
import { AiFillInstagram as InstagramIcon } from "@react-icons/all-files/ai/AiFillInstagram"
import { FaFacebookSquare as FacebookIcon } from "@react-icons/all-files/fa/FaFacebookSquare"

const Layout = props => {
  const year = new Date().getFullYear()

  return (
    <div
      className="m-auto p-6 pt-0 bg-white font-sans"
      style={{ maxWidth: "1000px" }}
    >
      <nav className="flex flex-col m-auto w-full py-4 mt-8 mb-4">
        <div className="p-4 px-4 pl-0">
          <Link
            className="font-encode text-gray-900 flex flex-row w-full items-center text-3xl md:text-6xl font-bold"
            to="/"
          >
            Dande Steel Smith
          </Link>
          <p className="text-gray-400 font-thin text-md md:text-xl">
            Lastima / Mau aluno / Xinga a mãe
          </p>
        </div>

        <ul className="flex flex-row ml-auto items-center fix-height">
          <li>
            <Link
              className="font-encode font-light text-gray-400 p-4 px-4 hover:text-gray-900 text-md transition-colors ease-in-out"
              to="/"
              activeClassName="text-gray-900"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              className="font-encode font-light text-gray-400 p-4 px-4 hover:text-gray-900 text-md transition-colors ease-in-out"
              to="/archive"
              activeClassName="text-gray-900"
            >
              ARQUIVO
            </Link>
          </li>
          <li>
            <Link
              className="font-encode font-light text-gray-400 p-4 px-4 pr-0 hover:text-gray-900 text-md transition-colors ease-in-out"
              to="/about"
              activeClassName="text-gray-900"
            >
              SOBRE
            </Link>
          </li>
        </ul>
      </nav>
      <div
        style={{ minHeight: "calc(100vh - 180px - 57px - 32px - 16px - 24px)" }}
      >
        {props.children}
      </div>

      <footer className="flex flex-row items-center justify-between m-auto border-t border-gray-300">
        <div className="flex flex-row">
          <Link
            className="text-gray-400 p-4 px-4 pl-0 text-2xl font-bold hover:text-gray-900"
            to="/"
          >
            <InstagramIcon />
          </Link>
          <Link
            className="text-gray-400 p-4 px-4 pl-0 text-xl mt-0.5 font-bold hover:text-gray-900"
            to="/"
          >
            <FacebookIcon />
          </Link>
        </div>
        <p className="text-gray-500 text-xs">
          &copy;{year} Brand. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default Layout
