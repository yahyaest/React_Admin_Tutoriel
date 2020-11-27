import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from 'react-admin'

const UserList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='body' />
        <DateField source='created_at' />
        <EditButton basePath='/comments' />
        <DeleteButton basePath='/comments' />
      </Datagrid>
    </List>
  )
}

export default UserList
