import React from "react"
import styled from "styled-components"
import handleHexToRgba from "../../functions/handleHexToRgba"
import useFilterImage from "../../functions/useFilterImage"
import PropTypes from "prop-types"

// Utils
import getMetadata from "../../functions/getMetadata"

const GradientHero = styled.div`
  margin-top: 0;
  height: 100%;
  min-height: 100%;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  background-attachment: ${({ attach }) => (attach ? "fixed" : "scroll")};
  width: 100% !important;
  border-radius: ${({ rounded }) => (rounded ? "4px" : "0")};

  ::before {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    height: 300px;
    min-height: 300px;
  }
`
const Overlay = styled.div`
  background: ${({ bg }) => bg};
  padding: 1rem 0;
  border-radius: ${({ rounded }) => (rounded ? "4px" : "0")};
  height: 200px;
  min-height: 200px;
  width: 100% !important;
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    height: 300px;
    min-height: 300px;
  }
`

const HeroImageBg = ({ children, attach, image, rounded }) => {
  const { grayscale, primary, secondary } =
    getMetadata().site.siteMetadata.colors

  const toBottomStack = [
    `linear-gradient(
      to bottom,
      ${handleHexToRgba(primary, 0.7)},
      ${handleHexToRgba(secondary, 0.3)})`,
  ]

  const filteredImg = useFilterImage(image, grayscale)

  return (
    <>
      <GradientHero
        attach={attach}
        image={filteredImg && filteredImg.images.fallback.src}
        rounded={rounded}
      >
        <Overlay bg={toBottomStack} rounded={rounded}>
          {children}
        </Overlay>
      </GradientHero>
    </>
  )
}

HeroImageBg.propTypes = {
  children: PropTypes.node.isRequired,
  attach: PropTypes.bool,
  image: PropTypes.string,
  rounded: PropTypes.bool,
}

export default HeroImageBg
