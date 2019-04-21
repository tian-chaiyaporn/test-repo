import React from 'react'
import styled from 'styled-components'

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
import { ArticleCard, ArticleCardWithByline } from '../../componentLibrary/organisms/cards/ArticleCard'
import { ProfileInfoCard } from '../../componentLibrary/organisms/cards/ProfileInfoCard'
import { QuoteCard } from '../../componentLibrary/organisms/cards/QuoteCard'


const MarginVertical = styled.div`
  margin: 40px 0;
  padding: 10px 0;
  border-bottom: 1px solid #efefef;
`

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
    <MarginVertical>
      <TextField />
    </MarginVertical>
    <MarginVertical>
      <Star rating={3} onChange={(a, b) => console.log('change star', a, b)} />
    </MarginVertical>
    <MarginVertical>
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
    </MarginVertical>
    <MarginVertical>
      <TagLineText
        title='Dr. Boonchai Thanyalakpark'
        content='Dermatologist'
      />
    </MarginVertical>
    <MarginVertical>
      <TagLine
        title='Dr. Boonchai Thanyalakpark'
        content='Dermatologist'
      />
    </MarginVertical>
    <MarginVertical>
      <TagLine title='Dr. Boonchai Thanyalakpark' />
    </MarginVertical>
    <MarginVertical>
      <TagLineRating
        title='Dr. Boonchai Thanyalakpark'
        content='Dermatologist'
        rating={5}
        reviewCount={15}
      />
    </MarginVertical>
    <MarginVertical>
      <ArticleCard
        imageSrc="https://via.placeholder.com/335x240.png"
        articleTitle='Interdum et malesuada fames'
        articleContent='Mauris tempor pharetra urna, sed finibus metus dictum duis quis quam uratelam.'
      />
    </MarginVertical>
    <MarginVertical>
      <ArticleCardWithByline
        imageSrc="https://via.placeholder.com/335x240.png"
        articleTitle='Interdum et malesuada fames'
        articleContent='Mauris tempor pharetra urna, sed finibus metus dictum duis quis quam uratelam.'
        tagTitle='Richard Rhodes'
        tagContent='Feb 20 - 3 min read'
      />
    </MarginVertical>
    <MarginVertical>
      <ProfileInfoCard
        tagTitle='Dr. Chakarin Banchongkit'
        tagContent='Dermatologist'
        addressName='Interdum et malesuada fames'
        addressDetail='Mauris tempor pharetra urna, sed finibus metus dictum duis quis quam uratelam.'
        rating={4}
        reviewCount={16}
      />
    </MarginVertical>
    <MarginVertical>
      <QuoteCard
        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat ex, ornare in ante id, tristique dictum libero. Phasellus pellentesque laoreet lorem.'
        tagTitle='Dorothy Dixon'
        tagContent='Wellglo member'
      />
    </MarginVertical>
  </div>
)
