import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
  Image,
  useWindowDimensions,
  ScrollView,
  ImageBackground,
} from "react-native";
import DeviceCustom from "../Common/DeviceCustom";
import Icon from "../../components/Common/Icons";
import colors from "../../assets/theme/colors";
import styles from "./styles";
const DeviceComponent = ({ data }) => {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <View style={{ width: windowWidth, height: windowHeight }}>
          <ImageBackground
            source={require("../../assets/theme/images/green-farm-background.jpg")}
            style={{ flex: 1 }}
          >
            <View style={styles.centerInforWrapper}>
              <View style={styles.textInfor}>
                <Text style={styles.temperature}>Nhiệt Độ</Text>
                <Text style={styles.humdity}>Độ Ẩm</Text>
                <Text style={styles.soid}>Ánh Sáng</Text>
              </View>
              <View style={styles.valueInfor}>
                <Text style={styles.temperature}>Nhiệt Độ</Text>
                <Text style={styles.humdity}>Độ Ẩm</Text>
                <Text style={styles.soid}>Ánh Sáng</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </>
    // <View style={{ flex: 1 }}>
    //   {data && Object.keys(data).length !== 0 ? (
    //     <View style={{ justifyContent: "center", flex: 1 }}>
    //       <Image
    //         source={require("../../assets/theme/images/green-farm-background.jpg")}
    //         style={StyleSheet.absoluteFillObject}
    //       />
    //       <DeviceCustom
    //         title={"Nhiệt độ"}
    //         value={data[0].temperature}
    //         icon={
    //           <Icon
    //             type="faicon5"
    //             size={35}
    //             name="temperature-high"
    //             color="red"
    //           />
    //         }
    //       />
    //       <DeviceCustom
    //         title={"Độ Ẩm "}
    //         value={data[0].humidity}
    //         icon={<Icon type="materialIcon" size={30} name="home" />}
    //       />
    //       <DeviceCustom
    //         title={"Ánh Sáng"}
    //         value={data[0].lightIntensity}
    //         icon={
    //           <Icon
    //             type="entypoIcon"
    //             size={30}
    //             name="light-up"
    //             color="orange"
    //           />
    //         }
    //       />
    //       <DeviceCustom
    //         title={"Độ Ẩm Đất"}
    //         value={data[0].soilPH}
    //         icon={
    //           <Icon
    //             type="materialcommunityicon"
    //             size={30}
    //             name="water"
    //             color="#18C4DE"
    //           />
    //         }
    //       />
    //       <DeviceCustom
    //         title={"Độ PH:     "}
    //         value={data[0].soilPH}
    //         icon={<Icon type="materialIcon" size={30} name="home" />}
    //       />
    //     </View>
    //   ) : (
    //     <View
    //       style={{
    //         flex: 1,
    //         justifyContent: "center",
    //         alignItems: "center",
    //         alignContent: "center",
    //       }}
    //     >
    //       <Text
    //         style={{
    //           flexDirection: "column",
    //           fontSize: 20,
    //           alignContent: "center",
    //         }}
    //       >
    //         Không tìm thấy thiết bị
    //       </Text>
    //     </View>
    //   )}
    // </View>
  );
};

export default DeviceComponent;
