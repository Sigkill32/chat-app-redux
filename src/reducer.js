export function reducer(state = initState, action) {
  let newState = { ...state };

  switch (action.type) {
    case "ASYNC_FETCH_DATA":
      return {
        ...state,
        users: [...state.users, ...action.users]
      };
    case "ADD_MESSAGES":
      return {
        ...state,
        users: [...action.users]
      };
    default:
      break;
  }
  return newState;
}

const initState = {
  users: []
};
