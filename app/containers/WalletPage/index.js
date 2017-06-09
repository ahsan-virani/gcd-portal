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

import Section from './Section';
import messages from './messages';

import BannerImg from './inner-banner.jpg';
import PlusImg from './plus.png';
import MinusImg from './minus1.png';
import Img from './Img';

import { Table ,Grid, Row ,Col,Clearfix } from 'react-bootstrap';
import { Link } from 'react-router';

// import { loadRepos } from '../App/actions';
// import { changeUsername } from './actions';
// import { makeSelectUsername } from './selectors';

export default class WalletPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
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
          title="Wallet"
          meta={[
            { name: 'description', content: 'Cryptocurrency trading platform' },
          ]}
        />
      <Img src={BannerImg} alt="GlobalCoinDex" />

        <div className="captionBanner">
            <h2>WALLET </h2>
        </div>

        <Grid>
    <Row className="show-grid balances">
            <h1>ACCOUNT BALANCES (ESTIMATED VALUE: 0.00000000 BTC) </h1>

              <Table responsive>
                <thead>
                  <tr>
                    <th>+</th>
                    <th>Currency Name</th>
                    <th>SYMBOL</th>
                    <th>AVAILABLE BALANCE</th>
                    <th>PENDING DEPOSIT</th>
                    <th>RESERVED</th>
                    <th>TOTAL</th>
                    <th>EST. BTC VALUE</th>
                    <th>% CHANGE</th>
                  </tr>
                </thead>
                <tr>
                    <td>
                        <a href="#"><span className="plus"><Img src={PlusImg} alt="GlobalCoinDex" /></span></a>
                        <a href="#"><span className="minus1"><Img src={MinusImg} alt="GlobalCoinDex" /></span></a>
                    </td>
                    <td>2give</td>
                    <td>2give</td>
                    <td>0.0000058</td>
                    <td>0.000007</td>
                    <td>0.000007</td>
                    <td>0.0000058</td>
                    <td>0.0000058</td>
                    <td>12.5%</td>
                </tr>
                <tr>
                    <td>
                      <a href="#"><span className="plus"><Img src={PlusImg} alt="GlobalCoinDex" /></span></a>
                      <a href="#"><span className="minus1"><Img src={MinusImg} alt="GlobalCoinDex" /></span></a>
                    </td>
                    <td>2give</td>
                    <td>2give</td>
                    <td>0.0000058</td>
                    <td>0.000007</td>
                    <td>0.000007</td>
                    <td>0.0000058</td>
                    <td>0.0000058</td>
                    <td>12.5%</td>
                </tr>
                <tr>
                    <td>
                      <a href="#"><span className="plus"><Img src={PlusImg} alt="GlobalCoinDex" /></span></a>
                      <a href="#"><span className="minus1"><Img src={MinusImg} alt="GlobalCoinDex" /></span></a>
                    </td>
                    <td>2give</td>
                    <td>2give</td>
                    <td>0.0000058</td>
                    <td>0.000007</td>
                    <td>0.000007</td>
                    <td>0.0000058</td>
                    <td>0.0000058</td>
                    <td>12.5%</td>
                </tr>
                <tr>
                    <td>
                      <a href="#"><span className="plus"><Img src={PlusImg} alt="GlobalCoinDex" /></span></a>
                      <a href="#"><span className="minus1"><Img src={MinusImg} alt="GlobalCoinDex" /></span></a>
                    </td>
                    <td>2give</td>
                    <td>2give</td>
                    <td>0.0000058</td>
                    <td>0.000007</td>
                    <td>0.000007</td>
                    <td>0.0000058</td>
                    <td>0.0000058</td>
                    <td>12.5%</td>
                </tr>
                <tr>
                    <td>
                      <a href="#"><span className="plus"><Img src={PlusImg} alt="GlobalCoinDex" /></span></a>
                      <a href="#"><span className="minus1"><Img src={MinusImg} alt="GlobalCoinDex" /></span></a>
                    </td>
                    <td>2give</td>
                    <td>2give</td>
                    <td>0.0000058</td>
                    <td>0.000007</td>
                    <td>0.000007</td>
                    <td>0.0000058</td>
                    <td>0.0000058</td>
                    <td>12.5%</td>
                </tr>
                <tr>
                    <td>
                      <a href="#"><span className="plus"><Img src={PlusImg} alt="GlobalCoinDex" /></span></a>
                      <a href="#"><span className="minus1"><Img src={MinusImg} alt="GlobalCoinDex" /></span></a>
                    </td>
                    <td>2give</td>
                    <td>2give</td>
                    <td>0.0000058</td>
                    <td>0.000007</td>
                    <td>0.000007</td>
                    <td>0.0000058</td>
                    <td>0.0000058</td>
                    <td>12.5%</td>
                </tr>
                <tr>
                    <td>
                      <a href="#"><span className="plus"><Img src={PlusImg} alt="GlobalCoinDex" /></span></a>
                      <a href="#"><span className="minus1"><Img src={MinusImg} alt="GlobalCoinDex" /></span></a>
                    </td>
                    <td>2give</td>
                    <td>2give</td>
                    <td>0.0000058</td>
                    <td>0.000007</td>
                    <td>0.000007</td>
                    <td>0.0000058</td>
                    <td>0.0000058</td>
                    <td>12.5%</td>
                </tr>

              </Table>

          </Row>


        <Row className="show-grid pending">
              <Col md={6} sm={12} lg={6} className="pwithdrawls">
                  <h1>PENDING WITHDRAWALS</h1>
                  <table>
                      <tr>
                          <td>+</td>
                          <td>DATE</td>
                          <td>CURRENCY</td>
                          <td>UNITS</td>
                          <td>+</td>
                      </tr>
                      <tr>
                          <td colSpan="5">You have no pending withdrawals.</td>
                      </tr>
                  </table>
              </Col>

              <Col md={6} sm={12} lg={6} className="pdeposits">
                  <h1>PENDING DEPOSITS</h1>
                  <table>
                      <tr>
                          <td>+</td>
                          <td>DATE</td>
                          <td>CURRENCY</td>
                          <td>UNITS</td>
                          <td>+</td>
                      </tr>
                      <tr>
                          <td colSpan="5">You have no pending withdrawals.</td>
                      </tr>
                  </table>
              </Col>
              <Clearfix ></Clearfix>

            <Col md={6} sm={12} lg={6} className="hwithdrawls">
                  <h1>WITHDRAWAL HISTORY</h1>
                  <table>
                      <tr>
                          <td>+</td>
                          <td>DATE</td>
                          <td>CURRENCY</td>
                          <td>UNITS</td>
                          <td>+</td>
                      </tr>
                      <tr>
                          <td colSpan="5">You have no pending withdrawals.</td>
                      </tr>
                  </table>
              </Col>
              <Col md={6} sm={12} lg={6} className="hdeposits">
                  <h1>DEPOSIT HISTORY</h1>
                  <table>
                      <tr>
                          <td>+</td>
                          <td>DATE</td>
                          <td>CURRENCY</td>
                          <td>UNITS</td>
                          <td>+</td>
                      </tr>
                      <tr>
                          <td colSpan="5">You have no pending withdrawals.</td>
                      </tr>
                  </table>
              </Col>
              <Clearfix></Clearfix>

        </Row>

        </Grid>
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
