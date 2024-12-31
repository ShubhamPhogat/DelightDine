export const setAllUsersDetails = (data) => {
  return {
    type: "SET_ALL_USER",
    allUsers: data,
  };
};
export const getAlluserDetails = (data) => {
  return {
    type: "GET_ALL_USER",
  };
};
