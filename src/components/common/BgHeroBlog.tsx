import React from "react"
import styled from "styled-components"

// Utils
import getMetadata from "../../utils/getMetadata"
import handleHexToRgba from "../../utils/handleHexToRgba"
import useFilterImage from "../../utils/useFilterImage"

// Types
type HeroImageBgTypes = {
  attach?: boolean
  image: string
  rounded?: boolean
}

type HeroImageStyledTypes = {
  rounded?: boolean
  bg?: string[]
  attach?: boolean
}
// Styled components
const GradientHero = styled.div`
  margin-top: 0;
  height: 100%;
  min-height: 100%;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  background-attachment: ${(props: HeroImageBgTypes) =>
    props.attach ? "fixed" : "scroll"};
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
  background: ${(props: HeroImageStyledTypes) => props.bg};
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

const HeroImageBg: React.FC<HeroImageBgTypes> = ({
  children,
  attach,
  image,
  rounded,
}): JSX.Element => {
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

export default HeroImageBg
