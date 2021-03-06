import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

import SearchScreen from './SearchScreen';
import SubmitReview from './SubmitReview';
import FinalizeScreen from './FinalizeScreen';

function mapStateToProps(state) {
  return {
    reviews: state.reviews,
    companies: state.companies
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps);

export const SearchApp = App(SearchScreen); // Fetch or remove reviews
export const SubmitApp = App(SubmitReview); // Fetch or add companies
export const FinalizeApp = App(FinalizeScreen); // Add reviews
