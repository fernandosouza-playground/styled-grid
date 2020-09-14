import styled, { css } from 'styled-components'
import { Flex } from './flex'

const breakPoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
}
const space = 15
const cols = 12

interface ICol {
  sm?: number
  md?: number
  lg?: number
  xl?: number
}

export const ScreenSize = (sizeAlias: string ,content: string) => css`
  @media screen and (min-width: ${breakPoints[sizeAlias]}px) {
    ${content}
  }
`

export const Container = styled.div`
  max-width: ${breakPoints.md}px;
  padding-right: ${space}px;
  padding-left: ${space}px;
  margin: 0 auto;
  ${Object.values(breakPoints).map((breakPoint) => {
    return `@media screen and (min-width: ${breakPoint}px) {
      max-width: ${breakPoint}px;
    }`
  })}
`

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -${space}px;
  margin-left: -${space}px;
`

export const Col = styled(Flex)<ICol>`
  padding: 0 ${space}px;
  flex-basis: 100%;

  ${css`
    ${Object.keys(breakPoints).map((breakPointKey) => {
      return css`
        ${(props) =>
          props[breakPointKey] &&
          css`
            @media screen and (min-width: ${breakPoints[breakPointKey]}px) {
              flex-basis: ${(props) => 100 / (cols / props[breakPointKey])}%;
            }
          `}
      `
    })}
  `}

  ${Container} {
    padding-left: 0;
    padding-right: 0;
  }
`
