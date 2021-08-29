import './styles/app.css';
import React from 'react';
import Home from './pages/Home';
import Search from './pages/Search';
import NotFound from './pages/404';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Category from './pages/Category';
import Register from './pages/Register';
import Login from './pages/Login';
import Orders from './pages/Orders';
import api from './api';
import Panel from './pages/Panel';

function App() {
  let [isAdmin, setIsAdmin] = React.useState(false);
  React.useEffect(() => {
    let getAdmin = async () => {
      const result = await api.isAdmin();
      setIsAdmin(result);
    }
    getAdmin();
  }, []);
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/category/:name">
          <Category />
        </Route>
        <Route path="/auth/register">
          <Register />
        </Route>
        <Route path="/auth/login">
          <Login />
        </Route>
        <Route path="/orders">
          <Orders />
        </Route>
        <Route path="/panel">
          {
            isAdmin
            ?
            <Panel />
            :
            <Redirect to={'/'} />
          }
        </Route>
        <Route path = "*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
