import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import httpClient from './httpClient';
import { PostCreate, PostEdit, PostList } from './drink';

function AppReactadmin () {
  return (
   <Admin dataProvider={jsonServerProvider('http://localhost:3000', httpClient)}>
     <Resource name='drink' list={PostList} edit={PostEdit} create={PostCreate} />
    </Admin>
  );
}

export default AppReactadmin;
