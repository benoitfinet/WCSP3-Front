/* eslint-disable react/prop-types */
import * as React from 'react';
import {
  List,
  Datagrid,
  Create,
  SimpleForm,
  TextField,
  TextInput,
  EditButton,
  Edit
} from 'react-admin';
import BookIcon from '@material-ui/icons/Book';
export const PostIcon = BookIcon;

export const PostList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id"/>
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="price" />
      <EditButton/>
    </Datagrid>
  </List>
);

export const PostEdit = (props) => (
  <Edit title="Edit a Post" {...props}>
    <SimpleForm>
    <TextInput source="id"/>
      <TextInput source="name" />
      <TextInput source="description" />
      <TextInput source="price" />
    </SimpleForm>
  </Edit>
);

// const PostTitle = ({ record }) => {
//   return <span>Post {record ? `"${record.title}"` : ''}</span>;
// };

export const PostCreate = (props) => (
  <Create title="Create a Post" {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <TextInput multiline source="description" />
      <TextInput source="price" />
    </SimpleForm>
  </Create>
);
