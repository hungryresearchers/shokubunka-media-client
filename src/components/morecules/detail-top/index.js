// @flow
import React from 'react'
import styled from 'styled-components'
import { RectangleImg as TopImg } from '../../atoms/rectangle-img'
import { ShopInfoLink } from '../../morecules/shop-info-link'
import { DetailTags } from '../../morecules/detail-tags'
import { DetailTitle } from '../../atoms/detail-title'
import { DateWriterName } from '../../morecules/date-writer-name'

type Props = {|
  +topImgUrl: string,
  +onClickInfo: Function,
  +tags: string[],
  +title: string,
  +releasedDate: string,
  +imgUrl: string,
  +name: string,
|}

export const DetailTop = ({ topImgUrl, onClickInfo, tags, title, releasedDate, imgUrl, name }: Props) => (
  <Container>
    <ImgContainer>
      <InfoBalloonContainer>
        <ShopInfoLink
          onClick={onClickInfo}
        />
      </InfoBalloonContainer>
      <TopImg
        imgUrl={topImgUrl}
        imgWidth='100%'
        imgHeight='calc(35vw * 0.73)'
      />
    </ImgContainer>
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
  </Container>
)

const Container = styled.div``

const ImgContainer = styled.div`
  margin-bottom: 7vh;
`

const InfoBalloonContainer = styled.div`
  position: relative;
  top: calc(35vw * 0.64);
  left: 76%;
`

const TagsContainer = styled.div`
  margin-bottom: 1.8em;
`

const TitleContainer = styled.div`
  margin-bottom: 1.2em;
`
