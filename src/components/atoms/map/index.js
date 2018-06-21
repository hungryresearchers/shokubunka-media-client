// @flow
import React from 'react'
import styled from 'styled-components'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps"

export type LatLng = {
  lat: number,
  lng: number,
}
type Props = {
  latlng: LatLng,
  size?: number,
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

export const Map = ({ latlng, size }: Props) => (
  <MapContent
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCGpVNiSjM-eqFHYEGtoV2yf9uGJWOVpT4&v=3.exp&libraries=geometry,drawing,places"
    loadingElement={
      <MapElement
        size={size}
      />
    }
    containerElement = {
      <MapElement
        size={size}
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
`
