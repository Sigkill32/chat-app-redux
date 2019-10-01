export function reducer(state = initState, action) {
  const newState = { ...state };

  console.log(action);

  switch (action.type) {
    case "ASYNC_FETCH_DATA":
      newState.users = action.data;
      console.log("red:", action.data);
      break;
    case "ADD_MESSAGES":
      newState.users = action.data;
      break;
    default:
      break;
  }

  return newState;
}

const initState = {
  users: []
};
