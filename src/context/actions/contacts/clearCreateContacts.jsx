import { CLEAR_ADD_CONTACTS } from '../../../constants/actionTypes';

export default () => (dispatch) => {
  dispatch({
    type: CLEAR_ADD_CONTACTS,
  });
};
