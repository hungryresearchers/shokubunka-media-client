// @flow
import React from 'react'
import styled from 'styled-components'
import TOP_THUMB_OUTLINE from '../../images/article-thumb-outline.png'
import MOBILE_HEADER_TOP_THUMB_OUTLINE from '../../images/mobile-header-article-thumb-outline.png'
import { COLORS } from '../../styles/colors'

const { MILK } = COLORS

type Props = {|
  +thumbUrl: string,
  +header?: boolean,
|}

export const ArticleThumbnail = ({ thumbUrl, header }: Props) => (
  <Container thumbUrl={thumbUrl}>
    <ThumbFilter
      header={header}
    >
      <ThumbOutline
        header={header}
      />
    </ThumbFilter>
  </Container>
)

const Container = styled.div`
  width: 100%;
  background-image: url(${props => props.thumbUrl});
  background-size: cover;
  background-color: ${MILK};
`

const ThumbFilter = styled.div`
  ${({ header }) => header &&
    `
     background-color: rgba(0, 0, 0, 0.52);
    `
}
`

const ThumbOutline = styled.img.attrs({
  src: props => props.header ? MOBILE_HEADER_TOP_THUMB_OUTLINE : TOP_THUMB_OUTLINE
})`
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: trasparent;
  ${props => props.header &&
  `
    height: 283px;
    width: 100%;
  `} 
`
