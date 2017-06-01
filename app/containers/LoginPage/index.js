/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H2 from 'components/H2';

import Form from './Form';

import LoginImg from './login.jpg';
import Img from './Img';

import { FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button, Grid, Row, Col} from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';

import { login, changeForm } from './actions';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { makeSelectLoginForm, makeSelectEmail, makeSelectPassword} from './selectors';
import { fromJS } from 'immutable';

const assign = Object.assign || require('object.assign');


export class LoginPage extends React.PureComponent {

  componentWillReceiveProps(nextProps){
    console.log("nextProps.data.get('loggedIn'): ", nextProps.data.get('loggedIn'));
    if(nextProps.data.get('loggedIn') === true)
    browserHistory.push('/');
  }

  render() {
		const currentlySending = this.props.data.get('currentlySending');
    const formState = this.props.data.get('formState');

    // let this.props.data.currentlySending

    return (
      <div >
        <Helmet
          title="Home"
          meta={[
            { name: 'description', content: 'Cryptocurrency trading platform' },
          ]}
        />


          <Row className="show-grid">
              <Col md={6} sm={12} lg={6}>
                <Img src={LoginImg} alt="GlobalCoinDex" />
              </Col>
              <Col md={6} sm={12} lg={6} style={{paddingTop: 200}}>
                <Form className="form-horizontal" onSubmit={this._onSubmit.bind(this)}>
                      <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                          Email
                        </Col>
                        <Col sm={10}>
                          <FormControl disabled={currentlySending} type="email" value={this.props.email} placeholder="Your email address" onChange={this._changeEmail.bind(this)}
                             autoCorrect="off" autoCapitalize="off" spellCheck="false"/>
                        </Col>
                      </FormGroup>

                      <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                          Password
                        </Col>
                        <Col sm={10}>
                          <FormControl disabled={currentlySending} type="password" value={this.props.password} placeholder="••••••••••"  onChange={this._changePassword.bind(this)} />
                        </Col>
                      </FormGroup>


                      <FormGroup>
                        <Col smOffset={2} sm={10}>
                          <Button type="submit" disabled={currentlySending}>
                            {!currentlySending? "Sign in" : "Signing in ..."}
                          </Button>
                        </Col>
                      </FormGroup>
                    </Form>
              </Col>
            </Row>

    </div>
    );
  }

  _changeEmail(evt) {
    // var newState = this.props.data.setIn(['formState', 'email'], evt.target.value).get('formState');
    var newState = fromJS({
      email: evt.target.value,
      password: this.props.password
    });

    this._emitChange(newState);
  }

  _changePassword(evt) {
    // var newState = this.props.data.setIn(['formState', 'password'], evt.target.value).get('formState');
    var newState = fromJS({
      email: this.props.email,
      password: evt.target.value
    });
    this._emitChange(newState);
  }

  _emitChange(newState) {
    this.props.onChangeForm(newState);
  }

  _onSubmit(evt) {
    evt.preventDefault();
    var formSt = this.props.data.get('formState');
    this.props.onLogin(formSt.get('email'), formSt.get('password'));
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onChangeForm: (newState) => dispatch(changeForm(newState)),
    onLogin: (email, password) => {
      dispatch(login(email, password));
    },
  };
}

const mapStateToProps = createStructuredSelector({
  data: makeSelectLoginForm(),
  email: makeSelectEmail,
  password: makeSelectPassword,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
