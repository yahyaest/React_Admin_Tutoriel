import React from 'react'
import {Pagination,Filter, TextInput,SearchInput,
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from 'react-admin'

const PostPagination = props => <Pagination rowsPerPageOptions={[5, 10, 25, 50, 100]} {...props} />;

const PostFilter = (props) => (
  <Filter {...props}>
      <SearchInput source="q" alwaysOn />
      <TextInput label="Title" source="title" defaultValue="Post" />
  </Filter>
);

const PostList = (props) => {
  return (
  <List {...props} filters={<PostFilter />}  pagination={<PostPagination />} perPage={5}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='title' />
        <DateField source='publishedAt' />
        <EditButton basePath='/posts' />
        <DeleteButton basePath='/posts' />
      </Datagrid>
    </List>
  )
}

export default PostList