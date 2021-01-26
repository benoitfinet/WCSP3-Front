import * as React from 'react';
import {
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput
} from 'react-admin';

const PostEdit = (props) => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="drink" reference="drink">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <TextInput source="id" />
      <TextInput source="name" />
      <TextInput multiline source="price" />
      <TextInput multiline source="description" />
    </SimpleForm>
  </Create>
);
export default PostEdit;
