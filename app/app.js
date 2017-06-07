/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import 'babel-polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyRouterMiddleware, Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import FontFaceObserver from 'fontfaceobserver';
import { useScroll } from 'react-router-scroll';
import { getAsyncInjectors } from './utils/asyncInjectors';
import 'sanitize.css/sanitize.css';

// Import root app
// import App from 'containers/App';

// Import selector for `syncHistoryWithStore`
import { makeSelectLocationState } from 'containers/App/selectors';

// Import Language Provider
import LanguageProvider from 'containers/LanguageProvider';

// Load the favicon, the manifest.json file and the .htaccess file
/* eslint-disable import/no-webpack-loader-syntax */
import '!file-loader?name=[name].[ext]!./favicon.ico';
import '!file-loader?name=[name].[ext]!./manifest.json';
import 'file-loader?name=[name].[ext]!./.htaccess'; // eslint-disable-line import/extensions
/* eslint-enable import/no-webpack-loader-syntax */

import configureStore from './store';

// Import i18n messages
import { translationMessages } from './i18n';

// Import CSS reset and Global Styles
import './global-styles';
// import './global-styles-responsive';

// Import routes
import createRoutes from './routes';

// Observe loading of Open Sans (to remove open sans, remove the <link> tag in
// the index.html file and this observer)
const openSansObserver = new FontFaceObserver('Open Sans', {});

// When Open Sans is loaded, add a font-family using Open Sans to the body
openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
}, () => {
  document.body.classList.remove('fontLoaded');
});

// Create redux store with history
// this uses the singleton browserHistory provided by react-router
// Optionally, this could be changed to leverage a created history
// e.g. `const browserHistory = useRouterHistory(createBrowserHistory)();`
const initialState = {};
const store = configureStore(initialState, browserHistory);

// Sync history and store, as the react-router-redux reducer
// is under the non-default key ("routing"), selectLocationState
// must be provided for resolving how to retrieve the "route" in the state
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: makeSelectLocationState(),
});

const { injectReducer, injectSagas } = getAsyncInjectors(store);
const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};
const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

// Set up the router, wrapping all Routes in the App component
const rootRoute = {
  getComponent(nextState, cb) {
    const importModules = Promise.all([
      // import ('containers/App/reducer'),
      import ('containers/App/sagas'),
      import ('containers/App'),
    ]);

    const renderRoute = loadModule(cb);

    importModules.then(([ sagas, component]) => {
      // injectReducer('app', reducer.default);
      injectSagas(sagas.default);
      renderRoute(component);
    });

    importModules.catch(errorLoading);
  },
  // component: App,
  childRoutes: createRoutes(store),
  onEnter: checkAuth,
};

import {validateToken, validateTokenFailed} from 'containers/App/actions';

function checkAuth (nextState, replace)
{
  console.log("checkAuth called");
  // let token = makeSelectToken();
  let token = sessionStorage.getItem('jwtToken');
  // console.log(token?"logged in":"not logged in");
  // console.log("token on checkAuth: ", token);
  // if(token !== null && token !== "" && token !== undefined  && nextState.location.pathname === '/login')
  if(token !== null && token !== "" && token !== undefined)
    store.dispatch(validateToken(token));
    else {
      store.dispatch(validateTokenFailed);
    }
  // replace("/");
  // console.log("nextState: ", nextState);
  // console.log("replace: ", replace);
}

const render = (messages) => {
  ReactDOM.render(
    <Provider store={store}>
      <LanguageProvider messages={messages}>
        <Router
          history={history}
          routes={rootRoute}
          render={
            // Scroll to top when going to a new page, imitating default browser
            // behaviour
            applyRouterMiddleware(useScroll())
          }
        />
      </LanguageProvider>
    </Provider>,
    document.getElementById('app')
  );
};

// Hot reloadable translation json files
if (module.hot) {
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept('./i18n', () => {
    render(translationMessages);
  });
}

// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
  (new Promise((resolve) => {
    resolve(import('intl'));
  }))
    .then(() => Promise.all([
      import('intl/locale-data/jsonp/en.js'),
      import('intl/locale-data/jsonp/de.js'),
    ]))
    .then(() => render(translationMessages))
    .catch((err) => {
      throw err;
    });
} else {
  render(translationMessages);
}

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
