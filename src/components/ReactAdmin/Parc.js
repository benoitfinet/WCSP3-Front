/* eslint-disable react/prop-types */
import * as React from 'react';
import {
  List,
  Datagrid,
  SimpleForm,
  TextField,
  TextInput,
  EditButton,
  ImageField,
  Edit
} from 'react-admin';
import BookIcon from '@material-ui/icons/Book';
export const PostIcon = BookIcon;

export const PostListParc = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
        <TextField source="title" />
        <ImageField source="image" />
      <EditButton/>
    </Datagrid>
  </List>
);

export const PostEditParc = (props) => (
  <Edit title="Réalisez ici vos modifications" {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput multiline source="text" />
      <TextInput multiline source="image" />
    </SimpleForm>
  </Edit>
);
