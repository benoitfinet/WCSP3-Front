import Home from './components/Home/Home.js';
import Activites from './components/Activites/Activites';
import Groupes from './components/Groupes/Groupes';
import Map from './components/Map/Map';
import Faq from './components/FAQ/AllQuestions';
import Mentions from './components/RulesPages/Mentions';
import Politique from './components/RulesPages/Politique';
import Reglement from './components/RulesPages/Reglement';
import Parc from './components/Parc/Parc';
import Event from './components/Event/Event';

import { Switch, Route } from 'react-router-dom';
import CalendarPage from './components/Calendar/CalendarPage.jsx';

const RouterWebSite = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Activites" component={Activites} />
      <Route path="/Groupes" component={Groupes} />
      <Route path="/Ounoustrouver" component={Map} />
      <Route path="/Faq" component={Faq} />
      <Route path="/Horaires" component={CalendarPage} />
      <Route path="/Mentions" component={Mentions} />
      <Route path="/Politique" component={Politique} />
      <Route path="/Reglement" component={Reglement} />
      <Route path="/Parc" component={Parc} />
      <Route path="/Event" component={Event} />
    </Switch>
  );
};

export default RouterWebSite;
