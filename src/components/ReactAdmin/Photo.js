/* eslint-disable react/prop-types */
import * as React from 'react';
import {
  List,
  Datagrid,
  SimpleForm,
  TextField,
  TextInput,
  EditButton,
  Edit,
  ImageField
} from 'react-admin';
import BookIcon from '@material-ui/icons/Book';
export const PostIcon = BookIcon;

export const PostListPhoto = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="title" />
      <ImageField source="location" />
      <EditButton/>
    </Datagrid>
  </List>
);

export const PostEditPhoto = (props) => (
  <Edit title="Réalisez ici vos modifications" {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput multiline source="location" />
    </SimpleForm>
  </Edit>
);

// const PostTitle = ({ record }) => {
//   return <span>Post {record ? `"${record.title}"` : ''}</span>;
// };
