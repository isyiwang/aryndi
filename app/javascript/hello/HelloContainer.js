// @flow

import { connect } from 'react-redux';
import Hello from './Hello';
import { actions } from '../reducers/name';

const mapStateToProps = (state) => {
  console.log('giving state to Hello', state);
  return { name: state.name.name };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateName: (name) => (dispatch(actions.updateName(name))),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
