import axios from "axios";
import SignContext from "../Context/SignContext";
import React from "react";

export const SignState = (props) => {
  const url = `http://localhost:5002`;

  // create user
  const addUser = async (UserData) => {
    try {
      const response = await axios.post(`${url}/api/adduser`, UserData);
      return response.data;
    } catch (error) {
      return { success: false, msg: "server Error" };
    }
  };

  // view users
  const GetallUsers = async () => {
    try {
      const response = await axios.get(`${url}/api/users`, {});
      return response.data;
    } catch (error) {
      return { success: false, msg: "server Error" };
    }
  };

  const GetUserById = async (id) => {
    try {
      const response = await axios.get(`${url}/api/user/${id}`, {});
      return response.data;
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  const EditUser = async (id, userData) => {
    try {
      const response = await axios.post(`${url}/api/edituser/${id}`, userData);
      return response.data;
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await axios.post(`${url}/api/deleteuser/${id}`);
      return response.data;
    } catch (error) {
      return { success: false, msg: "server Error" };
    }
  };

  return (
    <SignContext.Provider
      value={{
        addUser,
        GetallUsers,
        GetUserById,
        EditUser,
        deleteUser,
      }}
    >
      {props.children}
    </SignContext.Provider>
  );
};
