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

import RegisterImg from './register.jpg';
import Img from './Img';

import { FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button, Grid, Row, Col} from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';

import { register, changeForm } from './actions';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { makeSelectRegisterForm, makeSelectEmail, makeSelectPassword} from './selectors';
import { fromJS } from 'immutable';

const assign = Object.assign || require('object.assign');


export class RegisterPage extends React.PureComponent {

  componentWillReceiveProps(nextProps){
    console.log("nextProps.data.get('registerSuccess'): ", nextProps.data.get('registerSuccess'));
    if(nextProps.data.get('registerSuccess') === true)
      browserHistory.push('/login');
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
                <Img src={RegisterImg} alt="GlobalCoinDex" />
              </Col>

              <Col className="custom-login-form" md={6} sm={12} lg={6} >

                <H2>Create Account</H2>
                    <Form className="form-horizontal" onSubmit={this._onSubmit.bind(this)}>

                      <FormGroup controlId="formHorizontalFirstName">
                        <Col componentClass={ControlLabel} sm={2}>
                          First Name
                        </Col>
                        <Col sm={8}>
                          <FormControl disabled={currentlySending} type="text" value={this.props.firstName} placeholder="Your first name"
                             autoCorrect="off" autoCapitalize="off" spellCheck="false"/>
                        </Col>
                      </FormGroup>

                      <FormGroup controlId="formHorizontalLastName">
                        <Col componentClass={ControlLabel} sm={2}>
                          Last Name
                        </Col>
                        <Col sm={8}>
                          <FormControl disabled={currentlySending} type="email" value={this.props.lastName} placeholder="Your last name" 
                             autoCorrect="off" autoCapitalize="off" spellCheck="false"/>
                        </Col>
                      </FormGroup>

                      <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                          Email
                        </Col>
                        <Col sm={8}>
                          <FormControl disabled={currentlySending} type="email" value={this.props.email} placeholder="Your email address" onChange={this._changeEmail.bind(this)}
                             autoCorrect="off" autoCapitalize="off" spellCheck="false"/>
                        </Col>
                      </FormGroup>

                      <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                          Password
                        </Col>
                        <Col sm={8}>
                          <FormControl disabled={currentlySending} type="password" value={this.props.password} placeholder="••••••••••"  onChange={this._changePassword.bind(this)} />
                        </Col>
                      </FormGroup>


                      <FormGroup>
                        <Col smOffset={2} sm={10}>
                          <Button type="submit" disabled={currentlySending}>
                            {!currentlySending? "Register" : "Loading ..."}
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
    this.props.onRegister(formSt.get('email'), formSt.get('password'));
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onChangeForm: (newState) => dispatch(changeForm(newState)),
    onRegister: (email, password) => {
      dispatch(register(email, password));
    },
  };
}

const mapStateToProps = createStructuredSelector({
  data: makeSelectRegisterForm(),
  email: makeSelectEmail,
  password: makeSelectPassword,
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
