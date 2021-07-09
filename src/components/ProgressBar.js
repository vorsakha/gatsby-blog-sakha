import React from "react"
import styled from "styled-components"

const BarContainer = styled.div`
  position: fixed;
  z-index: 10;
  background: transparent;
  width: 100%;
  top: ${({ regular }) => (regular ? "0" : "70px")};
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

const ProgressBar = ({ thick, regular, colors }) => {
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
    <BarContainer regular={regular} thick={thick}>
      <Bar
        thick={thick}
        style={{ transform: `scale(${scroll}, 1)` }}
        colors={colors}
      />
    </BarContainer>
  )
}

export default ProgressBar
