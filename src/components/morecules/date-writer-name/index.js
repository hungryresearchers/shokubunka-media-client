// @flow
import React from 'react'
import styled from 'styled-components'
import { ReleasedDate } from '../../atoms/released-date'
import { WriterInfo } from '../writer-info'

type Props = {|
  +releasedDate: string,
  +name: string,
  +imgUrl: string,
  mobileFontSize?: string,
  mobileImgSize?: string
|}

export const DateWriterName = ({ releasedDate, name, imgUrl, mobileFontSize, mobileImgSize }: Props) => (
  <Container>
    <ReleasedDate
      releasedDate={releasedDate}
      fontSize='0.8em'
    />
    <WriterInfo
      name={name}
      imgUrl={imgUrl}
      fontSize='1.1em'
      imgSize='1.8vw'
      mobileFontSize={mobileFontSize || '0.8em'}
      mobileImgSize={mobileImgSize || '1.3em'}
    />
  </Container>
)

const Container = styled.div``
