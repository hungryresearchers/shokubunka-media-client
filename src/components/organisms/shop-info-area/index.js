// @flow
import React from 'react'
import styled from 'styled-components'
import { TipsHeader } from '../../atoms/tips-header'
import { ShopInfoColumn } from '../../atoms/shop-info-column'
import { PhoneIcon } from '../../atoms/phone-icon'
import { PhoneNumber } from '../../atoms/phone-number'
import { ClockIcon } from '../../atoms/clock-icon'
import {
  WeeklyText,
  type Props as BusinessHour,
} from '../../atoms/weekly-text'
import { WalkmanIcon } from '../../atoms/walkman-icon'
import { RequiredTime } from '../../atoms/required-time'
import {
  AddressText,
  type Address,
} from '../../atoms/address-text'
import {
  Map,
} from '../../atoms/map'
import { media } from '../../../utils/styles'

export type Props = {|
  phoneNumber: string,
  businessHour: BusinessHour,
  requiredTime: string,
  address: Address,
|}

export const SHOP_INFO_MAP_SIZE = '300px'

export const ShopInfoArea = ({ phoneNumber, businessHour, requiredTime, address }: Props) => (
  <Container>
    <TipsHeaderContainer>
      <TipsHeader
        title='お店の情報'
      />
    </TipsHeaderContainer>
    <UpperContainer>
      <ShopInfoColumn
        IconComponent={() => (<PhoneIcon />)}
        DescriptionComponent={() => (
          <PhoneNumber
            number={phoneNumber}
          />
        )}
      />
      <ShopInfoColumn
        IconComponent={() => (<ClockIcon/>)}
        DescriptionComponent={() =>  (
          <WeeklyText
            open={businessHour.open}
            close={businessHour.close}
            holiday={businessHour.holiday}
          />
        )}
      />
      <ShopInfoColumn
        IconComponent={() => (<WalkmanIcon />)}
        DescriptionComponent={() => (
          <RequiredTime
            requiredTime={requiredTime}
          />
        )}
      />
    </UpperContainer>
    <BottomContaier>
      <AddressContainer>
        <ShopInfoColumn
          IconComponent={() => (null)}
          DescriptionComponent={() => (
            <AddressText
              address={address}
            />
          )}
        />
      </AddressContainer>
      {
        (address.latlng && address.latlng.lat && address.latlng.lng) &&
        <MapContainer>
          <ShopInfoColumn
            IconComponent={() => (null)}
            DescriptionComponent={() => (
              <Map
                latlng={address.latlng}
                size="300px"
                mobileSize='250px'
              />
            )}
          />
        </MapContainer>
      }
    </BottomContaier>
  </Container>
)

const Container = styled.div`
  width: 100%;
`

const TipsHeaderContainer = styled.div`
  @media ${media.small} {
    margin-bottom: 25px;
  }
`

const AddressContainer = styled.div`
  margin-bottom: 2vh;
`

const MapContainer = styled.div``

const UpperContainer = styled.div`
  margin-bottom: 3vh;
`

const BottomContaier = styled.div``
