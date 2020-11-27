import React from 'react'
import { Create, SimpleForm, TextInput,DateInput } from 'react-admin'

const UserCreate = (props) => {
  return (
    <Create title='Create a Comment' {...props}>
      <SimpleForm>
      <TextInput multiline source='body' />
        <DateInput label='Published' source='publishedAt' />
      </SimpleForm>
    </Create>
  )
}

export default UserCreate
