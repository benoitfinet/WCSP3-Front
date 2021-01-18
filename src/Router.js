import Home from './components/Home/Home.js';
import Activites from './components/Activites/Activites';
import Groupes from './components/Groupes/Groupes';
import Map from './components/Map/Map';
import Faq from './components/FAQ/AllQuestions';

import { Switch, Route } from 'react-router-dom';

const RouterWebSite = () => {
  return (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Activites" component={Activites} />
          <Route path="/Groupes" component={Groupes} />
          <Route path="/Ounoustrouver" component={Map} />
          <Route path="/Tarifs" component={Faq} />
        </Switch>
  );
};

export default RouterWebSite;