import React from 'react';

import 'babel/polyfill';
import {default as Welcome} from 'lib/welcome';

import 'test-webpack-poc-styles'; //Load right from node_module
//import 'styles/app.scss';       //Load from a local file which imports
const appElement = document.getElementById('app');

React.render(
  <div>
    <Welcome message='Welcome to the Application'>
    </Welcome>
  </div>
  , appElement);