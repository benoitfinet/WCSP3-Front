import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import httpClient from './httpClient';
import { PostCreateEvent, PostEditEvent, PostListEvent } from './event';
import { PostEditInfo, PostListInfo } from './info';
import { PostEditHome, PostListHome } from './home';
import PostIcon from '@material-ui/icons/Book';
import Dashboard from './Dashboard';

function AppReactadmin () {
  return (
   <Admin dashboard={Dashboard} dataProvider={jsonServerProvider('http://localhost:5000', httpClient)} >
     <Resource name='photo' list={PostListEvent} edit={PostEditEvent} create={PostCreateEvent} icon={PostIcon} />
     <Resource name='info' list={PostListInfo} edit={PostEditInfo} icon={PostIcon} />
     <Resource name='home' list={PostListHome} edit={PostEditHome} icon={PostIcon} />
    </Admin>
  );
}

export default AppReactadmin;
