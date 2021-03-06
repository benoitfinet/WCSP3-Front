import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import httpClient from './httpClient';
import { PostEditInfo, PostListInfo } from './info';
import { PostEditHome, PostListHome } from './home';
import { PostEditActivity, PostListActivity } from './Activity';
import { PostEditGroupes, PostListGroupes } from './Groupes';
import { PostEditFindus, PostListFindus } from './Findus';
import { PostEditHoraires, PostListHoraires } from './Horaires';
import { PostEditTarifs, PostListTarifs } from './Tarifs';
import { PostEditParc, PostListParc } from './Parc';
import { PostEditPhoto, PostListPhoto } from './Photo';
import { PostEditEvent, PostListEvent } from './Event';
import { PostEditpetitCarousel, PostListpetitCarousel } from './petitCarousel';
import PostIcon from '@material-ui/icons/Book';
import Dashboard from './Dashboard';
import authProvider from './authoProvider';

function AppReactadmin () {
  return (
   <Admin authProvider={authProvider} dashboard={Dashboard} dataProvider={jsonServerProvider('http://localhost:5000', httpClient)} >
     <Resource name='info' list={PostListInfo} edit={PostEditInfo} icon={PostIcon} />
     <Resource name='home' list={PostListHome} edit={PostEditHome} icon={PostIcon} />
     <Resource name='activity' list={PostListActivity} edit={PostEditActivity} icon={PostIcon} />
     <Resource name='groupes' list={PostListGroupes} edit={PostEditGroupes} icon={PostIcon} />
     <Resource name='findus' list={PostListFindus} edit={PostEditFindus} icon={PostIcon} />
     <Resource name='horaires' list={PostListHoraires} edit={PostEditHoraires} icon={PostIcon} />
     <Resource name='tarifs' list={PostListTarifs} edit={PostEditTarifs} icon={PostIcon} />
     <Resource name='parc' list={PostListParc} edit={PostEditParc} icon={PostIcon} />
     <Resource name='photo' list={PostListPhoto} edit={PostEditPhoto} icon={PostIcon} />
     <Resource name='event' list={PostListEvent} edit={PostEditEvent} icon={PostIcon} />
     <Resource name='petitCarousel' list={PostListpetitCarousel} edit={PostEditpetitCarousel} icon={PostIcon} />
    </Admin>
  );
}

export default AppReactadmin;
