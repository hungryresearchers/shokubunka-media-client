// @flow
import React from 'react'
import styled from 'styled-components'
import { AuthorImg } from '../../atoms/author-img'
import { WriterName } from '../../atoms/writer-name'

export type Props = {|
  +name: string,
  +imgUrl: string,
  +imgSize?: string,
  +fontSize?: string,
|}

export const WriterInfo = ({ name, imgUrl, imgSize, fontSize }: Props) => (
  <Container
    className='d-flex align-items-center'
  >
    <ImageContainer className='d-inline-block' >
      <AuthorImg
        imgUrl={imgUrl}
        imgSize={imgSize}
      />
    </ImageContainer>
    <NameContainer className='d-inline-block' >
      <WriterName
        name={name}
        fontSize={fontSize}
      />
    </NameContainer>
  </Container>
)

const Container = styled.div``

const ImageContainer = styled.div`
  padding-right: 10px;
`

const NameContainer = styled.div``
