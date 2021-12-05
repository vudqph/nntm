import { StyleSheet } from "react-native";

export default StyleSheet.create({
  centerInforWrapper: {
    flex: 1,
    marginTop: 160,
  },
  topInforWrapper: {
    flex: 1,
    backgroundColor: "blue",
  },
  inforHumidity: {
    flexDirection: "column-reverse",
    justifyContent: "center",
    alignItems: "center",
  },
  textHumidity: {
    color: "white",
  },
  valueHumidity: {
    color: "white",
    fontSize: 85,
  },
  textInfor: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    fontFamily: "Lato-Regular",
    marginVertical: 20,
  },
  valueInfor: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  textTitle: {
    fontWeight: "bold",
    color: "white",
    justifyContent: "space-evenly",
    fontSize: 14,
  },
  valueSensor: {
    fontWeight: "bold",
    color: "white",
    fontSize: 14,
  },
});
