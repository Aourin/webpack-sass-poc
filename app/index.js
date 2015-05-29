import React from 'react';

import 'babel/polyfill';
import {default as Welcome} from 'lib/welcome'

const appElement = document.getElementById('app');

React.render(
  <div>
    <Welcome message='Welcome to the Application'>
    </Welcome>
  </div>
  , appElement);