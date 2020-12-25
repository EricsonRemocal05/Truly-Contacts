import axiosInstance from '../../../helpers/axiosInstance';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (history) => {
  axiosInstance(history)
    .get('/contacts/')
    .then((res) => console.log('data :>> ', res.data))
    .catch((err) => console.log('err :>> ', err));
};
