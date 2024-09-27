import {
  SIGNIN_USER_REQUEST,
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_FAILURE,
  SIGNUP_USER_REQUEST,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILURE,
} from "./userTypes";
import http from "@/services/httpService";
import toast from 'react-hot-toast';
import Router from "next/router";

export const signinUserRequest = () => {
  return {
    type: SIGNIN_USER_REQUEST,
  };
};

export const signinUserSuccess = (users) => {
  return {
    type: SIGNIN_USER_SUCCESS,
    payload: users,
  };
};

export const signinUserFailure = (error) => {
  return {
    type: SIGNIN_USER_FAILURE,
    payload: error,
  };
};

export const signupUserRequest = () => {
    return {
      type: SIGNUP_USER_REQUEST,
    };
  };
  
  export const signupUserSuccess = (users) => {
    return {
      type: SIGNUP_USER_SUCCESS,
      payload: users,
    };
  };
  
  export const signupUserFailure = (error) => {
    return {
      type: SIGNUP_USER_FAILURE,
      payload: error,
    };
  };

export const userSignin = (data) => {
  return (dispatch) => {
    dispatch(signinUserRequest());
    http
      .post("/user/signin", data, { withCredentials: true })
      .then(({ data }) => {
        dispatch(signinUserSuccess(data));
        toast.success(`${data.name} ،خوش اومدی`);
        Router.push("/")
      })
      .catch((error) => {
        dispatch(signinUserFailure(error.message));
        toast.error(err?.response?.data?.message);
      });
  };
};

export const userSignup = (data) => {
    return (dispatch) => {
      dispatch(signupUserRequest());
      http
        .post("/user/signup", data, { withCredentials: true })
        .then(({ data }) => {
          dispatch(signupUserSuccess(data));
          dispatch(signinUserSuccess(data));
          toast.success('ثبت نام شما با موفقیت انجام شد');
          Router.push("/")
        })
        .catch((error) => {
          dispatch(signupUserFailure(error.message));
          toast.error(err?.response?.data?.message);
        });
    };
  };

  export const signout = () => {
    http
    .get('/user/logout',{ withCredentials: true })
    .then(({ data }) => {
        window.location.href= "/"
    })
    .catch();
  };

  export const loadUserData = (store) => {
    http
    .get('/user/load',{ withCredentials: true })
    .then(({ data }) => {
        store.dispatch(signinUserSuccess(data))
    })
    .catch(err => {});
  };