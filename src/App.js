import logo from './assets/logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact
              render={(props) => <route.component {...props} />}
            ></Route>
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
