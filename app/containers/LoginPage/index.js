/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

// import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import H2 from 'components/H2';
// import ReposList from 'components/ReposList';
// import AtPrefix from './AtPrefix';
// import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';

import LoginImg from './login.jpg';
import Img from './Img';

import { FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button, Grid, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router';

// import { loadRepos } from '../App/actions';
// import { changeUsername } from './actions';
// import { makeSelectUsername } from './selectors';
//
// function fieldGroup({ id, label, help, ...props }) {
// return (
// <FormGroup controlId={id}>
//   <ControlLabel>{label}</ControlLabel>
//   <FormControl {...props} />
//   {help && <HelpBlock>{help}</HelpBlock>}
// </FormGroup>
// );
// }

// fieldGroup.propTypes = {
//   id: React.PropTypes.string,
//   label: React.PropTypes.string,
//   help: React.PropTypes.oneOfType([
//     React.PropTypes.string,
//     React.PropTypes.object,
//   ]),
// };

export default class LoginPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  // componentDidMount() {
  //   if (this.props.username && this.props.username.trim().length > 0) {
  //     this.props.onSubmitForm();
  //   }
  // }
  // shouldComponentUpdate() {
  //   return false;
  // }

  render() {
    // const { loading, error, repos } = this.props;
    // const reposListProps = {
    //   loading,
    //   error,
    //   repos,
    // };

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
              <Col md={6} sm={12} lg={6}>
                <Form className="form-horizontal">
                      <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                          Email
                        </Col>
                        <Col sm={10}>
                          <FormControl type="email" placeholder="Email" />
                        </Col>
                      </FormGroup>

                      <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                          Password
                        </Col>
                        <Col sm={10}>
                          <FormControl type="password" placeholder="Password" />
                        </Col>
                      </FormGroup>


                      <FormGroup>
                        <Col smOffset={2} sm={10}>
                          <Button type="submit">
                            Sign in
                          </Button>
                        </Col>
                      </FormGroup>
                    </Form>
              </Col>
            </Row>

    </div>
    );
  }
}

// HomePage.propTypes = {
//   loading: React.PropTypes.bool,
//   error: React.PropTypes.oneOfType([
//     React.PropTypes.object,
//     React.PropTypes.bool,
//   ]),
//   repos: React.PropTypes.oneOfType([
//     React.PropTypes.array,
//     React.PropTypes.bool,
//   ]),
//   onSubmitForm: React.PropTypes.func,
//   username: React.PropTypes.string,
//   onChangeUsername: React.PropTypes.func,
// };

// export function mapDispatchToProps(dispatch) {
//   return {
//     onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
//     onSubmitForm: (evt) => {
//       if (evt !== undefined && evt.preventDefault) evt.preventDefault();
//       dispatch(loadRepos());
//     },
//   };
// }

// const mapStateToProps = createStructuredSelector({
//   repos: makeSelectRepos(),
//   username: makeSelectUsername(),
//   loading: makeSelectLoading(),
//   error: makeSelectError(),
// });

// Wrap the component to inject dispatch and state into it
// export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
