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

export const PostListTarifs = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="title" />
      <EditButton/>
    </Datagrid>
  </List>
);

export const PostEditTarifs = (props) => (
  <Edit title="Réalisez ici vos modifications" {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput multiline source="text" />
      <TextInput multiline source="price" />
    </SimpleForm>
  </Edit>
);
