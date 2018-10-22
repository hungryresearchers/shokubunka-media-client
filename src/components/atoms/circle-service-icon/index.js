// @flow
import React from 'react'
import styled from 'styled-components'
import IMAGES from '../../images'
import { media } from '../../../utils/styles'

const { SERVICE_ICON } = IMAGES

type Props = {|
  size: number,
  sizeUnit: string,
  mobileSize?: number,
  rotate?: {|
    disable?: boolean,
    animation: string,
    second: number,
  |}
|}

const defaultRotate = {
  animation: 'linear',
  second: 1.5
}

const CircleServiceIcon = ({ size, mobileSize, sizeUnit, rotate = defaultRotate }: Props) => {
  const Image = styled.img.attrs({
    src: SERVICE_ICON,
  })`
      width: ${size + sizeUnit};
      height: ${size + sizeUnit};
      border-radius: ${(size / 2) + sizeUnit};

      ${!rotate.disable && `
        animation: rotate-anime ${rotate.second}s ${rotate.animation} infinite;
        @keyframes rotate-anime {
          0%  {transform: rotate(0);}
          100%  {transform: rotate(360deg);}
        }
      `}

      ${mobileSize && `
        @media ${media.small} {
          width: ${mobileSize};
          height: ${mobileSize};
          border-radius: ${(mobileSize / 2) + sizeUnit};
        }
      `}
    `

  return (
    <Image
      size={size}
      mibileSize={mobileSize}
      rotate={rotate}
    />
  )
}

export default CircleServiceIcon
