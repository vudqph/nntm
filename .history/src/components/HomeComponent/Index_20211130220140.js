import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StatusBar,
  Image,
  StyleSheet,
} from "react-native";
import style from "../../navigations/SlideMenu/style";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import Message from "../Common/Message";
import colors from "../../assets/theme/colors";
import backgoundImage from "../../assets/theme/images/backgound_farm.jpg";
const ListEmptyComponent = () => {
  return (
    <View style={{ paddingVertical: 100, paddingHorizontal: 100 }}>
      <Message info message="No contacts to show" />
    </View>
  );
};
const Item = ({ area, farmName, location, timeStart }) => (
  <TouchableOpacity style={styles.itemContainer}>
    <View style={styles.item}>
      <Text style={styles.name}>{farmName}</Text>
      <Text style={styles.title}>{area}</Text>
      <Text style={styles.location}>{location}</Text>
      <Text style={styles.location}>{timeStart}</Text>
    </View>
  </TouchableOpacity>
);

const HomeComponent = ({ data, loading, setModalVisible }) => {
  const { navigate } = useNavigation();
  const renderItem = ({ item }) => {
    return (
      <Item
        area={item.area}
        farmName={item.farmName}
        location={item.location}
        timeStart={item.timeStart}
      />
    );
  };
  return (
    <View style={{ paddingVertical: 20 }}>
      <Image
        source={{ uri: backgoundImage }}
        style={StyleSheet.absoluteFillObject}
      />
      <FlatList
        renderItem={renderItem}
        data={data}
        keyExtractor={(item) => String(item.farmID)}
        contentContainerStyle={{
          padding: 10,
          paddingTop: StatusBar.currentHeight || 43,
        }}
        ItemSeparatorComponent={() => (
          <View style={{ height: 1, backgroundColor: colors.gray }}></View>
        )}
        ListEmptyComponent={ListEmptyComponent}
      />
    </View>
  );
};

export default HomeComponent;
