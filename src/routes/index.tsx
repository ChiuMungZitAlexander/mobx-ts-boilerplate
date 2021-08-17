import { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import { Loading } from 'src/components';

const LoginRouter = lazy(() => import('src/routes/routers/Login.router'));
const HomeRouter = lazy(() => import('src/routes/routers/Home.router'));

const RouteView = (): JSX.Element => (
  <BrowserRouter basename="/">
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path="/">
          <Link to="/login">Login</Link>
        </Route>
        <Route path="/login" component={LoginRouter} />
        <Route path="/home" component={HomeRouter} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default RouteView;
