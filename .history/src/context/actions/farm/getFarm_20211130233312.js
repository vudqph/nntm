import {
  GET_FARMS_FAIL,
  GET_FARMS_LOADING,
  GET_FARMS_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInterceptor";
export default () => (uuid) => (dispatch) => {
  dispatch({
    type: GET_FARMS_LOADING,
  });
  axios
    .get(`/farm/${uuid.uuid)`)
    .then((res) => {
      dispatch({
        type: GET_FARMS_SUCCESS,
        payload: res.data,
      });
      console.log("uuid", uuid);
    })
    .catch((err) => {
      dispatch({
        type: GET_FARMS_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "some thing went wrong, try again" },
      });
      console.log("errors: ", err);
    });
};
