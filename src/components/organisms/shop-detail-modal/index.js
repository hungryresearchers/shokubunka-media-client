// @flow
import React from 'react'
import styled from 'styled-components'
import ReactModal from 'react-modal'
import {
  ShopInfoArea,
  SHOP_INFO_MAP_SIZE,
  type Props as ShopInfoProps,
} from '../shop-info-area'
import { RectangleButton } from '../../atoms/rectangle-button'
import { CloseIcon } from '../../atoms/close-icon'
import { COLORS } from '../../styles/colors'
import { ShopInfoColumn } from '../../atoms/shop-info-column'
import { TwoStepBorder } from '../../atoms/tips-header/two-step-border'
import { media } from '../../../utils/styles'

const { WHITE_085, ORANGE, GRAY_PALE, } = COLORS

type Props = {|
  isOpen: boolean,
  handleClickModalCloseButton: Function,
  ...ShopInfoProps
|}

export const ShopDetailModal = ({ isOpen, phoneNumber, businessHour, requiredTime,
  address, handleClickModalCloseButton, }: Props) => (
  <ReactModal
    isOpen={isOpen}
    style={{
      overlay: {
        zIndex: 9999,
        display: 'overflow',
        margin: 0
      },
      content: {
        border: `3px solid ${ORANGE}`,
        margin: '0 auto',
        padding: '10vh 6vw',
        width: '53vw',
        minHeight: '763px',
        position: 'absolute',
        zIndex: 999999,
        backgroundColor: WHITE_085,
      }
    }}
    contentLabel='お店情報詳細'
    ariaHideApp={false}
  >
    <ModalContainer>
      <ModalHeader>
        <CloseIconContainer
          onClick={handleClickModalCloseButton}
        >
          <CloseIcon />
        </CloseIconContainer>
      </ModalHeader>
      <ShopInfoAreaContainer>
        <ShopInfoArea
          phoneNumber={phoneNumber}
          businessHour={businessHour}
          requiredTime={requiredTime}
          address={address}
        />
      </ShopInfoAreaContainer>
      <LinkGoogleMapContainer>
        <ShopInfoColumn
          IconComponent={() => null}
          DescriptionComponent={() => (
            <LinkToGoogleMap
              postalCode={address.postalCode}
              address={address.address}
            >
              <RectangleButton
                text='Google Map で見る'
                onClick={() => {}}
                containerStyle={{
                  width: SHOP_INFO_MAP_SIZE,
                  paddingTop: '0.5em',
                  paddingBottom: '0.51em',
                }}
                textStyle={{
                  fontSize: '0.8em',
                }}
              />
            </LinkToGoogleMap>
          )}
        />
      </LinkGoogleMapContainer>
      <BottomBorder />
    </ModalContainer>
  </ReactModal>
)

const ModalContainer = styled.div`
  border-bottom: 0.45em solid ${GRAY_PALE};
`

const CloseIconContainer = styled.div`
  cursor: pointer;
`

const ModalHeader = styled.div`
  position: absolute;
  top: 2vw;
  right: 2vw;
`

const ShopInfoAreaContainer = styled.div``

const LinkGoogleMapContainer = styled.div`
  margin-top: 1.5vh;
  margin-bottom: 3vh;
`

const LinkToGoogleMap = styled.a.attrs({
  href: props => `https://www.google.co.jp/maps/place/${props.postalCode + '+' + props.address}`,
  target: '_blank',
})`
  &:hover {
    text-decoration: none;
  }
`

const BottomBorder = TwoStepBorder.extend`
  margin-bottom: 0.15em;
`
