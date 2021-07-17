import React from "react"
import styled from "styled-components"

// Types
type ProgressBarTypes = {
  thick?: boolean
  regular?: boolean
  colors?: {
    primary: string
    primaryDark: string
  }
  primary?: string
  primaryDark?: string
}

// Styled components
const BarContainer = styled.div`
  position: fixed;
  z-index: 10;
  background: transparent;
  width: 100%;
  top: 0;
  left: 0;
  height: ${(props: ProgressBarTypes) => (props.thick ? "6px" : "3px")};
`
const Bar = styled.div`
  background: ${({ primary, primaryDark, colors }) =>
    colors && `linear-gradient( to left, ${primary}, ${primaryDark})`};
  transform-origin: top left;
  transform: scale(0, 0);
  opacity: 1;
  height: ${(props: ProgressBarTypes) => (props.thick ? "6px" : "3px")};
`

const ProgressBar: React.FC<ProgressBarTypes> = ({
  thick,
  colors,
}): JSX.Element => {
  const [scroll, setScroll] = React.useState<string>("0")

  function handleProgress() {
    const totalScroll = document.documentElement.scrollTop
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
    const scrollNumber = `${totalScroll / windowHeight}`

    setScroll(scrollNumber)
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

export default ProgressBar
