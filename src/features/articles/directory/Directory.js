import React from 'react'
import { InfoList } from './components/InfoList'

const mockData = [
  {
    alphabet: 'A',
    titles: ['link1', 'link2', 'link3']
  },
  {
    alphabet: 'B',
    titles: ['link1']
  },
  {
    alphabet: 'C',
    titles: ['link1', 'link2', 'link3', 'link4']
  },
]

export const Directory = (props) => {
  const { data = mockData } = props
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
      {lists}
    </div>
  )
}
