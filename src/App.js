import { Switch, Route} from "react-router-dom";
import { routes } from "./routes/routes";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hi
      </header>
       <nav className="main-body">
        <Switch>
          {routes &&
            routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.Component}
              />
            ))}
        </Switch>
      </nav>
    </div>
  );
}

export default App;
