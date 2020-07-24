import { SET_PATH } from '../../constants';

// export const changePath = (path) =>  {
//   return dispatch => {
//     dispatch({
//       type: CHANGE_PATH,
//       payload: {
//         path
//       }
//     })
//   }
// }
export const setPath = (path) =>  ({
  type: SET_PATH,
  payload: {
    path
  }
})
