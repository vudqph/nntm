import { StyleSheet } from "react-native";

export default StyleSheet.create({
  topInforWrapper: {
    flex: 1,
    marginTop: 120,
    alignItems: "center",
  },
  textHumidity: {
    color: "white",
    fontSize: 20,
    marginBottom: 50,
  },
  valueHumidity: {
    color: "white",
    fontSize: 64,
  },
  bottomInforWrapper: {
    flex: 1,
  },
  textInfor: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  valueInfor: {
    alignContent: "space-around",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
});
