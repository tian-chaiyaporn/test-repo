import React from 'react'
import { PatientReviewInfo } from '../components/PatientReviewInfo'
import { CommentList } from '../components/Comment'

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
    <div style={{ padding: '20px 0' }}>
      <PatientReviewInfo />
      <div>Rate this doctor</div>
      <CommentList comments={comments || mockData.comments} />
    </div>
  )
}
