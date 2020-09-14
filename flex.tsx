import styled, { css } from 'styled-components'

interface IFlex {
  justifyContent: string
  alignItems: string
  flexDirection: string
}

export const Flex = styled.div<IFlex>`
  ${({ justifyContent, alignItems, flexDirection }) => css`
    ${(justifyContent || flexDirection || alignItems) && 'display: flex'};
  `}

  ${({ justifyContent }) => css`
    justify-content: ${justifyContent};
  `}

  ${({ alignItems }) => css`
    align-items: ${alignItems};
  `}

  ${({ flexDirection }) => css`
    flex-direction: ${flexDirection};
  `}
`