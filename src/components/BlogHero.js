import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import BgHeroBlog from "./common/BgHeroBlog"

const BgItems = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${({ short }) => (short ? "100vw" : "1150px")};
  width: 100%;
  margin: 0 auto;
  background: transparent;
  color: #fff;
`
const BgItemsChildren = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${({ side }) => (side ? "flex-start" : "center")};
  max-width: 600px;
  min-height: ${({ small, short }) =>
    small ? "200px" : short ? "150px" : "600px"};
  height: ${({ small, short }) =>
    small ? "200px" : short ? "150px" : "calc(100vh - 80px)"};
  max-height: 100%;
  color: #fff;
  line-height: 1;
  width: 100%;
  margin: ${({ side }) => (side ? "0" : "0 auto")};
  padding-left: ${({ side }) => (side ? "1rem" : "0")};
  padding-right: ${({ side }) => (side ? "1rem" : "0")};
  padding-top: ${({ short }) => (short ? "0" : "80px")};

  h1 {
    margin-bottom: 1rem;
    /* font-size: 3rem; */
    /* line-height: 3rem; */
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
    height: ${({ small, short }) =>
      small ? "300px" : short ? "250px" : "calc(100vh - 80px)"};
    min-height: ${({ small, short }) =>
      small ? "300px" : short ? "250px" : "600px"};
  }
`

const Hero = ({
  rounded,
  data,
  small,
  attach,
  side,
  full,
  short,
  margintop,
  grayscale,
  thin,
}) => {
  return (
    <>
      <BgHeroBlog
        attach={attach}
        small={small}
        image={data.image}
        gradient="true"
        hero={margintop}
        side={side}
        full={full}
        rounded={rounded}
        grayscale={grayscale}
      >
        <BgItems side={side}>
          <BgItemsChildren small={small} thin={thin} side={side} short={short}>
            <h1>{data.title}</h1>
          </BgItemsChildren>
        </BgItems>
      </BgHeroBlog>
    </>
  )
}

Hero.propTypes = {
  data: PropTypes.object.isRequired,
  fade: PropTypes.bool,
  svg: PropTypes.bool,
  home: PropTypes.bool,
}

export default Hero
