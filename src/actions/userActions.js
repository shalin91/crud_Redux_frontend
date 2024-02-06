import axios from "axios";
const url = `http://localhost:5002`;

export const fetchAllUsers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}/api/users`);
      dispatch({ type: "FETCH_ALL_USERS_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "FETCH_ALL_USERS_FAILURE", payload: error.message });
    }
  };
};

export const createUser = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${url}/api/adduser`, userData);
      dispatch({ type: "CREATE_USER_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "CREATE_USER_FAILURE", payload: error.message });
    }
  };
};

export const loginUser = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${url}/api/login`, userData);
      dispatch({ type: "CREATE_USER_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "CREATE_USER_FAILURE", payload: error.message });
    }
  };
};

export const fetchUserbyId = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}/api/user/${id}`);
      dispatch({ type: "FETCH_USER_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "FETCH_USER_FAILURE", payload: error.message });
    }
  };
};

export const updateUser = (userData, id) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${url}/api/edituser/${id}`, userData);
      dispatch({ type: "EDIT_USER_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "EDIT_USER_FAILURE", payload: error.message });
    }
  };
};

export const deleteUser = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${url}/api/deleteuser/${id}`);
      dispatch({ type: "DELETE_USER_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "DELETE_USER_FAILURE", payload: error.message });
    }
  };
};
