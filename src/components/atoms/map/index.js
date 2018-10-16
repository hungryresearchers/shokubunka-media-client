// @flow
import React from 'react'
import styled from 'styled-components'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps'
import { media } from '../../../utils/styles'

export type LatLng = {
  lat: number,
  lng: number,
}
type Props = {
  latlng: LatLng,
  size?: string,
  mobileSize?: string,
}

const MapContent = withScriptjs(withGoogleMap(({ latlng }: Props) =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={latlng}
  >
    <Marker
      position={latlng}
    />
  </GoogleMap>
))

export const Map = ({ latlng, size, mobileSize }: Props) => (
  <MapContent
    googleMapURL={process.env.REACT_APP_GOOGLE_MAP_URL}
    loadingElement={
      <MapElement
        size={size}
        mobileSize={mobileSize}
      />
    }
    containerElement = {
      <MapElement
        size={size}
        mobileSize={mobileSize}
      />
    }
    mapElement={
      <div style={{height: '100%'}} />
    }
    latlng={latlng}
  />
)

const MapElement = styled.div`
  height: ${props => props.size || '300px'};
  width: ${props => props.size || '300px'};

  ${props => props.mobileSize && `
    @media ${media.small} {
      height: ${props.mobileSize};
      width: ${props.mobileSize};
    }
  `}
`
