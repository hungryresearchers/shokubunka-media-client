// @flow
import React from 'react'
import styled from 'styled-components'
import { TipsHeader } from '../../atoms/tips-header'
import { WriterInfo } from '../../morecules/writer-info'

type Props = {|
  writerInfo: {|
    name: string,
    imgUrl: string,
  |},
|}

export const ArticleWriter = ({ writerInfo }: Props) => (
  <Container>
    <TipsHeader
      title='この記事を書いた人'
    />
    <WriterInfo
      name={writerInfo.name}
      imgUrl={writerInfo.imgUrl}
      fontSize='1.1em'
      imgSize='3.4vw'
    />
  </Container>
)

const Container = styled.div`
  width: 100%;
`
