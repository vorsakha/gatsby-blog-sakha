import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

// Styled components
const BarContainer = styled.div`
  position: fixed;
  z-index: 10;
  background: transparent;
  width: 100%;
  top: 0;
  left: 0;
  height: ${({ thick }) => (thick ? "6px" : "3px")};
`
const Bar = styled.div`
  background: ${({ colors }) =>
    colors &&
    `linear-gradient(
    to left,
    ${colors.primary},
    ${colors.primaryDark}
  )`};
  transform-origin: top left;
  transform: scale(0, 0);
  opacity: 1;
  height: ${({ thick }) => (thick ? "6px" : "3px")};
`

const ProgressBar = ({ thick, colors }) => {
  const [scroll, setScroll] = React.useState(0)

  function handleProgress() {
    const totalScroll = document.documentElement.scrollTop
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
    const scroll = `${totalScroll / windowHeight}`

    setScroll(scroll)
  }

  React.useEffect(() => {
    window.addEventListener("scroll", handleProgress)

    return () => window.removeEventListener("scroll", handleProgress)
  })

  return (
    <BarContainer thick={thick}>
      <Bar
        thick={thick}
        style={{ transform: `scale(${scroll}, 1)` }}
        colors={colors}
      />
    </BarContainer>
  )
}

ProgressBar.propTypes = {
  thick: PropTypes.bool,
  regular: PropTypes.bool,
  colors: PropTypes.object,
}

export default ProgressBar
