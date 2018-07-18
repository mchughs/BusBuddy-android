import { companyBase, reviewBase } from '../Firebase';

export function fetchReviews() {
  return (dispatch) => {
    reviewBase.on('value', (snapshot) => {
      dispatch({
        type: 'FETCH_REVIEWS',
        reviews: snapshot.val(),
      });
    });
  };
}

export function addReview(review) {
  return () => reviewBase.push(review);
}

export function removeReview(reviewId) {
  return () => reviewBase.child(reviewId).remove();
}

export function fetchCompanies() {
  return (dispatch) => {
    companyBase.on('value', (snapshot) => {
      dispatch({
        type: 'FETCH_COMPANIES',
        companies: snapshot.val(),
      });
    });
  };
}

export function addCompany(company) {
  return () => companyBase.push(company);
}
