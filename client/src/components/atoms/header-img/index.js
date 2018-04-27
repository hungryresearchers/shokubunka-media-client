// @flow
import React from 'react'
import styled from 'styled-components'
import BACKGROUND_IMG from '../../images/top-background.jpg'

type Props = {|
  +children: React.ReactNode,
  +text: string,
  +linkTo: string,
|}

export const HeaderImg = ({ children }: Props) => (
  <Conainer>
    {children}
  </Conainer>
)

const Conainer = styled.div`
  height: 46vh;
  background-image: url(${BACKGROUND_IMG});
  background-repeat: no-repeat;
  background-size: cover;
`
