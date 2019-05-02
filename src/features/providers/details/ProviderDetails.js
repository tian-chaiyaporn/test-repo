import './styles.css';
import React from 'react'
import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

import { OverviewContainer } from './containers/OverviewContainer'
import { PatientReviewContainer } from './containers/PatientReviewContainer'
import { HeadInfoContainer } from './containers/HeadInfoContainer'
import { Breadcrumbs } from '../../../componentLibrary/atoms/breadcrumbs/Breadcrumbs'
import { BreadcrumbLink } from '../../../Router'

export const ProviderDetails = () => {
  return (
    <div>
      <HeadInfoContainer />
      <Tabs
        defaultActiveKey="1"
        renderTabBar={()=><ScrollableInkTabBar style={{ color: '#9e9e9e' }}/>}
        renderTabContent={()=><TabContent />}
        style={{ borderBottom: 'none' }}
      >
        <TabPane tab='Overview' key="1">
          <OverviewContainer />
        </TabPane>
        <TabPane tab='Patient reviews' key="2">
          <PatientReviewContainer />
        </TabPane>
      </Tabs>
      <Breadcrumbs style={{ padding: '50px 0' }}>
        <BreadcrumbLink to="/">
          Wellglo
        </BreadcrumbLink>
        <BreadcrumbLink to="/providers">
          Clinics
        </BreadcrumbLink>
        <BreadcrumbLink to="/providers/details">
          Title
        </BreadcrumbLink>
      </Breadcrumbs>
    </div>
  )
}
