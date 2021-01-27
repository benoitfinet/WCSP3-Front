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

export const PostListEvent = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id"/>
      <TextField source="title" />
      <EditButton/>
    </Datagrid>
  </List>
);

export const PostEditEvent = (props) => (
  <Edit title="Edit a Post" {...props}>
    <SimpleForm>
    <TextInput source="id"/>
      <TextInput source="title" />
      <TextInput source="location" />
    </SimpleForm>
  </Edit>
);

// const PostTitle = ({ record }) => {
//   return <span>Post {record ? `"${record.title}"` : ''}</span>;
// };

export const PostCreateEvent = (props) => (
  <Create title="Create a Post" {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="title" />
      <TextInput source="location" />
    </SimpleForm>
  </Create>
);
