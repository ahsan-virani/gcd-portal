/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import AppHeader from 'components/AppHeader';
import AppFooter from 'components/AppFooter';
import withProgressBar from 'components/ProgressBar';

const AppWrapper = styled.body`
    font-family: 'Roboto', sans-serif;
    height: 100%;
    width: 100%;
    line-height:1;
`;

export function App(props) {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - GCD"
        defaultTitle="Global Coindex"
        meta={[
          { name: 'description', content: 'A React.js Boilerplate application' },
        ]}
      />
    <AppHeader />
      {React.Children.toArray(props.children)}
      <AppFooter />
    </AppWrapper>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default withProgressBar(App);
