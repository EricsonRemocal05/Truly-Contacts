import logo from './assets/logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { GlobalProvider } from './context/Provider';

function App() {
  return (
    <GlobalProvider>
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
    </GlobalProvider>
  );
}

export default App;
