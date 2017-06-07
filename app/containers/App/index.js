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
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import AppHeader from 'components/AppHeader';
import AppFooter from 'components/AppFooter';
import withProgressBar from 'components/ProgressBar';

import { validateToken, validateTokenSuccess, validateTokenFailed} from './actions';
import {makeSelectToken} from './selectors';

// import Router from 'react-router';

const AppWrapper = styled.body`
    font-family: 'Roboto', sans-serif;
    height: 100%;
    width: 100%;
    line-height:1;
`;
// export class LoginPage extends React.PureComponent
export class App extends React.PureComponent {

  componentDidMount(){
    // console.log("componentDidMount");
    // const user = this.props.loadUserFromToken();
    // console.log("user: ", user);
    // sessionStorage.setItem('jwtToken', '');
    // this.props.loadUserFromToken(this.props.token);
  }

  componentWillReceiveProps(newProps){

  }

  render()
  {return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - GCD"
        defaultTitle="Global Coindex"
        meta={[
          { name: 'description', content: 'A React.js Boilerplate application' },
        ]}
      />
    <AppHeader />
      {React.Children.toArray(this.props.children)}
      <AppFooter />
    </AppWrapper>
  );}
}

App.propTypes = {
  children: React.PropTypes.node,
};

export function mapDispatchToProps(dispatch) {
  return {
    loadUserFromToken: (token) => {
      // let token = sessionStorage.getItem('jwtToken');
      // let token = token;
      if(!token || token === '') {//if there is no token, dont bother
      dispatch(validateTokenFailed());
        return;
      }//fetch user from token (if server deems it’s valid token)
      console.log(dispatch);
      console.log("loadUserFromToken: token: ", token);
      dispatch(validateToken(token));
 },
    onLogin: (email, password) => {
      dispatch(login(email, password));
    },
  };
}

const mapStateToProps = createStructuredSelector({
  token: makeSelectToken()
});

export default connect(null, mapDispatchToProps)(App);
