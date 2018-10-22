// @flow
import React from 'react'
import styled from 'styled-components'
import { AuthorImg } from '../../atoms/author-img'
import { WriterName } from '../../atoms/writer-name'
import { media } from '../../../utils/styles'

export type Props = {|
  +name: string,
  +imgUrl: string,
  +imgSize?: string,
  +fontSize?: string,
  color?: string,
  mobileImgSize?: string,
  mobileFontSize?: string,
  between?: string,
  mobileBetween?: string
|}

export const WriterInfo = ({ name, imgUrl, imgSize, fontSize, color, mobileFontSize, mobileImgSize, between, mobileBetween }: Props) => (
  <Container
    className='d-flex align-items-center'
  >
    <ImageContainer className='d-inline-block' between={between} mobileBetween={mobileBetween} >
      <AuthorImg
        imgUrl={imgUrl}
        imgSize={imgSize}
        mobileImgSize={mobileImgSize}
      />
    </ImageContainer>
    <NameContainer className='d-inline-block' >
      <WriterName
        name={name}
        fontSize={fontSize}
        color={color}
        mobileFontSize={mobileFontSize}
      />
    </NameContainer>
  </Container>
)

const Container = styled.div``

const ImageContainer = styled.div`
  padding-right: ${props => props.between || '10.5px'};

  @media ${media.small} {
    padding-right: ${props => props.mobileBetween || '4.5px'};
  }
`

const NameContainer = styled.div``
