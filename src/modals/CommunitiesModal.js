import React from 'react'
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';

import CommunitiesCard from '../components/CommunitiesCard';
import SearchBox from '../components/SearchBox';

export default function CommunitiesModal({ navigation, route }) {
  const newRoute = {"joined": false}
  const { joined } = route.params ? route.params : newRoute;
  return (
    <View style={ styles.container }>
      <View style={ styles.communitiesContainer }>
        <View style={ styles.communitiesContent }>

          <View style={ styles.communitiesContentTop }>

            <SearchBox initialText={"Discover Communities"} />

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <View style={ styles.closeCommunitiesModalContainer }>
                <Image style={ styles.closeCommunitiesIcon } source={require("../../assets/snapchat/CommunitiesModalXIcon.png")} />
              </View>
            </TouchableOpacity>
          </View>

          <View style={ styles.featuredCommunitiesContainer }>
            <Text style={ styles.featuredCommunitiesText }>Featured Communities</Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.goBack();
              navigation.navigate("Organization");
            }}
          >
            <CommunitiesCard navigation={navigation} name={"CodeTalk"} description={"Technology Training Program"} distance={"1.4 Miles"} imageUrl={require("../../assets/snapchat/CodeTalkLogo.png")} joined={joined} active={true} />
          </TouchableOpacity>

          <CommunitiesCard name={"Snap Academies"} description={"Internship Program"} distance={"2.9 Miles"} imageUrl={require("../../assets/snapchat/SnapBlackLogo.jpg")} />
          <CommunitiesCard name={"Santa Monica College"} description={"Community College"} distance={"3.0 Miles"} imageUrl={require("../../assets/snapchat/SMCLogo.jpg")} />

        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "column",
  },
  communitiesContainer: {
    height: "53%",
    width: "100%",
    backgroundColor: "#f7f8f8",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  communitiesContent: {
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15
  },
  communitiesContentTop: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  closeCommunitiesModalContainer: {
    backgroundColor: "#eceef0",
    padding: 15,
    borderRadius: 50,
  },
  closeCommunitiesIcon: {
    width: 5,
    height: 5
  },

  featuredCommunitiesContainer: {
    marginTop: 15,
    marginBottom: 15,
  },

  featuredCommunitiesText: {
    fontWeight: "700",
    fontSize: 18,
    color: "#666d77"
  }

});