import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import BgHeroBlog from "./common/BgHeroBlog"

// Utils
import getMetadata from "../functions/getMetadata"

const BgItems = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  background: transparent;
  color: #fff;
`
const BgItemsChildren = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
  height: 100%;
  max-height: 100%;
  color: #fff;
  line-height: 1;
  width: 100%;
  margin: 0 auto;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;

  h1 {
    width: 100%;
    text-transform: uppercase;
    font-weight: ${({ thin }) => (thin ? "300" : " bold")};
    text-align: center;
  }

  p {
    margin-bottom: 1rem;
    color: #fff;
  }

  @media screen and (min-width: 768px) {
    height: 250px;
    min-height: 250px;
  }
`

const Hero = ({ rounded, data, attach, thin }) => {
  const { grayscale } = getMetadata().site.siteMetadata.colors

  return (
    <>
      <BgHeroBlog
        attach={attach}
        image={data.image}
        rounded={rounded}
        grayscale={grayscale}
      >
        <BgItems>
          <BgItemsChildren thin={thin}>
            <h1>{data.title}</h1>
          </BgItemsChildren>
        </BgItems>
      </BgHeroBlog>
    </>
  )
}

Hero.propTypes = {
  rounded: PropTypes.bool,
  data: PropTypes.object,
  attach: PropTypes.bool,
  thin: PropTypes.bool,
}

export default Hero
