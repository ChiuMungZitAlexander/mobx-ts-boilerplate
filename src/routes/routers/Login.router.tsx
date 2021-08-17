import { Switch, Route, Redirect, Link } from 'react-router-dom';

const LoginRouter = (): JSX.Element => (
  <Switch>
    <Route exact path="/login">
      <Redirect to="/login/account" />
    </Route>
    <Route path="/login/account">
      <Link to="/login/sms">TO SMS</Link>
      <p>
        <Link to="/home">Login</Link>
      </p>
    </Route>
    <Route path="/login/sms">
      <Link to="/login/account">TO account</Link>
      <p>
        <Link to="/home">Login</Link>
      </p>
    </Route>
  </Switch>
);

export default LoginRouter;
