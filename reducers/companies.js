function companies(state = [], action) {
  switch (action.type) {
    case 'FETCH_COMPANIES':
      return action.companies;
    case 'ADD_COMPANY':
      return [...state, action.company];
    case 'REMOVE_COMPANY':
      return state;
    default:
      return state;
  }
}

export default companies;
