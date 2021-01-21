import Home from './Components/Home/Home.js';
import Activites from './Components/Activites/Activites';
import Groupes from './Components/Groupes/Groupes';
import Map from './Components/Map/Map';
import Faq from './Components/FAQ/AllQuestions';

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
