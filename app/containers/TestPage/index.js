/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H2 from 'components/H2';
import messages from './messages';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';

export default class TestPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet
          title="Test Page"
          meta={[
            { name: 'description', content: 'Test page of React.js Boilerplate application' },
          ]}
        />
        <H2>
          <FormattedMessage {...messages.header} />
        </H2>
        <List>
          <ListItem>
            <ListItemTitle>
              <FormattedMessage {...messages.testHeader} />
            </ListItemTitle>
            <p>
              <FormattedMessage {...messages.testMessage} />
            </p>
          </ListItem>
        </List>
      </div>
    );
  }
}
