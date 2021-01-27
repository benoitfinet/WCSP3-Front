/* eslint-disable react/prop-types */
import * as React from 'react';
import {
  List,
  Datagrid,
  SimpleForm,
  TextField,
  TextInput,
  EditButton,
  Edit
} from 'react-admin';
import BookIcon from '@material-ui/icons/Book';
export const PostIcon = BookIcon;

export const PostListInfo = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id"/>
      <TextField source="title" />
      <TextField source="description" />
      <EditButton/>
    </Datagrid>
  </List>
);

export const PostEditInfo = (props) => (
  <Edit title="Edit a Post" {...props}>
    <SimpleForm>
    <TextInput source="id"/>
      <TextInput source="title" />
      <TextInput source="description" />
    </SimpleForm>
  </Edit>
);

// const PostTitle = ({ record }) => {
//   return <span>Post {record ? `"${record.title}"` : ''}</span>;
// };
