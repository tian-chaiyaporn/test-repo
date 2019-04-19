import React from 'react'

import { HeroContainer } from './containers/HeroContainer'
import { FindByCategory } from './components/FindByCategory'
import { FindSpecialist } from './components/FindSpecialist'
import { Testimonies } from './components/Testimonies'
import { SponsorsContainer } from './containers/SponsorsContainer'
import { DoctorReviewContainer } from './containers/DoctorReviewContainer'
import { ArticleContainers } from './containers/ArticleContainers' 

export const Home = () => {
  return (
    <div>
      <HeroContainer />
      <FindSpecialist />
      <FindByCategory />
      <DoctorReviewContainer />
      <SponsorsContainer />
      <Testimonies />
      <ArticleContainers />
    </div>
  )
}
