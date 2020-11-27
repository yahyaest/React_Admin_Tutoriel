import React from 'react'
import { Edit, SimpleForm, TextInput,DateInput } from 'react-admin'

const UserEdit = (props) => {
  return (
    <Edit title='Edit Comment' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput disabled source='user_id' />
        <TextInput disabled source='post_id' />
        <TextInput multiline source='body' />
        <DateInput label='Published' source='publishedAt' />
      </SimpleForm>
    </Edit>
  )
}

export default UserEdit
