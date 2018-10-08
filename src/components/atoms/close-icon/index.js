// @flow
import React, { Fragment } from 'react'
import styled from 'styled-components'
import { media } from '../../../utils/styles'

const Icon = () => (
  <g id='ArticleDetailPage2' fill='none' fillRule='evenodd' transform='translate(-1039 -129)'>
    <g id='modal' transform='translate(338 98)' fill='#E85C40'>
      <polygon id='Shape' points='731 34.0214286 727.978571 31 716 42.9785714 704.021429 31 701 34.0214286 712.978571 46 701 57.9785714 704.021429 61 716 49.0214286 727.978571 61 731 57.9785714 719.021429 46'
      />
    </g>
  </g>
)

export const WebCloseIcon = () => (
  <svg width='2.3em' height='2.3em' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'>
    <Icon />
  </svg>
)

export const MobileCloseIcon = () => (
  <svg width='1.5rem' height='1.5rem' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'>
    <Icon />
  </svg>
)

const Mobile = styled.span`
  @media ${media.medium} {
    display: none;
  }
`

const Web = styled.span`
  @media ${media.small} {
    display: none;
  }
`

const UniversalCloseIcon = () => (
  <Fragment>
    <Web>
      <WebCloseIcon />
    </Web>
    <Mobile>
      <MobileCloseIcon />
    </Mobile>
  </Fragment>
)

export default UniversalCloseIcon

