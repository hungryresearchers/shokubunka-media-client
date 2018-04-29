// @flow
import React from 'react'
import styled from 'styled-components'
import TOP_THUMB_OUTLINE from '../../images/article-thumb-outline.png'
import { COLORS } from '../../styles/colors'

const { MILK } = COLORS

type Props = {|
  +thumbUrl: string,
|}

export const ArticleThumbnail = ({ thumbUrl }: Props) => (
  <Container thumbUrl={thumbUrl}>
    <ThumbOutline />
  </Container>
)

const Container = styled.div`
  width: 100%;
  background-size: contain;
  background-image: url(${props => props.thumbUrl});
  background-size: cover;
  background-color: ${MILK};
`

const ThumbOutline = styled.img.attrs({
  src: TOP_THUMB_OUTLINE
})`
  width: 100%;
  height: 100%;
  background-color: transparent;
`
