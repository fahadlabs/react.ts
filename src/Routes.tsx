import React, { lazy, Suspense, ReactElement } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))

function Routes(): ReactElement {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={() => (
          <Suspense fallback={'Loading...'}>
            <Home />
          </Suspense>
        )} />
        <Route path='/about' component={() => (
          <Suspense fallback={'Loading...'}>
            <About />
          </Suspense>
        )} />
      </Switch>
    </Router>
  )
}

export default Routes
