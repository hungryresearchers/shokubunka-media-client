// @flow
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FONT_FAMILY } from '../../styles/font-family.css'
import { COLORS } from '../../styles/colors'
import { media } from '../../../utils/styles'

const { YUGOTHIC, TOPPANBUNKYU } = FONT_FAMILY
const { GRAY } = COLORS

type Props = {|
  +title: string,
  +id: string,
  color?: string,
  textStyle?: Object,
  header?: boolean
|}

export const ArticleTitle = ({ title, id, color, textStyle, header }: Props) => {
  const ContainerElm = header ? `div` : Container
  return (
    <ContainerElm to={`/article/${id}`} header={header ? 1 : 0} >
      <Text
        color={color}
        style={textStyle}
      >
        { title }
      </Text>
    </ContainerElm>
  )
}

const Container = styled(Link)`
  text-align: left;

  &:hover {
  ${props => props._header ? `
      text-decoration: none;
  ` : `
      text-decoration: underline;
      text-decoration-color: ${GRAY};
  `}
  }
`

const Text = styled.h2`
  ${YUGOTHIC}
  font-size: 1.4em;
  font-weight: bold;
  letter-spacing: 0.04em;
  line-height: 1.3em;
  color: ${props => props.color || GRAY};

  @media ${media.small} {
    ${TOPPANBUNKYU}
    font-weight: 800;
    font-size: 0.85em;
    margin-bottom: 0;
  }
`
