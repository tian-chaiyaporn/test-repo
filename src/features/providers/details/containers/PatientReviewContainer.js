import React from 'react'
import styled from 'styled-components'
import { Colors } from '../../../../constants/Styles'
import { PatientReviewInfo } from '../components/PatientReviewInfo'
import { CommentList } from '../components/Comment'
import { Collapse } from '../../../../componentLibrary/atoms/collapse/Collapse'

const CustomCollapse = styled(Collapse)`
  font-family: 'TisaLight';
  font-size: 24px;
  padding: 16px 0;
  border-top: 1px solid ${Colors.VERY_LIGHT_PINK};
`

const mockData = {
  comments: [
    {
      title: 'Suspendisse pharetra posuere',
      body: 'Aenean ultricies, sem vel facilisis consectetur, metus ligula ultrices sem, ac consectetur dui nisi quis quam. Sed augue tortor, hendrerit eu tortor vitae, hendrerit blandit nulla. Aliquam erat volutpat. Pellentesque ut gravida tortor. In hac habitasse platea dictumst. Suspendisse pharetra posuere erat sit amet facilisis. Nunc facilisis lorem ut odio pellentesque aliquam. Vivamus dui massa, sagittis id congue elementum, porttitor quis quam. Pellentesque scelerisque ligula aliquam quam scelerisque, non elementum ex semper.',
      date: 'January 10, 2019',
      name: 'Jonas A',
      isVerified: true,
      overall: 5,
      waitTime: 5,
      bedsideManner: 5
    },
    {
      title: 'Suspendisse pharetra posuere',
      body: 'Aenean ultricies, sem vel facilisis consectetur, metus ligula ultrices sem, ac consectetur dui nisi quis quam. Sed augue tortor, hendrerit eu tortor vitae, hendrerit blandit nulla. Aliquam erat volutpat. Pellentesque ut gravida tortor. In hac habitasse platea dictumst. Suspendisse pharetra posuere erat sit amet facilisis. Nunc facilisis lorem ut odio pellentesque aliquam. Vivamus dui massa, sagittis id congue elementum, porttitor quis quam. Pellentesque scelerisque ligula aliquam quam scelerisque, non elementum ex semper.',
      date: 'January 10, 2019',
      name: 'Jonas A',
      isVerified: true,
      overall: 5,
      waitTime: 5,
      bedsideManner: 5
    },
    {
      title: 'Suspendisse pharetra posuere',
      body: 'Aenean ultricies, sem vel facilisis consectetur, metus ligula ultrices sem, ac consectetur dui nisi quis quam. Sed augue tortor, hendrerit eu tortor vitae, hendrerit blandit nulla. Aliquam erat volutpat. Pellentesque ut gravida tortor. In hac habitasse platea dictumst. Suspendisse pharetra posuere erat sit amet facilisis. Nunc facilisis lorem ut odio pellentesque aliquam. Vivamus dui massa, sagittis id congue elementum, porttitor quis quam. Pellentesque scelerisque ligula aliquam quam scelerisque, non elementum ex semper.',
      date: 'January 10, 2019',
      name: 'Jonas A',
      isVerified: true,
      overall: 5,
      waitTime: 5,
      bedsideManner: 5
    },
  ]
}

export const PatientReviewContainer = (props) => {
  const { comments } = props
  return (
    <div style={{ padding: '20px 0' }} id='reviews'>
      <PatientReviewInfo />
      <CustomCollapse title='How was your experience?' borderColor={Colors.VERY_LIGHT_PINK} >
        <div>test</div>
      </CustomCollapse>
      <CommentList comments={comments || mockData.comments} />
    </div>
  )
}
