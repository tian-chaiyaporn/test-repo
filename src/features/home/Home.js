import React from 'react'
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import { WINDOW_SIZES } from '../../constants/Styles'

import { HeroContainer } from './containers/HeroContainer'
import { FindByCategory } from './components/FindByCategory'
import { FindSpecialist } from './components/FindSpecialist'
import { Testimonies } from './components/Testimonies'
import { SponsorsContainer } from './containers/SponsorsContainer'
import { DoctorReviewContainer } from './containers/DoctorReviewContainer'
import { ArticleContainers } from './containers/ArticleContainers' 

export const Home = () => {
	const matches = useMediaQuery(`(min-width:${WINDOW_SIZES.tablet}px)`);
  return (
    <div>
      <HeroContainer />
      <FindSpecialist />
      { matches && <FindByCategory /> }
      <DoctorReviewContainer />
      <SponsorsContainer />
      <Testimonies />
      <ArticleContainers />
    </div>
  )
}
