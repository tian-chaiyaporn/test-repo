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
import { Collapse } from '../../componentLibrary/atoms/collapse/Collapse'
import { ButtonInList } from '../../componentLibrary/atoms/button/ButtonInList'


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
    <MarginVertical>
      <Collapse title="Why doesn't my doctor have a star rating?" >
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac vulputate neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl lectus, bibendum et elit vitae, hendrerit aliquet eros. Curabitur placerat a arcu et efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a massa egestas orci ornare viverra. Donec malesuada eget lorem at dictum. Duis id sollicitudin enim, et condimentum nisi. In pellentesque elit ac consequat tempus. Curabitur tincidunt tincidunt sem, quis porta est gravida sed. Phasellus auctor, sem ac suscipit ultrices, mi erat lacinia nisi, eu imperdiet metus turpis eget leo. In vestibulum, magna eu mattis tempor, tellus ipsum molestie purus, sed mattis metus mi a justo. Integer tellus turpis, tempor sit amet ex ut, tincidunt pharetra metus. In rhoncus ipsum eu vehicula condimentum.

Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla tincidunt auctor finibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas enim purus, fringilla nec sapien quis, fringilla tincidunt libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin porttitor libero id velit mattis, quis luctus mi pellentesque. Etiam vehicula interdum pellentesque. Sed eleifend et nisl in accumsan. Quisque vestibulum ex nibh, at scelerisque turpis venenatis eget. Mauris mollis lorem quis odio ullamcorper scelerisque.
        </p>
      </Collapse>
      <Collapse title="Does Wellglo have an app?" >
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac vulputate neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl lectus, bibendum et elit vitae, hendrerit aliquet eros. Curabitur placerat a arcu et efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a massa egestas orci ornare viverra. Donec malesuada eget lorem at dictum. Duis id sollicitudin enim, et condimentum nisi. In pellentesque elit ac consequat tempus. Curabitur tincidunt tincidunt sem, quis porta est gravida sed. Phasellus auctor, sem ac suscipit ultrices, mi erat lacinia nisi, eu imperdiet metus turpis eget leo. In vestibulum, magna eu mattis tempor, tellus ipsum molestie purus, sed mattis metus mi a justo. Integer tellus turpis, tempor sit amet ex ut, tincidunt pharetra metus. In rhoncus ipsum eu vehicula condimentum.
        </p>
      </Collapse>
      <Collapse title="Why isn't my doctor listed on your site?" >
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac vulputate neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl lectus, bibendum et elit vitae, hendrerit aliquet eros. Curabitur placerat a arcu et efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a massa egestas orci ornare viverra. Donec malesuada eget lorem at dictum. Duis id sollicitudin enim, et condimentum nisi. In pellentesque elit ac consequat tempus. Curabitur tincidunt tincidunt sem, quis porta est gravida sed. Phasellus auctor, sem ac suscipit ultrices, mi erat lacinia nisi, eu imperdiet metus turpis eget leo. In vestibulum, magna eu mattis tempor, tellus ipsum molestie purus, sed mattis metus mi a justo. Integer tellus turpis, tempor sit amet ex ut, tincidunt pharetra metus. In rhoncus ipsum eu vehicula condimentum.
        </p>
      </Collapse>
    </MarginVertical>
    <MarginVertical>
      <ButtonInList title={'Plastic Surgeon'} imageSrc={'/assets/cosmetic.svg'} />
    </MarginVertical>
  </div>
)
