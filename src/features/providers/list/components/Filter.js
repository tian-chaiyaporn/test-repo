import React, { useState, Fragment } from 'react'
import styled from 'styled-components'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'
import Input from '@material-ui/core/Input'
import { withStyles } from '@material-ui/core/styles';

import { Colors } from '../../../../constants/Styles'
import { Switch } from '../../../../componentLibrary/atoms/switch/Switch'

const data = {
  options: [
    { value: 'Test' },
    { value: 'Dermatologist' },
    { value: 'Dentist' },
  ],
  filters: [ 'filter', 'filter2', 'filter3' ]
}

export const Filter = (props) => {
  const [doctorType, setDoctorType] = useState('Select a Specialist')

  const {
    options = data.options || [],
    filters = data.filters || [],
    city = 'Bangkok'
  } = props

  const menuItems = options.map(option =>
    <MenuItem key={option.value} value={option.value}>{option.value}</MenuItem>
  )
  
  // when filter API is ready, use redux to manage filter state and connects to backend
  const filterItems = filters.map((filter) => {
    return (
      <FormControl key={filter}>
        <SelectFilterCustom
          value={filter}
          disableUnderline={true}
          IconComponent={() => <span></span>}
          // onChange={e => someReduxAction(e.target.value)}
          input={<InputCustom />}
          renderValue={(val) => <FilterComponent>{val}</FilterComponent>}
        >
          {menuItems}
        </SelectFilterCustom>
      </FormControl>
    )
  })

  return ( 
    <Fragment>
      <FormControl>
        <SelectCustom
          value={doctorType}
          disableUnderline={true}
          onChange={e => setDoctorType(e.target.value)}
          renderValue={(val) => <InputComponent>{val}</InputComponent>}
        >
          <MenuItem value={'Select a Specialist'}>Select a Specialist</MenuItem>
          {menuItems}
        </SelectCustom>
      </FormControl>
      <City>{city}</City>
      <FilterBarContainer>
        <FilterList>{filterItems}</FilterList>
        <div><span>Show map</span><Switch /></div>
      </FilterBarContainer>
    </Fragment>
  )
}

const InputComponent = styled.h3`
  margin: 0;
  padding-bottom: 0;
  ${'' /* font-size: 28px; */}
`

const FilterComponent = styled.p`
  margin: 0 10px;
  padding: 6px 0;
  text-align: center;
`

const City = styled.h3`
  margin: 0 0 10px 0;
  font-weight: 100;
  color: ${Colors.BROWNISH_GREY};
`

const FilterBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
`

const FilterList = styled.div`
  display: flex;
  align-items: center
`

const selectFilterStyles = {
  root: {
    padding: 0,
    border: `1px solid ${Colors.VERY_LIGHT_PINK_2}`,
    minWidth: '80px',
    marginRight: '10px'
  }
}
const SelectFilterCustom = withStyles(selectFilterStyles)(Select)
const selectStyles = { root: { padding: 0, minWidth: '80px' } }
const SelectCustom = withStyles(selectStyles)(Select)
const inputStyles = { input: { padding: 0 } }
const InputCustom = withStyles(inputStyles)(Input)
