import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../actions/userActions";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [UserInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserInfo({ ...UserInfo, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await dispatch(loginUser(UserInfo));
      if (res.success) {
        navigate("/users");
      }
    } catch (error) {
      console.error("Error login user:", error);
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={(e) => handleLogin(e)}>
        <label htmlFor="">Email :</label>
        <input type="text" name="email" value={UserInfo.email} onChange={handleChange} />
        <label htmlFor="">Password :</label>
        <input type="text" name="password" value={UserInfo.password} onChange={handleChange} />
        <button type="submit"> Login</button>
      </form>
    </>
  );
};

export default Login;
