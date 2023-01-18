import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_AUTH } from "../../helper";

export const authContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const register = async (formData) => {
    try {
      const res = await axios.post(`${API_AUTH}/register/`, formData);
      console.log(res);
      navigate("/login");
    } catch (e) {
      setError(Object.values(e.response.data).flat(2)[0]);
      console.log(error);
      console.log(Object.values(e.response.data).flat(2)[0]);
    }
  };

  const login = async (formData, email) => {
    try {
      const res = await axios.post(`${API_AUTH}/login/`, formData);
      console.log(res.data);

      localStorage.setItem("token", JSON.stringify(res.data));
      localStorage.setItem("username", email);

      setUser(email);
      navigate("/");
    } catch (e) {
      console.log(e);
      setError([e.response.data.detail]);
    }
  };

  const checkAuth = async () => {
    let token = JSON.parse(localStorage.getItem("token"));

    try {
      const Auth = `Bearer ${token.access}`;

      let res = await axios.post(`${API_AUTH}/token/refresh/`, {
        refresh: token.refresh,
      });

      localStorage.setItem(
        "token",
        JSON.stringify({ refresh: token.refresh, access: res.data.access })
      );
      let userName = localStorage.getItem("username");
      setUser(userName);
    } catch (e) {
      console.log(e);
    }
  };

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUser("");
    navigate("/login");
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      checkAuth();
    }
  }, []);

  let value = {
    user,
    error,

    login,
    register,
    logout,
  };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
