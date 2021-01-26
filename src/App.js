import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Footer from './components/Footer';

const generateClassName = createGenerateClassName({
  productionPrefix: 'leg',
});

export default ({ history }) => {

  console.log('Rendering footer...');

  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route path="/">
            <Footer />
          </Route>
        </Switch>
      </Router>
    </StylesProvider>
  );
};
