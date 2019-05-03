import React, { useState } from 'react'
import styled from 'styled-components'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'
import { withStyles } from '@material-ui/core/styles';
import { Colors } from '../../../../constants/Styles'

export const Filter = (props) => {
  const { options = mockOptions } = props
  const [selection, setSelection] = useState('Everything')

  const menuItems = options.map(option =>
    <MenuItem key={option.value} value={option.value}>{option.value}</MenuItem>
  )

  return (
    <FormControl>
      <div style={{ display: 'inherit' }}>
        <h2 style={{ marginRight: '10px', color: Colors.BROWN_GREY }}>{'Show me'}</h2>
        <SelectCustom
          value={selection}
          disableUnderline={true}
          onChange={e => setSelection(e.target.value)}
          renderValue={(val) => <InputComponent>{val}</InputComponent>}
        >
          <MenuItem value={'Everything'}>Everything</MenuItem>
          {menuItems}
        </SelectCustom>
      </div>
    </FormControl>
  )
}

const selectStyles = { root: { padding: 0, minWidth: '80px' } }

const SelectCustom = withStyles(selectStyles)(Select)

const InputComponent = styled.h2`
  margin: 0;
  padding-bottom: 0;
  ${'' /* font-size: 28px; */}
`

const mockOptions = [
  { value: 'Dentist' },
  { value: 'Dermatology' },
  { value: 'Cancer' },
  { value: 'Exercise' },
]
