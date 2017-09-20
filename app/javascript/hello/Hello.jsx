import PropTypes from 'prop-types';
import React from 'react';

export default class Hello extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = { name: this.props.name };
  }

  render() {
    return (
      <div>
        <h3>
          Hello, {this.props.name}!
        </h3>
        <hr />
        <form >
          <label htmlFor="name">
            Say hello to:
          </label>
          <input
            id="name"
            type="text"
            value={this.props.name}
            onChange={(e) => this.props.updateName(e.target.value)}
          />
        </form>
      </div>
    );
  }
}
