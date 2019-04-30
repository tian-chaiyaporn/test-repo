import React from 'react'
import styled from 'styled-components'
import { InfoList } from './components/InfoList'
import { DATA } from './data'
import { MEDIA } from '../../../constants/Styles'
import { MainHeadings } from '../../../componentLibrary/atoms/headings/MainHeadings'

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  margin-top: 30px;

  ${MEDIA.phone`
    display: block;
  `}
`

const Container = styled.div`
  margin: 100px 0;
`

export const Directory = (props) => {
  const { data = DATA } = props
  const lists = data.map(list =>
    <InfoList
      key={list.alphabet}
      alphabet={list.alphabet}
      titles={list.titles}
    />
  )

  return (
    <Container>
      <MainHeadings
        style={{ maxWidth: '650px' }}
        title='Health A-Z'
        subtitle='Educational information for your next doctor appointment.'
      />
      <GridContainer>
        {lists}
      </GridContainer>
    </Container>
  )
}
