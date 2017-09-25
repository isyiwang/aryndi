// @flow

import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import type { OperationComponent, QueryProps } from 'react-apollo';
import gql from 'graphql-tag';

type TAnimal = {
  id: string,
  name: string,
  gender: string,
  species: string,
};

type TZoo = {
  name: string,
  animals: TAnimal[],
};

type TResponse = {
  zoo: TZoo,
};

type TProps = TResponse & QueryProps;

class Zoo extends Component<TProps> {
  render() {
    const { loading, zoo } = this.props;

    if (loading) {
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

const ZOO_QUERY = gql`
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
`;

const queryWrapper: OperationComponent<TResponse, {/* InputProps */}, TProps> = graphql(ZOO_QUERY, {
  props: ({ data }) => ({ ...data }),
});

export default queryWrapper(Zoo);
