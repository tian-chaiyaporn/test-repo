import React, { useState } from 'react'
import styled from 'styled-components'
import CollapseMUI from '@material-ui/core/Collapse'
import Add from '@material-ui/icons/Add'
import Remove from '@material-ui/icons/Remove'

import { Colors } from '../../../constants/Styles'

const StyledList = styled.li`
  list-style: none;
  padding: 10px 0;
  border-bottom: 1px solid ${props => props.color || 'black'};
  color: ${props => props.color || 'black'};
`

const StyledTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledButton = styled.button`
  border: none;
  padding: 0;
  cursor: pointer;
  outline: none;
  background-color: transparent;
`

export const Collapse = (props) => {
  const [isCollapse, toggleCollapse] = useState(false)
  const handleClick = () => toggleCollapse(!isCollapse)
  const { title, children } = props
  const icon = isCollapse ? (<Remove />) : (<Add />)

  return (
    <StyledList color={Colors.BLACK}>
      <StyledTitle>
        <span>{title}</span>
        <StyledButton onClick={handleClick}>
          { icon }
        </StyledButton>
      </StyledTitle>
      <CollapseMUI in={isCollapse} timeout="auto" unmountOnExit>
        {children}
      </CollapseMUI>
    </StyledList>
  )
}
