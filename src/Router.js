import Home from './Components/Home/Home.js';
import Activites from './Components/Activites/Activites';

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
