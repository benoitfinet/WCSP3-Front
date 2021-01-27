import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import httpClient from './httpClient';
import { PostCreate, PostEdit, PostList } from './drink';
import { PostCreateEvent, PostEditEvent, PostListEvent } from './event';
import { PostEditInfo, PostListInfo } from './info';
import PostIcon from '@material-ui/icons/Book';
import Dashboard from './Dashboard';

function AppReactadmin () {
  return (
   <Admin dashboard={Dashboard} dataProvider={jsonServerProvider('http://localhost:5000', httpClient)} >
     <Resource name='drink' list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
     <Resource name='photo' list={PostListEvent} edit={PostEditEvent} create={PostCreateEvent} icon={PostIcon} />
     <Resource name='info' list={PostListInfo} edit={PostEditInfo} icon={PostIcon} />
    </Admin>
  );
}

export default AppReactadmin;
