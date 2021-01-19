import Home from './components/Home/Home.js';
import Activites from './components/Activites/Activites';

import { Switch, Route } from 'react-router-dom';

const RouterWebSite = () => {
  return (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Activites" component={Activites} />
        </Switch>
  );
};

export default RouterWebSite;
