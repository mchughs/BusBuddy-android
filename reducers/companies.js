function companies(state = [], action) {
  switch(action.type) {
    case 'FETCH_COMPANIES':
      return action.companies;
    case 'ADD_COMPANY':
      console.log("adding a company!");
      return [...state, action.company];
    case 'REMOVE_COMPANY':
      console.log("removing a company!");
      return state;
    default:
      return state;
  }
}

export default companies;
