import { SIGN_UP } from '../../constants';
// {login, password, email, birthday, creationDate, sex, typeUser}
export const signUp = (data) => ({
  type: SIGN_UP,
  data : {
    ...data
  }
})

export const signUpStart = () => ({
  type: `${SIGN_UP}_START`
})

export const signUpSuccess = () => ({
  type: `${SIGN_UP}_SUCCESS`
})

export const signUpFail = () => ({
  type: `${SIGN_UP}_FAIL`
})
