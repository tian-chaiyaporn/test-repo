import React from 'react'
import styled from 'styled-components'
import { Link } from '../../../Router'
import Icon from '@material-ui/icons/KeyboardArrowRight'
import { MEDIA } from '../../../constants/Styles'

import { Colors } from '../../../constants/Styles'

const StyledList = styled.li`
  width: 195px;
  list-style: none;
  border-radius: 2px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.04);
  border: solid 1.5px ${props => props.color.VERY_LIGHT_PINK};
  background-color: #ffffff;

  ${MEDIA.phone`
    padding: 10px 0;
    border: none;
    box-shadow: none;
    border-bottom: 1px solid ${props => props.color.BLACK || 'black'};
    color: ${props => props.color || 'black'};
    width: 100%;
		background-color: transparent;
  `}
`

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
  color: ${props => props.color || 'black'};

  ${MEDIA.phone`
    width: 100%;
    flex-direction: row;
    justify-content: start;
  `}
`

const StyledLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 195px;
  height: 195px;

  ${MEDIA.phone`
    width: 100%;
    height: auto;
  `}
`

const StyledButton = styled.button`
  display: none;

  ${MEDIA.phone`
    display: inline-block;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    background-color: transparent;
  `}
`

const StyledImage = styled.img`
  height: ${props => props.height || '90px'};
  padding: ${props => props.padding || '0'};

  ${MEDIA.phone`
		width: 30px;
    max-height: ${props => props.height || '30px'};
    margin-right: 10px;
  `}
`

export const ButtonInList = (props) => {
  const { title = "", link = "", imageSrc = "" } = props

  return (
    <StyledList color={Colors}>
      <StyledLink to={link} color={Colors.BLACK}>
        <StyledTitle>
          { imageSrc && (<StyledImage src={imageSrc} />)}
          <span>{title}</span>
        </StyledTitle>
        <StyledButton>
          <Icon />
        </StyledButton>
      </StyledLink>
    </StyledList>
  )
}
