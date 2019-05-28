import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { FormikTextField } from '../../../../componentLibrary/atoms/textFields/TextField'
import { SmallParagraph } from '../../../../constants/BodyText'
import { MEDIA } from '../../../../constants/Styles'
import { Button } from '../../../../componentLibrary/atoms/button/Button'

const FieldContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
	column-gap: 40px;
  ${MEDIA.phone`grid-template-columns: repeat(1, 1fr);`}
`

export const JoinForm = () => (
	<div
		style={{
			maxWidth: '550px',
			width: '100%',
			padding: '30px',
			backgroundColor: 'white',
			borderRadius: '5px'
		}}>
		<Formik
      initialValues={{
        firstName: '',
        lastName: '',
        salutation: '',
        specialty: '',
				phone: '',
				email: '',
				city: 'Bangkok',
				postalCode: '10220'
      }}
      validate={(values) => {
        let errors = {}
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
						<FieldContainer>
							<TextFieldWithError 
								fieldName='firstName'
								placeholder='First Name'
								label='First Name'
							/>
							<TextFieldWithError 
								fieldName='lastName'
								placeholder='Last Name'
								label='Last Name'
							/>
							<TextFieldWithError 
								fieldName='salutation'
								placeholder='Salutation'
								label='Salutation'
							/>
							<TextFieldWithError 
								fieldName='specialty'
								placeholder='Your Specialty'
								label='Your Specialty'
							/>
							<TextFieldWithError 
								fieldName='phone'
								type='tel'
								placeholder='Direct Phone Number'
								label='Direct Phone Number'
							/>
							<TextFieldWithError 
								fieldName='email'
								type='email'
								placeholder='Email'
								label='Email'
							/>
							<TextFieldWithError 
								fieldName='city'
								placeholder='City'
								label='City'
							/>
							<TextFieldWithError 
								fieldName='postalCode'
								placeholder='Postal Code'
								label='Postal Code'
							/>

						</FieldContainer>
            <Button
              style={{ fontSize: '14px' }}
              type="submit"
              disabled={props.isSubmitting}
              text='Get Started'
              filled
            />
          </Form>
        )
      }
    </Formik>
  </div>
)

const TextFieldWithError = (props) => (
	<Fragment>
		<Field
			label={props.label}
			type={props.type || 'text'}
			name={props.fieldName}
			component={FormikTextField}
			placeholder={props.placeholder}
			style={{ width: '100%', margin: '20px 0'}}
		/>
		<ErrorMessage name={props.fieldName} component={SmallParagraph} />
	</Fragment>
)
