import React from "react"

// Icons
import { AiFillInstagram as InstagramIcon } from "@react-icons/all-files/ai/AiFillInstagram"
import { FaFacebookSquare as FacebookIcon } from "@react-icons/all-files/fa/FaFacebookSquare"
import { FaTwitterSquare as TwitterIcon } from "@react-icons/all-files/fa/FaTwitterSquare"
import { FaLinkedin as LinkedinIcon } from "@react-icons/all-files/fa/FaLinkedin"
import { FaTwitch as TwitchIcon } from "@react-icons/all-files/fa/FaTwitch"
import { SiDevDotTo as DevIcon } from "@react-icons/all-files/si/SiDevDotTo"

const getSocials = object => {
  const arr = Object.entries(object)
  const socials = []
  const jsx = []

  arr.forEach(item => {
    if (item[1] !== "") {
      socials.unshift(item)
    }
  })

  socials.forEach(item => {
    switch (item[0]) {
      case "instagram":
        jsx.unshift(
          <a
            className="p-4 px-4 pl-0 text-2xl font-bold hover:opacity-90"
            href={item[1]}
            target="__blank"
            name="Instagram"
          >
            <InstagramIcon className="-mt-0.5" />
          </a>
        )
        break
      case "facebook":
        jsx.unshift(
          <a
            className="p-4 px-4 pl-0 text-xl font-bold hover:opacity-90"
            href={item[1]}
            target="__blank"
            name="Facebook"
          >
            <FacebookIcon />
          </a>
        )
        break
      case "twitter":
        jsx.unshift(
          <a
            className="p-4 px-4 pl-0 text-xl font-bold hover:opacity-90"
            href={item[1]}
            target="__blank"
            name="Twitter"
          >
            <TwitterIcon />
          </a>
        )
        break
      case "linkedin":
        jsx.unshift(
          <a
            className="p-4 px-4 pl-0 text-xl font-bold hover:opacity-90"
            href={item[1]}
            target="__blank"
            name="LinkedIn"
          >
            <LinkedinIcon />
          </a>
        )
        break
      case "twitch":
        jsx.unshift(
          <a
            className="p-4 px-4 pl-0 text-xl font-bold hover:opacity-90"
            href={item[1]}
            target="__blank"
            name="Twitch"
          >
            <TwitchIcon />
          </a>
        )
        break
      case "dev":
        jsx.unshift(
          <a
            className="p-4 px-4 pl-0 text-2xl font-bold hover:opacity-90"
            href={item[1]}
            target="__blank"
            name="Dev.to"
          >
            <DevIcon className="-mt-0.5" />
          </a>
        )
        break
      default:
        break
    }
  })

  return jsx
}

export default getSocials
