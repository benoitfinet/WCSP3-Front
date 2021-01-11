import Home from './components/Home/Home.js';
import Activites from './components/Activites/Activites';
import Groupes from './components/Groupes/Groupes';

import { Switch, Route } from 'react-router-dom';

const RouterWebSite = () => {
  return (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Activites" component={Activites} />
          <Route path="/Groupes" component={Groupes} />
        </Switch>
  );
};

export default RouterWebSite;
