import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import MuiCheckbox from '@material-ui/core/Checkbox'
import { Colors } from '../../constants/Styles'

const InjectProps = (props) => <MuiCheckbox color={'default'} {...props} />

export const Checkbox = withStyles({
  root: {
    color: Colors.VERY_LIGHT_PINK_2
  },
  checked: {
    color: Colors.AQUA_MARINE
  },
})(InjectProps)
