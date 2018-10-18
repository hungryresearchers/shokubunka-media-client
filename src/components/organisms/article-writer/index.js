// @flow
import React from 'react'
import styled from 'styled-components'
import { TipsHeader } from '../../atoms/tips-header'
import { WriterInfo } from '../../morecules/writer-info'
import { media } from '../../../utils/styles'

type Props = {|
  writerInfo: {|
    name: string,
    imgUrl: string,
  |},
|}

export const ArticleWriter = ({ writerInfo }: Props) => {
  if (!writerInfo || (writerInfo.name === '' && !writerInfo.imgUrl)) {
    return <Container />
  }

  return (
    <Container>
      <HeaderContainer>
        <TipsHeader
          title='この記事を書いた人'
        />
      </HeaderContainer>
      <WriterInfo
        name={writerInfo.name}
        imgUrl={writerInfo.imgUrl}
        fontSize='1.1em'
        imgSize='3.4vw'
        mobileFontSize='1.59em'
        mobileImgSize='55px'
        between='20px'
        mobileBetween='20px'
      />
    </Container>
  )
}

const HeaderContainer = styled.div`

  @media ${media.small} {
    margin-bottom: 1.7em;
  }
`

const Container = styled.div`
  width: 100%;
`
