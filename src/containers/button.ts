import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { increment } from '../actions/button';
import Button from '../components/button/index';
import { Reducer } from '../reducers/index';
import { ButtonState } from '../reducers/button';

const mapStateToProps = (state: Reducer): ButtonState => ({
  number: state.buttonReducer.number
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  increment: () => dispatch(increment())
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);
