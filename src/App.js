import React from 'react';
import './custom.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams,
  Redirect
} from "react-router-dom";
import { Helmet } from "react-helmet";
import { Home, ApplyInfo, About, Brothers, Careers, BrothersProfile, Contact, ApplyApp } from './Pages'
import { CareersData } from './Data';

class App extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Pi Sigma Eplison - UC Berkeley’s Marketing & Business Fraternity</title>
          <meta name="description" content="Pi Sigma Eplison - UC Berkeley’s Marketing & Business Fraternity" />
          <link href="https://fonts.googleapis.com/css?family=Cormorant+Garamond|Raleway&display=swap" rel="stylesheet"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

          <meta charSet="utf-8" />
          <link rel="icon" href="favicon.ico" />
        </Helmet>

        <Router>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/brothers/:brotherKey">
              <BrotherId/>
            </Route>
            <Route path="/brothers">
              <Brothers/>
            </Route>
            <Route path="/careers/:year">
              <CareersYear />
            </Route>
            <Route path="/careers">
              <Redirect to={`/careers/${CareersData.validYears[0]}`} />
            </Route>
            <Route path="/apply-info">
              <ApplyInfo />
            </Route>
            <Route path="/apply-app">
              <ApplyApp />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Router>
      </div>
    );
  }
}

function BrotherId() {
  let { brotherKey } = useParams();
  return <BrothersProfile brotherKey={ brotherKey } />
}

function CareersYear() {
  let { year } = useParams();
  return <Careers year={ year } />
}


export default App;
