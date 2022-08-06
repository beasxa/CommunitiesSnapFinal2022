import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";


export default function CommunitiesCard ({ communityId, name, description, distance, imageUrl, navigation, joined, active, onJoin }) {
  const [selected, setSelected] = useState(joined);

  useEffect(() => {
    setSelected(joined);
  }, [joined]);
  return (
    <View style={ styles.featuredCommunitiesCard }>

      <View style={ styles.featuredCommunitiesCardLeft}>
        <View style={ styles.featuredCommunityStoryContainer }>
          <Image style={ styles.featuredCommunityLogo } source={imageUrl} />
        </View>

        <View style= { styles.featuredCommunityTextContainer }>
          <Text style={ styles.communityHeaderText }>{ name }</Text>
          <Text style={ styles.communityText }>{description} • {distance}</Text>
        </View>
      </View>

      <View style={ styles.featuredCommunitiesCardRight}>
        {
          active ? 
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                setSelected(!selected);
                if (!selected) {
                  navigation.goBack();
                  navigation.navigate("Membership");
                }
                onJoin(communityId, !selected);
                
              }}
              >
              <View style={ [styles.featuredCommunityJoinContainer, { backgroundColor: selected ? "#4FAAF8" : "#eceef0" }] }>
                <Text style={ [styles.featuredCommunityJoinText, selected ? styles.selected : ""] }>{ selected ? "Joined" : "Join"}</Text>
              </View>
            </TouchableOpacity> :

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                setSelected(!selected);
                onJoin(communityId, !selected);
              }}
              >
              <View style={ [styles.featuredCommunityJoinContainer, { backgroundColor: selected ? "#4FAAF8" : "#eceef0" }] }>
                <Text style={ [styles.featuredCommunityJoinText, selected ? styles.selected : ""] }>{ selected ? "Joined" : "Join"}</Text>
              </View>
            </TouchableOpacity>
        }
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
    alignItems: "center",
    justifyContent: "space-between",
  },
  featuredCommunitiesCardLeft: {
    flexDirection: "row",
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
    marginTop: 5
  },
  communityHeaderText: {
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 5,
  },
  communityText: {
    fontSize: 12,
  },
  featuredCommunityJoinContainer: {
    borderRadius: 50,
    marginTop: 5,
  },
  featuredCommunityJoinText: {
    fontWeight: "800",
    fontSize: 12,
    padding: 8,
    borderRadius: 50
  },
  selected: {
    color: "#fff"
  }
});
