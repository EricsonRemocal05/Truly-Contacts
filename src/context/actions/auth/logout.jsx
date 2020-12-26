import { LOGOUT_USER } from '../../../constants/actionTypes';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (history) => (dispatch) => {
  localStorage.removeItem('token');

  dispatch({
    type: LOGOUT_USER,
  });
  history.push('/auth/login');
};
