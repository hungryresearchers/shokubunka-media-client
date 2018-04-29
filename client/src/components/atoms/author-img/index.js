// @flow
import React from 'react'
import styled from 'styled-components'

type Props = {|
  +imgUrl: string,
|}

export const AuthorImg = ({ imgUrl }: Props) => (
  <Img
    className='rounded-circle'
    imgUrl={imgUrl}
  />
)

const Img = styled.img.attrs({
  src: props => props.imgUrl
})`
  width: 1.6em;
  height: 1.6em;
`
