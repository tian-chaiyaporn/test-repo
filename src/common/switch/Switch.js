import React from 'react'
import SwitchDefault from '@material-ui/core/Switch'
import { withStyles } from '@material-ui/core/styles'
import { Colors } from '../../constants/Styles'

const styles = theme => ({
  iOSSwitchBase: {
    '&$iOSChecked': {
      color: Colors.WHITE,
      '& + $iOSBar': {
        background: `linear-gradient(122deg, ${Colors.LIGHT_TEAL}, ${Colors.AQUA_MARINE})`,
        backgroundColor: Colors.AQUA_MARINE,
      },
    },
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.sharp,
    }),
  },
  iOSChecked: {
    transform: 'translateX(17px)',
    '& + $iOSBar': {
      opacity: 1,
      border: 'none',
    },
  },
  iOSBar: {
    borderRadius: 13,
    width: 42,
    height: 25,
    marginTop: -13,
    marginLeft: -19,
    border: 'solid 1px',
    borderColor: Colors.VERY_LIGHT_PINK_2,
    backgroundColor: Colors.VERY_LIGHT_PINK,
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  iOSIcon: {
    width: 25,
    height: 25,
    boxShadow: 'none',
    border: 'solid 1px',
    background: Colors.WHITE_2,
    borderColor: Colors.VERY_LIGHT_PINK_2,
  },
  iOSIconChecked: {
    boxShadow: 'none',
    border: 'solid 1px',
    borderColor: Colors.VERY_LIGHT_PINK_2,
    backgroundImage: `url(https://img.icons8.com/ios/50/000000/multiply.png)`,
    backgroundSize: 'contain'
  },
})

const Customized = (props) => {
  const {
    classes = {},
    onChange = () => {},
    checked,
  } = props
  return (
    <SwitchDefault
      classes={{
        switchBase: classes.iOSSwitchBase,
        bar: classes.iOSBar,
        icon: classes.iOSIcon,
        iconChecked: classes.iOSIconChecked,
        checked: classes.iOSChecked,
      }}
      disableRipple
      onChange={onChange}
      checked={checked}
    />
  )
}

export const Switch = withStyles(styles)(Customized)
