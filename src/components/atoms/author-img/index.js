// @flow
import React from 'react'
import styled from 'styled-components'
import { media } from '../../../utils/styles'

type Props = {|
  +imgUrl: string,
  imgSize?: string,
  mobileImgSize?: string
|}

export const AuthorImg = ({ imgUrl, imgSize, mobileImgSize }: Props) => {
  if (!imgUrl) {
    return null
  }

  return (
    <Img
      className='rounded-circle'
      imgUrl={imgUrl}
      imgSize={imgSize}
      mobileImgSize={mobileImgSize}
    />
  )
}


const Img = styled.img.attrs({
  src: props => props.imgUrl
})`
  width: ${props => props.imgSize ? props.imgSize : '1.6em'};
  height: ${props => props.imgSize ? props.imgSize : '1.6em'};

  ${props => props.mobileImgSize && `
    @media ${media.small} {
      width: ${props.mobileImgSize};
      height: ${props.mobileImgSize};
    }
  `}
`
