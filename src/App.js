import React from 'react';
import './custom.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { Helmet } from "react-helmet";
import { Home, ApplyInfo, About, Brothers, Careers } from './Pages'

class App extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Pi Sigma Eplison - UC Berkeley’s Marketing & Business Fraternity</title>
          <meta name="description" content="Pi Sigma Eplison - UC Berkeley’s Marketing & Business Fraternity" />
          <link href="https://fonts.googleapis.com/css?family=Cormorant+Garamond|Raleway&display=swap" rel="stylesheet"/>

          <meta charSet="utf-8" />
          <link rel="icon" href="favicon.ico" />
        </Helmet>

        <Router>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/brothers">
              <BrothersSwitch/>
            </Route>
            <Route path="/careers/:year">
              <CareersYear />
            </Route>
            <Route path="/careers">
              <Careers />
            </Route>
            <Route path="/apply-info">
              <ApplyInfo />
            </Route>
            <Route path="/apply-app">
              <Home />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

function BrothersSwitch() {
  let match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.path}/:brotherId`}>
        <Brothers />
      </Route>
      <Route path={match.path}>
        <Brothers/>
      </Route>
    </Switch>
  );
}

function BrotherProfile() {
  let { brotherId } = useParams();
  return <Home brotherId={ brotherId } />
}

function CareersSwitch() {
  let match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.path}/:year`}>
        <CareersYear />
      </Route>
      <Route path={match.path}>
        <Careers />
      </Route>
    </Switch>
  );
}

function CareersYear() {
  let { year } = useParams();
  return <Careers year={ year } />
}


export default App;
