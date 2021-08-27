import './App.css';
import Home from './pages/Home';
import Search from './pages/Search';
import NotFound from './pages/404';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path = "/search">
          <Search />
        </Route>
        <Route path = "*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
