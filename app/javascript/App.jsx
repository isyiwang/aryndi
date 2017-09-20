// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import type { RouterHistory } from 'react-router-dom';

import HelloContainer from './hello/HelloContainer';

class App extends Component<{}> {
  render() {
    return (
      <div className="App">
        <Route path="/hello" component={ HelloContainer } />
      </div>
    );
  }
}

export default withRouter(App);
