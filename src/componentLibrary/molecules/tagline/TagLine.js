import React from 'react'
import styled from 'styled-components'
import { Colors } from '../../../constants/Styles'
import { ThumbnailCircle } from '../../atoms/image/ThumbnailCircle'
import { TagLineText } from './TagLineText'

const ComponentContainer = styled.div`
  display: flex;
  width: ${props => props.width || '100%'};
  height: ${props => props.height || 'auto'};
  background-color: transparent;
`

const TextContainer = styled.div`
  flex: 1;
  margin-left: 10px;
  align-self: center;
`

export const TagLine = (props) => {
  const {
    title,
    content,
    source,
    imageSize = '40px',
  } = props
  return (
    <ComponentContainer colors={Colors} {...props} >
      <ThumbnailCircle
        source={source}
        width={imageSize}
        height={imageSize}
        padding='2em'
      />
      <TextContainer>
        <TagLineText title={title} content={content} />
      </TextContainer>
    </ComponentContainer>
  )
}
