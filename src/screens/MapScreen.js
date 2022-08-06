import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  TouchableOpacity
} from "react-native";

import MapTopIcon from "../components/MapTopIcon";
import MapBottomIcon from "../components/MapBottomIcon";
import MapOptions from "../components/MapOptions";
import MapDistrict from "../components/MapDistrict";

export default function MapScreen({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const [currentRegion, setCurrentRegion] = useState({
    latitude: 34.021216555498675,
    longitude: -118.45007599325494,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [currentDistrict, setCurrentDistrict] = useState('Sunset Park');

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      let region = await Location.reverseGeocodeAsync({ latitude: location.coords.latitude, longitude: location.coords.longitude, })
      
      setLocation(location);
      setCurrentRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });

      // console.log(region[0]["district"])
      
      setCurrentDistrict(region[0]["district"])
    })();
  }, []);

  let text = "Waiting...";
  text = JSON.stringify(location);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={currentRegion}
        showsUserLocation={false}
        showsMyLocationButton={true}
      >
        <Marker
          style={[styles.bitmojiLocation, styles.shadowProp]}
          coordinate={{ latitude: currentRegion.latitude, longitude: currentRegion.longitude }}
          image={require("../../assets/snapchat/MapBitmojiMeIcon.png") }
          // onPress={() => navigation.navigate("Communities")}
        />
      </MapView>
      
      <View style={styles.mapTopContainer}>
        <View style={styles.mapTopContainerLeft}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate("ProfileStack");
            }}
          >
          <MapTopIcon style={ styles.mapTopComponent } imageUrl={require("../../assets/snapchat/MapTopBitmojiIcon.png")} />
          </TouchableOpacity>

          <MapTopIcon style={ styles.mapTopComponent } imageUrl={require("../../assets/snapchat/searchw.png")} small={true} />
          <MapDistrict imageUrl={require("../../assets/snapchat/MapStoriesImage.jpg")} district={currentDistrict} />
        </View>

        <View style= {styles.mapTopContainerRight}>
          <MapTopIcon imageUrl={require("../../assets/snapchat/gearw.png")} smaller={true} />
        </View>

      </View>

      <MapOptions />

      <View style={styles.locationContainer}>
        <TouchableOpacity
          style={styles.userLocation}
          onPress={() => {
            console.log("Go to user location!");
            const { latitude, longitude } = location.coords;
            setCurrentRegion({ ...currentRegion, latitude, longitude });
          }}
        >
          <Ionicons name="ios-navigate" size={15} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.mapBottomContainer}>
        <MapBottomIcon imageUrl={require("../../assets/snapchat/MapBottomBitmojiIcon.png")} iconText="My Bitmoji"></MapBottomIcon>
        <MapBottomIcon imageUrl={require("../../assets/snapchat/MapBottomPlacesIcon.png")} iconText="Places"></MapBottomIcon>

        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate("Communities");
            }}
        >
        <MapBottomIcon imageUrl={require("../../assets/snapchat/mapCommunitiesLogo.png")} iconText="Communities"></MapBottomIcon>
        </TouchableOpacity>

        <MapBottomIcon imageUrl={require("../../assets/snapchat/MapBottomFriendsIcon.png")} iconText="Friends"></MapBottomIcon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  locationContainer: {
    position: "absolute",
    bottom: 100,
    width: "100%",
    height: 30,
    alignItems: "center",
  },
  userLocation: {
    backgroundColor: "white",
    borderRadius: 15,
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },
  bitmojiLocation: {

  },
  mapBottomContainer: {
    width: "100%",
    height: 70,
    position: "absolute",
    bottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 15
  },
  mapTopContainer: {
    width: "100%",
    height: 70,
    position: "absolute",
    top: 45,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10
  },
  mapTopContainerLeft: {
    flexDirection: "row",
    width: "80%",
  },
  mapTopComponent: {
    marginRight: 5,
  },
  searchIcon: {
    width: 35,
    height: 35,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
});