import { Switch, Route } from 'react-router-dom';

const HomeRouter = (): JSX.Element => (
  <Switch>
    <Route path="/home">
      <h1>HOME</h1>
    </Route>
  </Switch>
);

export default HomeRouter;
