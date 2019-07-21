import React, { useState } from "react"
import styled from "styled-components"
import { Colors } from '../../../constants/Styles'

const SearchBar = styled.div`
  background: white;
  display: flex;
  height: 74px;
  padding: 20px;
  margin-top: 40px;
`

const SearchInput = styled.input`
  border: none;
  width: 100%;
  outline: none;
  font-size: 18px;
	font-family: 'AkagiProBook';
`

const SearchContainer = styled.div`
  flex-direction: row;
  padding-top: 12%;
  max-width: 1200px;
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
`

const HeadingThick = styled.h1`
  font-family: "TisaThin";
  font-weight: 100;
  margin: 0;
  color: #fff;
`

const BackgroundContainer = styled.div`
  background-image: url(/assets/hero-image-2x.png);
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  height: 900px;
  display: flex;
  justify-content: center;
  flex-direction: row;
`

export const HeroContainer = () => {
	const [ searchQuery, setSearchQuery ] = useState("")
	const hasSearchResult = searchQuery.length > 1
	const searchResult = hasSearchResult ?  mockSearchResult : []
  return (
    <BackgroundContainer>
      <SearchContainer>
        <HeadingThick>Wellness begins here</HeadingThick>
        <HeadingThick>Find the right doctor – it’s free</HeadingThick>
        <SearchBar>
          <SearchInput
            title="search"
            type="text"
            name="searchBar"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Condition, procedure, speciality, doctor name"
          />
        </SearchBar>
				{ hasSearchResult && <SearchResult searchResult={searchResult} /> }
      </SearchContainer>
    </BackgroundContainer>
  )
}

const SearchResultContainer = styled.ul`
  background: white;
  padding: 20px;
	border-top: solid 1px #eee;
	margin: 0;
`

const ListStyled = styled.li`
  padding: 5px 0;
	list-style: none;
	font-size: 16px;
	font-family: 'AkagiProLight';
	color: ${Colors.BLACK};
	&:hover {
		font-family: 'AkagiProMedium';
  }
`

const SearchResult = ({ searchResult = [] }) => {
	const data = searchResult.map(result => (
		<a href={`/${result.link}`}>
			<ListStyled>{result.suggestion}</ListStyled>
		</a>
	))
	return (
		<SearchResultContainer>
			{data}
		</SearchResultContainer>
	)
}

const mockSearchResult = [
	{
		suggestion: 'Primary Care Doctor',
		link: 'providers'
	},
	{
		suggestion: 'OB-GYN',
		link: 'providers'
	},
	{
		suggestion: 'Dermatologist',
		link: 'providers'
	},
	{
		suggestion: 'Dentist',
		link: 'providers'
	},
	{
		suggestion: 'Ear, Nose, Throat Doctor',
		link: 'providers'
	},
	{
		suggestion: 'Eye Doctor',
		link: 'providers'
	},
	{
		suggestion: 'Psychiatrist',
		link: 'providers'
	}
]
