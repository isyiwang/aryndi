// @flow

import { connect } from 'react-redux';
import Hello from './Hello';
import { actions, getName } from '../reducers/name';

const mapStateToProps = (state, ownProps) => {
  return { name: ownProps['name'] || getName(state) };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateName: (name) => (dispatch(actions.updateName(name))),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
