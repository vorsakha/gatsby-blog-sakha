import React from "react"
import styled from "styled-components"

// Components
import BgHeroBlog from "./common/BgHeroBlog"

// Types
type HeroTypes = {
  rounded?: boolean
  data?: {
    image: string
    title: string
  }
  attach?: boolean
  thin?: boolean
}

// Styled components
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
    font-weight: ${(props: HeroTypes) => (props.thin ? "300" : " bold")};
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

const Hero: React.FC<HeroTypes> = ({
  rounded,
  data,
  attach,
  thin,
}): JSX.Element => {
  return (
    <>
      <BgHeroBlog attach={attach} image={data.image} rounded={rounded}>
        <BgItems>
          <BgItemsChildren thin={thin}>
            <h1>{data.title}</h1>
          </BgItemsChildren>
        </BgItems>
      </BgHeroBlog>
    </>
  )
}

export default Hero
