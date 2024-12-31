const allUserReducer = (state = null, action) => {
  switch (action.type) {
    case "GET_ALL_USER":
      return state || null;

    case "SET_ALL_USER":
      return action.allUsers || null;

    default:
      return state || null;
  }
};
export default allUserReducer;
