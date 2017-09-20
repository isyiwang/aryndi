// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import type { RouterHistory } from 'react-router-dom';

import HelloContainer from './hello/HelloContainer';
import ZooContainer from './zoo/ZooContainer';

class App extends Component<{}> {
  render() {
    return (
      <div className="App">
        <Route
          component={ HelloContainer }
          exact path="/hello"
        />
        <Route
          path="/zoo/:id"
          render={props => (<ZooContainer id={props.match.params.id} />)}
        />
      </div>
    );
  }
}

export default withRouter(App);
