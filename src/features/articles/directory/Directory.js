import React from 'react'
import styled from 'styled-components'
import { InfoList } from './components/InfoList'
import { DATA } from './data'
import { MEDIA } from '../../../constants/Styles'

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  ${'' /* grid-row-gap: 20px; */}

  ${MEDIA.phone`
    display: block;
  `}
`

export const Directory = (props) => {
  const { data = DATA } = props
  const lists = data.map(list =>
    <InfoList
      alphabet={list.alphabet}
      titles={list.titles}
    />
  )

  return (
    <div>
      <h1>Health A-Z</h1>
      <h1>Educational information for your next doctor appointment.</h1>
      <GridContainer>
        {lists}
      </GridContainer>
    </div>
  )
}
