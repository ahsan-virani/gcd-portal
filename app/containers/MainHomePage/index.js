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

import SlideImg from './slide.jpg';
import Img from './Img';

import { Carousel} from 'react-bootstrap';
import { Link } from 'react-router';

// import { loadRepos } from '../App/actions';
// import { changeUsername } from './actions';
// import { makeSelectUsername } from './selectors';

export default class MainHomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
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
      <Carousel controls={false} indicators={false}>
      <Carousel.Item>
        <Img src={SlideImg} alt="GlobalCoinDex" width={900} height={500}/>
      </Carousel.Item>
      <Carousel.Item>
        <Img src={SlideImg} alt="GlobalCoinDex" width={900} height={500}/>
      </Carousel.Item>
      <Carousel.Item>
        <Img src={SlideImg} alt="GlobalCoinDex" width={900} height={500}/>
      </Carousel.Item>
    </Carousel>
    <div className="caption">
                        <h1><span>THE</span> NEXT-GENERATION</h1>
                        <h2>DIGITAL CURRENCY <span>EXCHANGE</span></h2>
                        <div className="learnmore">
                          <Link to="/">Learn More</Link>
                          </div>
                        <div className="contactmore">
                          <Link to="/contact">Contact More</Link>
                          </div>
                        <div className="clear"></div>
                    </div>
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
