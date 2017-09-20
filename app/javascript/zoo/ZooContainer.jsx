// @flow

import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class Zoo extends Component<{}> {
  render() {
    const { loading, zoo } = this.props.data;

    if (this.props.data.loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h4>{zoo.name}</h4>
        <ul>
          {
            zoo.animals.map((animal) => (
              <li key={animal.id}>{animal.name}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default graphql(gql`
  query ZooQuery($id: ID!) {
    zoo(id: $id) {
      name,
      animals {
        id,
        name,
        gender,
        species
      }
    }
  }
`)(Zoo);
