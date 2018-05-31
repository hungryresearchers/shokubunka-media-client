// @flow
import React from 'react'
import styled from 'styled-components'

type Props = {|
  +imgUrl: string,
  +imgWidth: string,
  +imgHeight?: string,
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
`
