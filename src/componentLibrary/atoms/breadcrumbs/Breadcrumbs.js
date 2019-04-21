import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import BreadcrumbsMui from '@material-ui/lab/Breadcrumbs'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { Colors } from '../../../constants/Styles'

const InjectProps = (props) => (
  <BreadcrumbsMui
    separator={<NavigateNextIcon fontSize="small" />}
    arial-label="Breadcrumb"
    {...props}
  >
    {props.children}
  </BreadcrumbsMui>
)

export const Breadcrumbs = withStyles({
  root: {
    color: Colors.VERY_LIGHT_PINK_2
  }
})(InjectProps)
