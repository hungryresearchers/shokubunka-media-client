// @flow
import React from 'react'
import styled from 'styled-components'
import { InfoIcon, MobileInfoIcon } from '../../atoms/info-icon'
import { Balloon } from '../../atoms/balloon'
import { media } from '../../../utils/styles'
import { COLORS } from '../../styles/colors'
import { FONT_FAMILY } from '../../styles/font-family.css'

const { ORANGE } = COLORS
const { YUGOTHIC } = FONT_FAMILY

type Props = {|
  +onClick: Function,
|}

export const ShopInfoLink = ({ onClick }: Props) => (
  <Container
    onClick={onClick}
    className='text-center position-absolute'
  >
    <InfoIconContainer>
      <InfoIcon />
    </InfoIconContainer>
    <MobileInfoIconContainer>
      <MobileInfoIcon />
    </MobileInfoIconContainer>
    <BalloonContainer>
      <Balloon
        text='お店情報'
      />
    </BalloonContainer>
    <Text>
      お店の情報
    </Text>
  </Container>
)

const Container = styled.div`
  cursor: pointer;
  top: calc(35vw * 0.64);
  left: 76%;

  @media ${media.small} {
    top: calc(100vw * 0.59);
    left: 80%;
  }
`

const BalloonContainer = styled.div`
  margin-top: 0.7em;

  @media ${media.small} {
    display: none;
  }
`

const Text = styled.p`
  font-size: 0.8em;
  ${YUGOTHIC}
  font-weight: bold;
  color: ${ORANGE};
  margin: 0;
  margin-top: -6px;

  @media ${media.medium} {
    display: none;
  }
`

const InfoIconContainer = styled.span`
  @media ${media.small} {
    display: none;
  }
`

const MobileInfoIconContainer = styled.span`
  @media ${media.medium} {
    display: none;
  }
`