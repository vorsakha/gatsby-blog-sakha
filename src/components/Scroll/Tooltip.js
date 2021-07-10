import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const TooltipWrapper = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    z-index: 12;
    position: fixed;
    /* bottom: 7vh; */
    opacity: 1;
    right: 13.8vh;
    background: ${({ colors }) => colors.primary};
    color: ${({ colors }) => colors.tertiary};
    padding: 0 10px;
    display: inline-flex;
    max-width: 150px;
    transition: 0.2s opacity ease;
    font-size: 12px;
    border-radius: ${({ rounded }) => (rounded ? "4px" : "0")};
    animation: 0.3s fade;

    /* To the right of the tooltip */
    ::after {
      content: " ";
      position: absolute;
      top: 50%;
      left: 100%;
      margin-top: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: transparent transparent transparent
        ${({ colors }) => colors.primary};
    }
  }
`

const Tooltip = ({ children, rounded, colors }) => {
  return (
    <TooltipWrapper colors={colors} rounded={rounded}>
      {children}
    </TooltipWrapper>
  )
}

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  colors: PropTypes.object,
  rounded: PropTypes.bool,
}

export default Tooltip
