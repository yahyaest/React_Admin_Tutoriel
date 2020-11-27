import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import PostList from './components/PostList'
import PostCreate from './components/PostCreate'
import PostEdit from './components/PostEdit'
import UserList from './components/UserList'
import UserCreate from './components/UserCreate'
import UserEdit from './components/UserEdit'
import CommentList from './components/CommentList'
import CommentCreate from './components/CommentCreate'
import CommentEdit from './components/CommentEdit'

function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource
        name='posts'
        list={PostList}
        create={PostCreate}
        edit={PostEdit}
      />
      <Resource
        name='users'
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
      />
      <Resource
        name='comments'
        list={CommentList}
        create={CommentCreate}
        edit={CommentEdit}
      />
    </Admin>
  )
}

export default App