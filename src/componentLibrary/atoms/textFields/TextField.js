import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiTextField from '@material-ui/core/TextField';
import { Colors } from '../../../constants/Styles';

const styles = theme => ({
  root: {
    '&:hover': {
      borderBottom: 'none'
    },
  },
  underline: {
    '&:after': {
      borderBottom: `2px solid ${Colors.VERY_LIGHT_PINK_2}`,
    },
    '&:before': {
      borderBottom: `1px solid ${Colors.VERY_LIGHT_PINK_2}`,
    },
  },
})

function CustomizedInputs(props) {
  const { classes, label = '' } = props
  return (
    <div className={classes.root}>
      <MuiTextField
        InputProps={{ classes: props.classes }}
        label={label}
        id="custom-css-outlined-input"
        {...props}
      />
    </div>
  )
}

function FormikInputs(props) {
  const {
    classes,
    label = '',
    field,
    form: { setFieldValue },
	} = props
	console.log(props)
  const onValueChanged = (e) => setFieldValue(field.name, e.target.value)
  return (
    <div className={classes.root}>
      <MuiTextField
        InputProps={{ classes: props.classes }}
        label={label}
        id="custom-css-outlined-input"
        onChange={onValueChanged}
				value={field.value}
        {...props}
      />
    </div>
  )
}

export const TextField = withStyles(styles)(CustomizedInputs)

export const FormikTextField = withStyles(styles)(FormikInputs)
