import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";


export default function MapDistrict ({ imageUrl, district }) {
    return (
      <View style={styles.currentLocationStoryDistrictContainer}>
        <View style={styles.currentLocationStoryContainer}>
          <Image style={styles.currentLocationStory} source={imageUrl} />
        </View>
        <View style={styles.currentLocationDistrict}>
          <Text style={styles.currentLocationDistrictText}>{ district }</Text>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  currentLocationStoryDistrictContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.175)",
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    height: 40,
  },
  currentLocationStoryContainer: {
    backgroundColor: "#FFFC00",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    width: 35,
    height: 35,
    marginLeft: 3,
  },
  currentLocationStory: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  currentLocationDistrict: {
    marginLeft: 20,
    marginRight: 35,
  },
  currentLocationDistrictText: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    color: "white",
  },
  });

