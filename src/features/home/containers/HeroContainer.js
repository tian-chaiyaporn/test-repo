import React, { useState } from "react"
import styled from "styled-components"

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
      </SearchContainer>
    </BackgroundContainer>
  )
}
