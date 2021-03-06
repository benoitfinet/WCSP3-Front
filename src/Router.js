import Home from './components/Home/Home.js';
import Activites from './components/Activites/Activites';
import Groupes from './components/Groupes/Groupes';
import Map from './components/Map/Map';
import Faq from './components/FAQ/AllQuestions';
import Mentions from './components/RulesPages/Mentions';
import Politique from './components/RulesPages/Politique';
import Reglement from './components/RulesPages/Reglement';
import Parc from './components/Parc/Parc';
import TarifsTest from './components/Tarifs/TarifsTest';
import Event from './components/Event/Event';
import Buvette from './components/Buvette/Buvette';

import { Switch, Route } from 'react-router-dom';
import AppReactadmin from './components/ReactAdmin/AppReactadmin.js';
import CalendarPage from './components/Calendar/CalendarPage.jsx';
import Reservation from './components/Reservation/Reservation.js';
import Contact from './components/ContactForm/Contact.js';

const RouterWebSite = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/AppReactAdmin" component={AppReactadmin} />
      <Route path="/Activites/:activity" component={Activites} />
      <Route path="/Groupes/:activity" component={Groupes} />
      <Route path="/nous-trouver" component={Map} />
      <Route path="/Faq" component={Faq} />
      <Route path="/Horaires" component={CalendarPage} />
      <Route path="/Reservation" component={Reservation}/>
      <Route path="/Mentions" component={Mentions} />
      <Route path="/Politique" component={Politique} />
      <Route path="/Reglement" component={Reglement} />
      <Route path="/Parc" component={Parc} />
      <Route path="/Tarifs/:tarifs" component={TarifsTest} />
      <Route path="/Event" component={Event} />
      <Route path="/Buvette" component={Buvette} />
      <Route path="/Contact" component={Contact}/>
    </Switch>
  );
};

export default RouterWebSite;
