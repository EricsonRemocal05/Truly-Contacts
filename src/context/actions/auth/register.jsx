import {
  REGISTER_FAILURE,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axios';

export const register = ({
  email,
  password,
  username,
  lastName: last_name,
  firstName: first_name,
}) => (dispatch) => {
  dispatch({
    type: REGISTER_LOADING,
  });
  axiosInstance
    .post('/auth/register', {
      email,
      password,
      username,
      last_name,
      first_name,
    })
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch({
        type: REGISTER_FAILURE,
        payload: err.response.data,
      })
    );
};
