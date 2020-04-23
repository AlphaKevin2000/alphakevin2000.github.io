import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store'

import AppWrapper from './app/AppWrapper'
//import * as serviceWorker from './serviceWorker';

const store = configureStore();
const locale = navigator.language.split(/[-_]/)[0];  // language without region code

ReactDOM.render(
    <Provider store={store}>
      <AppWrapper locale={locale} />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
