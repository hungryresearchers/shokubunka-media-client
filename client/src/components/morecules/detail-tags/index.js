// @flow
import React from 'react'
import styled from 'styled-components'
import { BlockTag } from '../../atoms/block-tag'

type Props = {|
  +tags: string[],
|}

export const DetailTags = ({ tags }: Props) => (
  <Container>
    {
      tags.map(tag => (
        <TagContainer
          key={tag}
          className='d-inline-block'
        >
          <BlockTag
            text={tag}
          />
        </TagContainer>
      ))
    }
  </Container>
)

const TagContainer = styled.div`
  padding-right: 1em;
`

const Container = styled.div``
