// @flow
import React from 'react'
import styled from 'styled-components'
import { AuthorImg } from '../../atoms/author-img'
import { WriterName } from '../../atoms/writer-name'

type Props = {|
  +name: string,
  +imgUrl: string,
|}

export const WriterInfo = ({ name, imgUrl }: Props) => (
  <Container>
    <ImageContainer className='d-inline-block' >
      <AuthorImg
        imgUrl={imgUrl}
      />
    </ImageContainer>
    <NameContainer className='d-inline-block' >
      <WriterName
        name={name}
      />
    </NameContainer>
  </Container>
)

const Container = styled.div``

const ImageContainer = styled.div`
  padding-right: 10px;
`

const NameContainer = styled.div``
