import { compose } from 'redux';
import { connect } from 'react-redux';
import CreditsList from '../components/CreditsList';
// import { deleteNote } from '../actions';
import { getAllCredits, getCreditsIsLoading } from '../selectors';
import withLoader from '../hoc/withLoader';

const mSTP = state => ({
  notes: getAllCredits(state),
  isLoading: getCreditsIsLoading(state),
});

const mDTP = dispatch => ({
  //onDeleteCredit: id => dispatch(deleteCredit(id)),
});

export default compose(
  connect(mSTP, mDTP),
  withLoader,
)(CreditsList);
