import React from "react";


const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const loginSuccess = (isLoggedIn) => {
  return {
    type: LOGIN_SUCCESS,
    payload: isLoggedIn,
  };
};

const initialState = {
    isLoggedIn: false,
  };
  
  export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoggedIn: action.payload,
        };
      default:
        return state;
    }
  };