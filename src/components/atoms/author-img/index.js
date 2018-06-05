// @flow
import React from 'react'
import styled from 'styled-components'

type Props = {|
  +imgUrl: string,
  imgSize?: string,
|}

export const AuthorImg = ({ imgUrl, imgSize }: Props) => (
  <Img
    className='rounded-circle'
    imgUrl={imgUrl}
    imgSize={imgSize}
  />
)

const Img = styled.img.attrs({
  src: props => props.imgUrl
})`
  width: ${props => props.imgSize ? props.imgSize : '1.6em'};
  height: ${props => props.imgSize ? props.imgSize : '1.6em'};
`
