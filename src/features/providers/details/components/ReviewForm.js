import React from 'react'
import styled from 'styled-components'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { FormikTextField } from '../../../../componentLibrary/atoms/textFields/TextField'
import { Button } from '../../../../componentLibrary/atoms/button/Button'
import { SmallParagraph, SmallSpan } from '../../../../constants/BodyText'
import { Colors } from '../../../../constants/Styles'
import { FormikStar } from '../../../../componentLibrary/atoms/stars/Star'

const StarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 250px;
`

const CustomButton = ({
  field, // { name, value, onChange, onBlur }
  form: { setFieldValue },
  ...props
}) => {
  const isYes = props.text === 'Yes'
  return (
    <Button
      onClick={() => setFieldValue(field.name, isYes, false)}
      type={'button'}
      primaryColor={Colors.AQUA_MARINE}
      {...props}
    >
      {props.text}
    </Button>
  )
}

const StyledButton = styled(CustomButton)`
  max-width: 100px;
  padding: 8px;
  margin-right: 10px;
  font-size: 14px;
`

export const ReviewForm = () => (
  <div>
    <Formik
      initialValues={{
        title: '',
        review: '',
        recommends: true,
        ratings: ''
      }}
      validate={(values) => {
        let errors = {}
        if (!values.overall || !values.waitTime || !values.bedsideManner) {
          errors.ratings = 'Required'
        }
        if (!values.review) {
          errors.review = 'Required'
        }
        return errors
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 4000);
      }}
    >
      {
        (props) => (
          <Form>
            <SmallParagraph>Would you recommend Dr. Boonchai Thanyalakpark to a friend or acquaintance?</SmallParagraph>
            <div style={{ display: 'flex', margin: '0 0 20px 0' }}>
              <Field name="recommends" component={StyledButton} text='Yes' filled={props.values.recommends} />
              <Field name="recommends" component={StyledButton} text='No' filled={!props.values.recommends} />
            </div>
            <div style={{ padding: '30px 0'}}>
              <StarContainer>
                <SmallSpan>Overall</SmallSpan><Field name="overall" component={FormikStar} />
              </StarContainer>
              <StarContainer>
                <SmallSpan>Wait time</SmallSpan><Field name="waitTime" component={FormikStar} />
              </StarContainer>
              <StarContainer>
                <SmallSpan>Bedside manner</SmallSpan><Field name="bedsideManner" component={FormikStar} />
              </StarContainer>
              <ErrorMessage name="ratings" component={SmallParagraph} />
            </div>
            <Field
              label="Title"
              type="title"
              name="title"
              component={FormikTextField}
              placeholder='Your review title (optional)'
              style={{ width: '800px', margin: '0 0 20px 0' }}
            />
            <ErrorMessage name="title" component={SmallParagraph} />
            <Field
              label="Text"
              type="review"
              name="review"
              component={FormikTextField}
              placeholder='Your review'
              multiline
              style={{ width: '800px', margin: '0 0 20px 0' }}
            />
            <ErrorMessage name="review" component={SmallParagraph} />
            <Button
              style={{ maxWidth: '200px', padding: '10px', margin: '20px 0', fontSize: '14px' }}
              type="submit"
              disabled={props.isSubmitting}
              text='Submit my review'
              filled
            />
          </Form>
        )
      }
    </Formik>
  </div>
)
