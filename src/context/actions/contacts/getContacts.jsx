import {
  CONTACTS_LOADING,
  CONTACTS_LOAD_FAILURE,
  CONTACTS_LOAD_SUCCESS,
} from '../../../constants/actionTypes';
import { CONNECTION_FAILURE } from '../../../constants/api';
import axiosInstance from '../../../helpers/axiosInstance';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (history) => (dispatch) => {
  dispatch({
    type: CONTACTS_LOADING,
  });
  axiosInstance(history)
    .get('/contacts/')
    .then((res) => {
      dispatch({
        type: CONTACTS_LOAD_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: CONTACTS_LOAD_FAILURE,
        payload: err.response ? err.response.data : CONNECTION_FAILURE,
      });
    });
};
