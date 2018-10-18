// @flow
import React from 'react'
import styled from 'styled-components'
import { RectangleImg as TopImg } from '../../atoms/rectangle-img'
import { ShopInfoLink } from '../../morecules/shop-info-link'
import { DetailTags } from '../../morecules/detail-tags'
import { DetailTitle } from '../../atoms/detail-title'
import { DateWriterName } from '../../morecules/date-writer-name'
import { media } from '../../../utils/styles'

type Props = {|
  +topImgUrl: string,
  +handleClickInfo: Function,
  +tags: string[],
  +title: string,
  +releasedDate: string,
  +imgUrl: string,
  +name: string,
  renderShopInfo: boolean,
|}

export const DetailTop = ({ topImgUrl, handleClickInfo, tags, title, releasedDate, imgUrl, name, renderShopInfo }: Props) => (
  <Container>
    <ImgContainer>
      {
        renderShopInfo &&
        <ShopInfoLink
          onClick={handleClickInfo}
        />
      }
      {
        topImgUrl &&
        <TopImg
          imgUrl={topImgUrl}
          imgWidth='100%'
          imgHeight='calc(35vw * 0.73)'
          mobileHeight='calc(100vw * 0.64)'
        />
      }
    </ImgContainer>
    <TipsContainer>
      <TagsContainer>
        <DetailTags
          tags={tags}
        />
      </TagsContainer>
      <TitleContainer>
        <DetailTitle
          title={title}
        />
      </TitleContainer>
      <DateWriterName
        releasedDate={releasedDate}
        imgUrl={imgUrl}
        name={name}
      />
    </TipsContainer>
  </Container>
)

const Container = styled.div``

const ImgContainer = styled.div`
  position: relative;
  margin-bottom: 7vh;

  @media ${media.small} {
    margin-bottom: 8.5vh;
  }
`

const TipsContainer = styled.div`
  @media ${media.small} {
    padding: 0 3.5vw;
  }
`

const TagsContainer = styled.div`
  margin-bottom: 1.8em;

  @media ${media.small} {
    margin-bottom: 1.3em;
  }
`

const TitleContainer = styled.div`
  margin-bottom: 1.2em;
`
