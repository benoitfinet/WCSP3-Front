import * as React from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, TextField, TextInput } from 'react-admin';
import BookIcon from '@material-ui/icons/Book';
export const PostIcon = BookIcon;

export const PostList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
             <TextField source="description" />
            <TextField source="price" />
            {/* <EditButton basePath="/posts" /> */}
        </Datagrid>
    </List>
);

// const PostTitle = ({ record }) => {
//   return <span>Post {record ? `"${record.title}"` : ''}</span>;
// };

export const PostEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput multiline source="description" />
            <TextInput source="price" />
        </SimpleForm>
    </Edit>
);

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
