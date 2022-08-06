import React, { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import MapOptionItem from "./MapOptionItem";

export default function MapOptions() {

  return (
    <View style={styles.mapOptions}>
      <MapOptionItem imageUrl={require("../../assets/snapchat/MapOptionsIcons1.png")} />
      <MapOptionItem imageUrl={require("../../assets/snapchat/MapOptionsIcons2.png")} />
      <MapOptionItem imageUrl={require("../../assets/snapchat/MapOptionsIcons3.png")} />

      <MapOptionItem imageUrl={require("../../assets/snapchat/downarroww.png")} transparent={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  mapOptions: {
    backgroundColor: "rgba(0, 0, 0, 0.175)",
    borderRadius: 50,
    position: "absolute",
    top: 95,
    right: 10,
    height: 175,
    width: 40,
    alignItems: "center",
  },
});