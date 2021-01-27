import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import httpClient from './httpClient';
import { PostCreate, PostEdit, PostList } from './drink';
import { PostCreateEvent, PostEditEvent, PostListEvent } from './event';
import PostIcon from '@material-ui/icons/Book';
import Dashboard from './Dashboard';

function AppReactadmin () {
  return (
   <Admin dashboard={Dashboard} dataProvider={jsonServerProvider('http://localhost:3000', httpClient)} >
     <Resource name='drink' list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
     <Resource name='photo' list={PostListEvent} edit={PostEditEvent} create={PostCreateEvent} icon={PostIcon} />

    </Admin>
  );
}

export default AppReactadmin;
