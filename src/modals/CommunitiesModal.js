import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';

import CommunitiesCard from '../components/CommunitiesCard';
import SearchBox from '../components/SearchBox';

import db from "../../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useAuthentication } from "../utils/hooks/useAuthentication";

export default function CommunitiesModal({ navigation, route }) {
  // const newRoute = {"joined": false}
  // const { joined } = route.params ? route.params : newRoute;
  const { user, userData } = useAuthentication();
  const codeTalkId = "lht7wxNInPIl2rYFhvSL";
  const snapAcademiesId = "QWG7Ox7N1ZXn28tyslcd";
  const santaMonicaCollegeId = "lPXJBB8UUGhrfG4ymB8s";

  const [joinedCodetalk, setJoinedCodeTalk] = useState(false);
  const [joinedSnapAcademies, setJoinedSnapAcademies] = useState(false);
  const [joinedSantaMonicaCollege, setJoinedSantaMonicaCollege] = useState(false);

  useEffect(() => {
    if (userData) {
      setJoinedCodeTalk(userData.communities[codeTalkId] ? userData.communities[codeTalkId] : false);
      setJoinedSnapAcademies(userData.communities[snapAcademiesId] ? userData.communities[snapAcademiesId] : false);
      setJoinedSantaMonicaCollege(userData.communities[santaMonicaCollegeId] ? userData.communities[santaMonicaCollegeId] : false);
    }
  }, [userData]);

  const onJoin = async (communityId, selected) => {
    const userRef = doc(db, "Users", userData._id);
    const docSnap = await getDoc(userRef);

    // console.log(docSnap.data());

    await updateDoc(userRef, {
      "communities": {
        ...docSnap.data().communities,
        [communityId]: selected
      }
    });
  }

  return (
    <View style={ styles.container }>
      <View style={ styles.communitiesContainer }>
        <View style={ styles.communitiesContent }>

          <View style={ styles.communitiesContentTop }>

            <View style={ styles.communitiesSearchContainer }>
              <SearchBox initialText={"Discover Communities"} />
            </View>

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
            <CommunitiesCard key={codeTalkId} communityId={codeTalkId} navigation={navigation} name={"Code Talk"} description={"Technology Training Program"} distance={"1.4 Miles"} imageUrl={require("../../assets/snapchat/CodeTalkLogo.png")} joined={joinedCodetalk} active={true} onJoin={onJoin} />
          </TouchableOpacity>

          <CommunitiesCard key={snapAcademiesId} communityId={snapAcademiesId} name={"Snap Academies"} description={"Internship Program"} distance={"2.9 Miles"} imageUrl={require("../../assets/snapchat/SnapBlackLogo.jpg")} joined={joinedSnapAcademies} onJoin={onJoin} />
          <CommunitiesCard key={santaMonicaCollegeId} communityId={santaMonicaCollegeId} name={"Santa Monica College"} description={"Community College"} distance={"3.0 Miles"} imageUrl={require("../../assets/snapchat/SMCLogo.jpg")} joined={joinedSantaMonicaCollege} onJoin={onJoin} />

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
  communitiesSearchContainer: {
    width: "85%",

  },
  closeCommunitiesModalContainer: {
    backgroundColor: "#eceef0",
    padding: 13,
    borderRadius: 50,
  },
  closeCommunitiesIcon: {
    width: 10,
    height: 10
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