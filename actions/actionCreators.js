import { reviewBase, companyBase } from '../Firebase'

export function fetchReviews(){
  return dispatch => {
    reviewBase.on('value', snapshot => {
      dispatch({
        type: 'FETCH_REVIEWS',
        reviews: snapshot.val()
      });
    });
  }
}

// add review
export function addReview(review) {
  return dispatch => reviewBase.push(review)
}

// remove review
export function removeReview(reviewId) {
  return dispatch => reviewBase.child(reviewId).remove();
}

export function fetchCompanies(){
  return dispatch => {
    companyBase.on('value', snapshot => {
      dispatch({
        type: 'FETCH_COMPANIES',
        companies: snapshot.val()
      });
    });
  }
}

export function addCompany(company) {
  return dispatch => companyBase.push(company)
}

// export function removeCompany(companyId) {
//   return dispatch => companyBase.child(companyId).remove();
// }
