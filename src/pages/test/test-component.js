import React from 'react'

import { Button } from '../../common/button/Button'
import { ImageCircle } from '../../common/imageCircle/ImageCircle'
import { Checkbox } from '../../common/checkbox/Checkbox'
import { Switch } from '../../common/switch/Switch'
import TextField from '../../common/textFields/TextField'
import { Star } from '../../common/stars/Star'

export default () => (
  <div>
    <h1>Test Component</h1>
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ flex: 1 }}>
        <Button
          filled 
          text={'test button'}
          width={'100%'}
          onClick={ () => console.log('click') }
        />
      </div>
      <div style={{ flex: 1, margin: '0 0 0 10px' }}>
        <Button
          text={'test button'}
          width={'100%'}
          onClick={ () => console.log('click') }
        />
      </div>
    </div>
    <ImageCircle />
    <Checkbox color={'default'} />
    <Switch />
    <TextField />
    <Star onChange={(a, b) => console.log('change star', a, b)} />
  </div>
)
