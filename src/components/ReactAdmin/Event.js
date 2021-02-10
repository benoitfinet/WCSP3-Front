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

export const PostListEvent = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <ImageField source="image" />
      <EditButton/>
    </Datagrid>
  </List>
);

export const PostEditEvent = (props) => (
  <Edit title="Réalisez ici vos modifications" {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput multiline source="description" />
      <TextInput multiline source="image" />
    </SimpleForm>
  </Edit>
);
