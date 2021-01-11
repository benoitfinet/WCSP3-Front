import Home from './components/Home/Home.js';

import { Switch, Route } from 'react-router-dom';

const RouterWebSite = () => {
  return (
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
  );
};

export default RouterWebSite;
