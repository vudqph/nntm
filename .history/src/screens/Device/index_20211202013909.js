import { useRoute } from "@react-navigation/core";
import React, { useContext, useEffect } from "react";
import { View, Text } from "react-native";
import DeviceComponent from "../../components/DeviceComponent";
import getDevice from "../../context/actions/device/getDevice";
import { GlobalContext } from "../../context/Provider";
const Device = () => {
  const { params: { item = {} } = {} } = useRoute();
  const deviceID = item.deviceID;
  console.log("itemsdfsdf", deviceID);
  const {
    deviceDispatch,
    deviceState: {
      getDevice: { data },
    },
  } = useContext(GlobalContext);
  console.log("tao check ne: ", data.d);
  useEffect(() => {
    getDevice()({ deviceID })(deviceDispatch);
  }, []);
  return <DeviceComponent data={data} />;
};
export default Device;