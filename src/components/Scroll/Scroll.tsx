import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { BsArrowUp } from "@react-icons/all-files/bs/BsArrowUp"

// Components
import Tooltip from "./Tooltip"

// Utils
import getMetadata from "../../utils/getMetadata"
import handleHexToRgba from "../../utils/handleHexToRgba"

// Types
type ScrollButtonTypes = {
  rounded?: boolean
  data: { message: string }
  msg?: boolean
}
type ScrollButtonStyledTypes = {
  rounded?: boolean
  colors: {
    primary?: string
    secondary?: string
    tertiary?: string
  }
  scrolled?: boolean
}
type MetadataColorsTypes = {
  primary?: string
  secondary?: string
  tertiary?: string
}

// Styled components
const Button = styled.button`
  display: ${(props: ScrollButtonStyledTypes) =>
    props.scrolled ? "flex" : "none"};
  z-index: 12;
  position: fixed;
  bottom: 7.3vh;
  right: 4.3vh;
  height: 30px;
  width: 30px;
  cursor: pointer;
  background: ${({ colors }) => colors.primary};
  border: none;
  border-radius: ${({ rounded }) => (rounded ? "50%" : "none")};
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 3px 3px
    ${props => handleHexToRgba(props.colors.primary, 0.2)};
  transition: background 0.2s ease;

  // Transition group
  .transition-enter {
    opacity: 0.01;
    transform: translate(0, -10px);
  }
  .transition-enter-active {
    opacity: 1;
    transform: translate(0, 0);
    transition: opacity 300ms ease-in, transform 300ms ease-in;
  }
  .transition-exit {
    opacity: 1;
    transform: translate(0, 0);
  }
  .transition-exit-active {
    opacity: 0.01;
    transform: translate(0, 10px);
    transition: opacity 300ms ease-in, transform 300ms ease-in;
  }
  //

  svg {
    color: ${({ colors }) => colors.tertiary};
  }

  :hover {
    background: ${({ colors }) => colors.secondary};
    color: ${({ colors }) => colors.primary};
  }

  @media screen and (min-width: 768px) {
    right: 8.2vh;
    height: 30px;
    width: 30px;
  }
`
const Arrow = styled(BsArrowUp)`
  font-size: 1.5rem;
  color: ${(props: ScrollButtonStyledTypes) => props.colors.tertiary};
`

const ScrollButton: React.FC<ScrollButtonTypes> = ({
  rounded,
  data,
  msg,
}): JSX.Element => {
  const [scrolled, setScrolled] = useState<boolean>(false)
  const [tooltip, setTooltip] = React.useState<boolean>(true)

  const { primary, secondary, tertiary }: MetadataColorsTypes =
    getMetadata().site.siteMetadata.colors

  function scrollToTop() {
    window.scrollTo(0, 0)
  }

  function handleScroll() {
    if (window.scrollY >= 200) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  React.useEffect(() => {
    // Deactivate Tooltip after 10s
    if (msg) {
      setTimeout(() => {
        setTooltip(false)
        // setIsOpen(false);
      }, 5000)
    } else {
      setTooltip(false)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return function cleanup() {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <Button
      onMouseEnter={() => setTooltip(true)}
      onMouseLeave={() => setTooltip(false)}
      rounded={rounded}
      scrolled={scrolled}
      onClick={scrollToTop}
      aria-label={data.message}
      colors={{ primary, tertiary, secondary }}
    >
      <Arrow colors={{ tertiary }} />
      {tooltip && (
        <Tooltip colors={{ primary, tertiary }} rounded={rounded}>
          {data.message}
        </Tooltip>
      )}
    </Button>
  )
}

export default ScrollButton
