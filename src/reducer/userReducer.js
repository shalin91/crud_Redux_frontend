const initialState = {
  users: [],
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL_USERS_SUCCESS":
      return { ...state, users: action.payload, error: null };
    case "FETCH_ALL_USERS_FAILURE":
      return { ...state, users: [], error: action.payload };
    case "CREATE_USER_SUCCESS":
      return { ...state, users: action.payload, error: null };
    case "CREATE_USER_FAILURE":
      return { ...state, users: [], error: action.payload };
    case "FETCH_USER_SUCCESS":
      return { ...state, users: action.payload, error: null };
    case "FETCH_USER_FAILURE":
      return { ...state, users: [], error: action.payload };
    case "EDIT_USER_SUCCESS":
      return { ...state, users: action.payload, error: null };
    case "EDIT_USER_FAILURE":
      return { ...state, users: [], error: action.payload };
    case "DELETE_USER_SUCCESS":
      return { ...state, users: action.payload, error: null };
    case "DELETE_USER_FAILURE":
      return { ...state, users: [], error: action.payload };
    default:
      return state;
  }
};

export default userReducer;
