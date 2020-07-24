export const auth = (email, password, signin) => {
    return {
        type: 'AUTH_USER',
        email: email,
        password: password,
        signin: signin
    }
};


export const authStart = () => {
    return {
        type: 'AUTH_START'
    }
};

export const authSuccess = (token, userId) => {
    return {
        type: 'AUTH_SUCCESS',
        token: token,
        userId: userId
    }
};

export const authFail = (error) => {
  return {
      type: 'AUTH_FAIL',
      error: error
  }
};
