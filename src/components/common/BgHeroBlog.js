import React from "react"
// import { Helmet } from "react-helmet";
import styled from "styled-components"
import handleHexToRgba from "../../functions/handleHexToRgba"
import useFilterImage from "../../functions/useFilterImage"

const GradientHero = styled.div`
  margin-top: ${({ hero }) => (hero ? "-80px" : "0")};
  height: ${({ small, full }) =>
    small ? "100%" : full ? "100vh" : "calc(100vh - 80px)"};
  min-height: ${({ small }) => (small ? "100%" : "600px")};
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  background-attachment: ${({ attach }) => (attach ? "fixed" : "scroll")};
  width: 100% !important;
  border-radius: ${({ rounded }) => (rounded ? "4px" : "0")};

  ::before {
    width: 100%;
  }

  /* div {
    max-height: 100%;
    width: 100%;
  } */

  @media screen and (min-width: 768px) {
    height: ${({ small, full }) =>
      small ? "300px" : full ? "100vh" : "calc(100vh - 80px)"};
    min-height: ${({ small }) => (small ? "300px" : "600px")};
  }
`
const Overlay = styled.div`
  background: ${({ bg }) => bg};
  padding: ${({ hero }) => (hero ? "0" : "1rem 0")};
  border-radius: ${({ rounded }) => (rounded ? "4px" : "0")};
  /* margin-top: -80px; */
  height: ${({ small, full }) =>
    small ? "200px" : full ? "100vh" : "calc(100vh - 80px)"};
  min-height: ${({ small }) => (small ? "200px" : "600px")};
  width: 100% !important;

  @media screen and (min-width: 768px) {
    height: ${({ small, full }) =>
      small ? "300px" : full ? "100vh" : "calc(100vh - 80px)"};
    min-height: ${({ small }) => (small ? "300px" : "600px")};
  }
`

const HeroImageBg = ({
  children,
  small,
  full,
  attach,
  side,
  image,
  id,
  hero,
  rounded,
  grayscale,
}) => {
  const toBottomStack = [
    `linear-gradient(
      to bottom,
      ${handleHexToRgba("#333", 0.7)},
      ${handleHexToRgba("#6B7280", 0.3)})`,
  ]

  const toSideStack = [
    `linear-gradient(
      to right,
      ${handleHexToRgba("#333", 0.7)},
      ${handleHexToRgba("#6B7280", 0.3)})`,
  ]

  const filteredImg = useFilterImage(image, grayscale)

  return (
    <>
      {/* <Helmet>
        <link rel="preload" as="image" href={heroImage} />
      </Helmet> */}

      <GradientHero
        small={small}
        full={full}
        attach={attach}
        image={filteredImg && filteredImg.images.fallback.src}
        id={id}
        hero={hero}
        rounded={rounded}
      >
        <Overlay
          small={small}
          full={full}
          bg={side ? toSideStack : toBottomStack}
          side={side}
          hero={hero}
          rounded={rounded}
        >
          {children}
        </Overlay>
      </GradientHero>
    </>
  )
}

export default HeroImageBg
