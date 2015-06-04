import React from 'react';

import 'babel/polyfill';
import {default as Welcome} from 'lib/welcome';
import 'styles/app.scss';

const appElement = document.getElementById('app');

React.render(
  <div>
    <Welcome message='Welcome to the Application'>
    </Welcome>
  </div>
  , appElement);