import React from 'react'
import { Button } from '../../common/button/Button'
import { ImageCircle } from '../../common/imageCircle/ImageCircle'

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
  </div>
)
