// @flow
import React from 'react'
import styled from 'styled-components'
import { media } from '../../../utils/styles'

type Props = {|
  +imgUrl: string,
  +imgWidth: string,
  +imgHeight?: string,
  mobileHeight?: string,
  mobileWidth?: string,
|}

export const RectangleImg = (props: Props) => (
  <Img
    {...props}
  />
)

const Img = styled.img.attrs({
  src: props => props.imgUrl
})`
  width: ${props => props.imgWidth && props.imgWidth};
  height: ${props => props.imgHeight && props.imgHeight};

  @media ${media.small} {
    ${props => props.mobileWidth && `width: ${props.mobileWidth}`};
    ${props => props.mobileHeight && `height: ${props.mobileHeight}`};
  }
`
