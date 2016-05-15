'use strict';

import React, { Component } from 'react-native';
import {bindActionCreators} from 'redux';
import Counter from '../components/counter';
import * as counterActions from '../actions/counterActions';
import { connect } from 'react-redux';
import {Scene, Router} from 'react-native-router-flux';

// @connect(state => ({
//   state: state.counter
// }))
class CounterApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;

    return (
		<Router>
		    <Scene key="root">
			  	<Scene key="counter" component={Counter} title="Login" counter={state.count} {...actions} />
	  		</Scene>
	  </Router>
    );
  }
}

export default connect(state => ({
    state: state.counter
  }),
  (dispatch) => ({
    actions: bindActionCreators(counterActions, dispatch)
  })
)(CounterApp);
