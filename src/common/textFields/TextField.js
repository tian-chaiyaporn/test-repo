import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Colors } from '../../constants/Styles';

const styles = theme => ({
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
  const { classes } = props
  return (
    <div className={classes.root}>
      <TextField
        InputProps={{ classes: props.classes }}
        label="Custom CSS"
        id="custom-css-outlined-input"
      />
    </div>
  )
}

export default withStyles(styles)(CustomizedInputs)
