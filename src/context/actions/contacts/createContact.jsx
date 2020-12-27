import {
  ADD_CONTACT_FAILURE,
  ADD_CONTACT_LOAD,
  ADD_CONTACT_SUCCESS,
} from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInstance';
import { CONNECTION_FAILURE } from '../../../constants/api';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default ({
  firstName: first_name,
  lastName: last_name,
  phoneNumber: phone_number,
  countryCode: country_code,
}) => (dispatch) => {
  dispatch({
    type: ADD_CONTACT_LOAD,
  });

  axiosInstance()
    .post('/contacts/', {
      first_name,
      last_name,
      phone_number,
      country_code,
    })
    .then((res) => {
      console.log('res :>> ', res);

      dispatch({
        type: ADD_CONTACT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log('err :>> ', err);

      dispatch({
        type: ADD_CONTACT_FAILURE,
        payload: err.response ? err.response.data : CONNECTION_FAILURE,
      });
    });
};
