import { StyleSheet } from "react-native";
import React from "react";
import colors from "../../assets/theme/colors";

export default StyleSheet.create({
  itemContainer: {
    backgroundColor: "rgba(255,255, 255, 0.7)",
    flexDirection: "row",
    padding: 20,
    marginBottom: 10,

    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    borderRadius: 15,
  },
  item: {
    padding: 20,
    flex: 1,
  },
  name: {
    padding: 20,
    fontSize: 16,
  },
  location: {},
  time: {},
});
