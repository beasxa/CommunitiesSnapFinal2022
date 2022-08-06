import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";


export default function CommunitiesCard ({ info }) {
    return (
      <View style={ styles.featuredCommunitiesCard }>
        <Text style={styles.communityText}>
            { info }
        </Text>
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
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 15,
  },
  featuredCommunityStoryContainer: {
    width: 50,
    height: 50,
    backgroundColor: "#FFFC00",
    borderRadius: 50,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  featuredCommunityLogo: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
  featuredCommunityTextContainer: {
    marginLeft: 15,
  },
  communityHeaderText: {
    fontWeight: "600",
    fontSize: 16,
    marginTop: 5,
    marginBottom: 5,
  },
  communityText: {
    fontSize: 14,
  },
  featuredCommunityJoinContainer: {
    position: "absolute",
    top: 26,
    right: 15,
    backgroundColor: "#eceef0",
    borderRadius: 15,
    width: 50,
    height: 30,
  },
  featuredCommunityJoinText: {
    textAlign: "center",
    fontWeight: "800",
    marginTop: 7,
    fontSize: 12
  }
});