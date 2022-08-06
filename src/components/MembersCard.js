import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";


export default function CommunitiesCard ({ name, imageUrl }) {
    return (
      <View style={ styles.featuredCommunitiesCard }>
        <View style={ styles.featuredCommunityStoryContainer }>
          <Image style={ styles.featuredCommunityLogo } source={imageUrl} />
        </View>

        <View style= { styles.featuredCommunityTextContainer }>
          <Text style={ styles.communityHeaderText }>{ name }</Text>
        </View>

        <View style={ styles.featuredCommunityJoinContainer }>
          {/* <Text style={ styles.featuredCommunityJoinText }>Add</Text> */}
          <Image style={ styles.featuredCommunityJoinImage } source={require("../../assets/snapchat/add-user.png")} />
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
  featuredCommunitiesCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderColor: "eeeeee",
    borderRadius: 10,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 15,
  },
  featuredCommunityStoryContainer: {
    width: 50,
    height: 50,
    backgroundColor: "lightgrey",
    borderRadius: 50,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  featuredCommunityLogo: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  featuredCommunityTextContainer: {
    marginLeft: 15,
  },
  communityHeaderText: {
    fontWeight: "600",
    fontSize: 16,
    marginTop: 15,
    // marginBottom: 5,
    // alignItems: "center",
  },
  communityText: {
    fontSize: 13,
  },
  featuredCommunityJoinContainer: {
    position: "absolute",
    top: 26,
    right: 15,
    backgroundColor: "#eceef0",
    borderRadius: 15,
    width: 50,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  featuredCommunityJoinText: {
    textAlign: "center",
    fontWeight: "800",
    marginTop: 7,
    fontSize: 12
  },
  featuredCommunityJoinImage: {
    width: 12,
    height: 12,
  },
});
