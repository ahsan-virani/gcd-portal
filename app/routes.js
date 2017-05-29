// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from './utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store);

  return [
    // {
    //   path: '/',
    //   name: 'home',
    //   getComponent(nextState, cb) {
    //     const importModules = Promise.all([
    //       import ('containers/HomePage/reducer'),
    //       import ('containers/HomePage/sagas'),
    //       import ('containers/HomePage'),
    //     ]);
    //
    //     const renderRoute = loadModule(cb);
    //
    //     importModules.then(([reducer, sagas, component]) => {
    //       injectReducer('home', reducer.default);
    //       injectSagas(sagas.default);
    //
    //       renderRoute(component);
    //     });
    //
    //     importModules.catch(errorLoading);
    //   },
    // },
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        // const importModules = Promise.all([
        //   import ('containers/MainHomePage/reducer'),
        //   import ('containers/MainHomePage/sagas'),
        //
        // ]);
        import ('containers/MainHomePage')
        .then(loadModule(cb))
          .catch(errorLoading);

        // const renderRoute = loadModule(cb);
        //
        // importModules.then(([reducer, sagas, component]) => {
        //   injectReducer('home', reducer.default);
        //   injectSagas(sagas.default);
        //
        //   renderRoute(component);
        // });
        //
        // importModules.catch(errorLoading);
      },
    },
    {
      path: '/features',
      name: 'features',
      getComponent(nextState, cb) {
        import ('containers/FeaturePage')
        .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
    {
      path: '/login',
      name: 'login',
      getComponent(nextState, cb) {
        import ('containers/LoginPage')
        .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
    {
      path: '/test',
      name: 'test',
      getComponent(nextState, cb) {
        import ('containers/TestPage')
        .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   getComponent(nextState, cb) {
    //     import ('containers/AboutPage')
    //     .then(loadModule(cb))
    //       .catch(errorLoading);
    //   },
    // },
    // {
    //   path: '/security',
    //   name: 'security',
    //   getComponent(nextState, cb) {
    //     import ('containers/SecurityPage')
    //     .then(loadModule(cb))
    //       .catch(errorLoading);
    //   },
    // },
    // {
    //   path: '/marketstats',
    //   name: 'marketstats',
    //   getComponent(nextState, cb) {
    //     import ('containers/MarketStatsPage')
    //     .then(loadModule(cb))
    //       .catch(errorLoading);
    //   },
    // },
    // {
    //   path: '/changelog',
    //   name: 'changelog',
    //   getComponent(nextState, cb) {
    //     import ('containers/ChangeLogPage')
    //     .then(loadModule(cb))
    //       .catch(errorLoading);
    //   },
    // },
    // {
    //   path: '/contact',
    //   name: 'contact',
    //   getComponent(nextState, cb) {
    //     import ('containers/ContactPage')
    //     .then(loadModule(cb))
    //       .catch(errorLoading);
    //   },
    // },

    {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import ('containers/NotFoundPage')
        .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
