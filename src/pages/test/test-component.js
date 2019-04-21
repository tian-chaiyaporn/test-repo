import React from 'react'

import { Button } from '../../componentLibrary/atoms/button/Button'
import { ThumbnailCircle } from '../../componentLibrary/atoms/image/ThumbnailCircle'
import { Checkbox } from '../../componentLibrary/atoms/checkbox/Checkbox'
import { Switch } from '../../componentLibrary/atoms/switch/Switch'
import TextField from '../../componentLibrary/atoms/textFields/TextField'
import { Star } from '../../componentLibrary/atoms/stars/Star'
import { Breadcrumbs } from '../../componentLibrary/atoms/breadcrumbs/Breadcrumbs'
import { BreadcrumbLink } from '../../Router'
import { TagLineText } from '../../componentLibrary/molecules/tagline/TagLineText'
import { TagLine } from '../../componentLibrary/molecules/tagline/TagLine'
import { TagLineRating } from '../../componentLibrary/molecules/tagline/TagLineRating'

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
    <ThumbnailCircle />
    <Checkbox color={'default'} />
    <Switch />
    <TextField />
    <Star rating={3} onChange={(a, b) => console.log('change star', a, b)} />
    <Breadcrumbs>
      <BreadcrumbLink to="/">
        Wellglo
      </BreadcrumbLink>
      <BreadcrumbLink to="/clinics">
        Clinics
      </BreadcrumbLink>
      <BreadcrumbLink to="/clinics/title">
        Title
      </BreadcrumbLink>
    </Breadcrumbs>
    <TagLineText
      title='Dr. Boonchai Thanyalakpark'
      content='Dermatologist'
    />
    <TagLine
      title='Dr. Boonchai Thanyalakpark'
      content='Dermatologist'
    />
    <TagLine title='Dr. Boonchai Thanyalakpark' />
    <TagLineRating
      title='Dr. Boonchai Thanyalakpark'
      content='Dermatologist'
      rating={5}
      reviewCount={15}
    />
  </div>
)
