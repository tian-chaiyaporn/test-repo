import React, { useState } from 'react'
import styled from 'styled-components'
import CollapseMUI from '@material-ui/core/Collapse'
import Add from '@material-ui/icons/Add'
import Remove from '@material-ui/icons/Remove'

import { Colors } from '../../../constants/Styles'

const StyledList = styled.li`
  list-style: none;
  padding: 10px 0;
  border-bottom: 1px solid ${props => props.borderColor || 'black'};
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
  const {
    title,
    children,
    borderColor = Colors.BLACK,
    open = false
  } = props
  const [isCollapse, toggleCollapse] = useState(open)
  const handleClick = () => toggleCollapse(!isCollapse)
  const icon = isCollapse ? (<Remove />) : (<Add />)

  return (
    <StyledList color={Colors.BLACK} borderColor={borderColor} {...props} >
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
