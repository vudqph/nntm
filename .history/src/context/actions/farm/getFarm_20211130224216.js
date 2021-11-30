import {
  GET_FARMS_FAIL,
  GET_FARMS_LOADING,
  GET_FARMS_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInterceptor";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLinkBuilder } from "@react-navigation/native";
const uuid = AsyncStorage.getItem("uuid");
export default () => (dispatch) => {
  dispatch({
    type: GET_FARMS_LOADING,
  });
  axios
    .get("/farm/9840d528-4f58-11ec-934f-5e261a6c48c5/")
    .then((res) => {
      dispatch({
        type: GET_FARMS_SUCCESS,
        payload: res.data,
      });
      console.log("uuid",useLinkBuilder")
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
