import React from 'react'
import { Colors } from '../../../../constants/Styles'
import { Collapse } from '../../../../componentLibrary/atoms/collapse/Collapse'

export const OverviewContainer = () => {
  return (
    <div>
      <Collapse title='Professional Statement' borderColor={Colors.VERY_LIGHT_PINK} open>
        <p>1</p>
      </Collapse>
      <Collapse title='Specialities' borderColor={Colors.VERY_LIGHT_PINK}>
        <p>1</p>
      </Collapse>
      <Collapse title='Professional Experience' borderColor={Colors.VERY_LIGHT_PINK}>
        <p>1</p>
      </Collapse>
      <Collapse title='Education & Certificate' borderColor={Colors.VERY_LIGHT_PINK}>
        <p>1</p>
      </Collapse>
    </div>
  )
}
