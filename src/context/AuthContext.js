import axios from "axios";
import { createContext, useContext } from "react"
import { useReducerAsync } from "use-reducer-async";
import toast from 'react-hot-toast';
import Router from "next/router";
import { useEffect } from "react";

const AuthContext = createContext();
const AuthContextDispatcher = createContext();

const initialState = { user: null, isLoading: true, error:null }

const reducer = (state, action) => {
  switch (action.type) {
    case "SIGNIN_PENDING":
      return { user: null, isLoading: true, error: false };
    case "SIGNIN_SUCCESS":
      return { user: action.payload, isLoading: false, error: null };
    case "SIGNIN_REJECT":
      return { user: null, isLoading: false, error: action.error };
    default:
      return { ...state };
  }
};

const asyncActionHandlers = {
  SIGNIN:
    ({ dispatch }) =>
    (action) => {
      dispatch({ type: "SIGNIN_PENDING" });
      axios
        .post(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/user/signin`,
          action.payload,
          { withCredentials: true }
        )
        .then(({ data }) => {
          toast.success("شما با موفقیت وارد شدید");
          dispatch({ type: "SIGNIN_SUCCESS", payload: data });
          Router.push("/");
        })
        .catch((err) => {
          dispatch({
            type: "SIGNIN_REJECT",
            error: err?.response?.data?.message,
          });
          toast.error(err?.response?.data?.message);
        });
    },

  SIGNUP:
    ({ dispatch }) =>
    (action) => {
      dispatch({ type: "SIGNIN_PENDING" });
      axios
        .post(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/user/signup`,
          action.payload,
          { withCredentials: true }
        )
        .then(({ data }) => {
          toast.success("ثبت نام شما با موفقیت انجام شد");
          dispatch({ type: "SIGNIN_SUCCESS", payload: data });
          Router.push("/");
        })
        .catch((err) => {
          dispatch({
            type: "SIGNIN_REJECT",
            error: err?.response?.data?.message,
          });
          toast.error(err?.response?.data?.message);
        });
    },

  LOAD_USER:
    ({ dispatch }) =>
    () => {
      dispatch({ type: "SIGNIN_PENDING" });
      axios
        .get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/user/load`, {
          withCredentials: true,
        })
        .then(({ data }) => {
          dispatch({ type: "SIGNIN_SUCCESS", payload: data });
        })
        .catch((err) => {
          dispatch({
            type: "SIGNIN_REJECT",
            error: err?.response?.data?.message,
          });
        });
    },

  SIGNOUT:
    ({ dispatch }) =>
    () => {
      dispatch({ type: "SIGNIN_PENDING" });
      axios
        .get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/user/logout`, {
          withCredentials: true,
        })
        .then(() => {
          window.location.href = "/";
        })
        .catch(() => {});
    },
};

function AuthProvider({ children }) {
  const [user, dispatch] = useReducerAsync(
    reducer,
    initialState,
    asyncActionHandlers
  );

  useEffect(() => {
    dispatch({ type: "LOAD_USER" });
  }, []);

  return (
    <AuthContext.Provider value={user}>
      <AuthContextDispatcher.Provider value={dispatch}>
        {children}
      </AuthContextDispatcher.Provider>
    </AuthContext.Provider>
  );
}

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
export const useAuthActions = () => useContext(AuthContextDispatcher);