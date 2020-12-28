import {
  ADD_CONTACT_FAILURE,
  ADD_CONTACT_LOAD,
  ADD_CONTACT_SUCCESS,
} from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInstance';
import { CONNECTION_FAILURE } from '../../../constants/api';
import { storage } from '../../../helpers/firebase';
import { FIREBASE_IMAGE_REF } from '../../../constants/firebase';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default ({
  firstName: first_name,
  lastName: last_name,
  phoneNumber: phone_number,
  countryCode: country_code,
  contactPicture: contact_picture,
}) => (dispatch) => {
  const saveToBackend = (url = null) => {
    axiosInstance()
      .post('/contacts/', {
        first_name,
        last_name,
        phone_number,
        country_code,
        contact_picture: url,
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

  dispatch({
    type: ADD_CONTACT_LOAD,
  });

  if (contact_picture) {
    storage
      .ref(`${FIREBASE_IMAGE_REF}/${contact_picture.name}`)
      .put(contact_picture)
      .on(
        'state_changed',
        (snapshot) => {},
        async (error) => {},
        async () => {
          const url = await storage
            .ref(FIREBASE_IMAGE_REF)
            .child(contact_picture.name)
            .getDownloadURL();

          saveToBackend(url);
        }
      );
  } else {
    saveToBackend();
  }
};
