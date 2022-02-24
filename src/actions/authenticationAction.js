import axios from "axios";
import {
  USER_REGISTER,
  NOT_USER_REGISTER,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
} from "./actionVariables";

import { useDispatch, useSelector } from "react-redux";
import { setToken, setUser, getToken } from "../helper/tokens";

//  Register user
export const useRegister = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.user);
  const errorData = useSelector((state) => state.user.errors.errors);
  console.log(errorData);
  const fetchUser = async (userData) => {
    const response = await axios
      .post("https://api.realworld.io/api/users", userData)
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          dispatch({
            type: NOT_USER_REGISTER,
            payload: error.response.data,
          });
          console.log(errorData);
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          return errorData;
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
        return;
      });
    dispatch({
      type: USER_REGISTER,
      payload: response.data.user,
    });

    const user = response.data.user;
    setToken(user.token);
    console.log(getToken());
    setUser(user);
  };
  return [userData, fetchUser];
};

//  Login
export const useLogin = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.user.user);
  const fetchLogin = (userLogin) => {
    return axios
      .post("https://api.realworld.io/api/users/login", userLogin)
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: data.user,
        });
        const user = data.user;
        setToken(user.token);
        setUser(user);
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          dispatch({
            type: USER_LOGIN_FAILURE,
            payload: error.response.data,
          });
          const errorData = error.response.data;
          return [errorData];
        }
        //   console.log(error.response.data);
        //   console.log(error.response.status);
        //   console.log(error.response.headers);
        //   return;
        // } else if (error.request) {
        //   // The request was made but no response was received
        //   // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        //   // http.ClientRequest in node.js
        //   console.log(error.request);
        //   return;
        // } else {
        //   // Something happened in setting up the request that triggered an Error
        //   console.log("Error", error.message);
        // }
        // console.log(error.config);
        // return;
      });
  };
  return [userLogin, fetchLogin];
};
