import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require,import/no-extraneous-dependencies
  const a11y = require('react-a11y').default;
  a11y(React, ReactDOM, {
    rules: {
      'img-uses-alt': 'warn',
      'img-redundant-alt': ['warn', ['image', 'photo', 'foto', 'bild']],
    },
  });
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
