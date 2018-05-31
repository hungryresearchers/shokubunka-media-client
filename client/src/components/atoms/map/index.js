// @flow
import React from 'react'
import styled from 'styled-components'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps"

type LatLng = {
  latitude: number,
  longitude: number,
}
type Props = {
  latlng: LatLng,
  height: string,
}

export const Map = withScriptjs(withGoogleMap(({ latlng }: Props) =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={latlng}
  >
    <Marker
      postion={latlng}
    />
  </GoogleMap>
))
