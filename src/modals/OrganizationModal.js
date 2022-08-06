import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';

import OrgnizationInfoCard from '../components/OrganizationInfoCard';

import db from "../../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useAuthentication } from "../utils/hooks/useAuthentication";

export default function OrganizationModal({ navigation }) {
  const { user, userData } = useAuthentication();
  const codeTalkId = "lht7wxNInPIl2rYFhvSL";
  const [selected, setSelected] = useState(false);

  const [joinedCodetalk, setJoinedCodeTalk] = useState(false);

  useEffect(() => {
    if (userData) {
      setJoinedCodeTalk(userData.communities[codeTalkId] ? userData.communities[codeTalkId] : false);
      setSelected(userData.communities[codeTalkId] ? userData.communities[codeTalkId] : false);
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
    <View style={styles.container}>
      <View style={styles.organizationContainer}>
        <View style={styles.modalNotch}></View>
        <View style={styles.organizationContent}>
          <TouchableOpacity
            style={{ width: "100%"}}
            activeOpacity={0.7}
            onPress={() => {
              // navigation.popToTop();
              navigation.goBack()
              navigation.navigate("Communities")
            }}
          >
            <View style={styles.closeOrganizationModalContainer}>
              <Image style={styles.closeOrganizationIcon} source={require("../../assets/snapchat/CommunitiesModalXIcon.png")} />
            </View>
          </TouchableOpacity>

          <View style={ styles.communityInfo }>

            <View style={ styles.communityInfoLogoContainer }>
              <View style={ styles.communityInfoLogoInnerContainer }>
                <View style={ styles.communityInfoLogoInnerInnerContainer }>
                  <Image style={styles.communityImage} source={require("../../assets/snapchat/CodeTalkLogo.png")} />
                </View>
              </View>
            </View>

            <View style={styles.communityInfoRight}>
              <Text style={{ fontWeight: "600", fontSize: 18, marginBottom: 5 }}>Code Talk</Text>
              <Text style={{ fontWeight: "500", fontSize: 14, color: "#666d77" }}>Technology Training Program</Text>
            </View>
          </View>

          <View style={styles.communityHoursNumAddy}>
            <View style={styles.communityHours}>
              <Text style={{ fontSize: 14, fontWeight: "600", color: "#5dba58", marginRight: 5 }}>Open Now</Text>
              <Text style={{ fontSize: 14, fontWeight: "500", marginRight: 5  }}>9:00 AM - 5:00 PM</Text>
              <View style={styles.timeDownArrowContainer }>
                <Image style={styles.timeDownArrowImage } source={require("../../assets/snapchat/down.png")} />
              </View>
            </View>

            <View style={styles.communityAddress}>
              <View>
                <Image style={styles.locImageStyle} source={require("../../assets/snapchat/pingrey.png")} />
              </View>
              <View style={styles.communityStreet}>
                <Text>204 Hampton Drive, Venice, California</Text>
              </View>
            </View>

            <View style={styles.phoneNumberContainer}>

              <View style={styles.phoneImgContainer}>
                <Image style={styles.phoneImg} source={require("../../assets/snapchat/phonegrey.png")} />
              </View>
              <Text style={styles.phoneNumber}>(310) 396-6488</Text>

              <View style={styles.websiteContainer}>
                <View style={styles.websiteImageContainer}>
                  <Image style={styles.websiteImage} source={require("../../assets/snapchat/earthgrey.png")} />
                </View>

                <Text style={styles.websiteUrl}>stjosephctr.org/codetalk</Text>
              </View>

            </View>
          </View>

          <View style={styles.buttonsContainer}>
            <View style={styles.communityGreyButton}>
              <Image style={styles.communityGreyButtonImage} source={require("../../assets/snapchat/heart.png")} />
            </View>

            <View style={styles.communityGreyButton}>
              <Image style={styles.communityGreyButtonImage} source={require("../../assets/snapchat/fork.png")} />
            </View>

            <TouchableOpacity
              activeOpacity={0.7}
              style={{ width: "52%"}}
              onPress={() => {
                setSelected(!selected);
                onJoin(codeTalkId, !selected);
              }}
            >
              <View style={[styles.communityJoinButton, selected ? styles.selected : ""]}>
                <Text style={[styles.communityButtonText, selected ? styles.selectedText : ""]}>{ selected ? "Joined" : "Join"}</Text>
              </View>
            </TouchableOpacity>

          </View>


          <View style={styles.cardInfoContainer}>
            <View style={styles.aboutCardInfo}>
              <Text style={{ fontWeight: "700", fontSize: 17, marginBottom: 10 }}>About</Text>
              <OrgnizationInfoCard info="Codetalk is a digital web technology job training program for low income, underemployed and underserved women." />
            </View>

            <View style={styles.yourImpactCardInfo}>
              <Text style={{ fontWeight: "700", fontSize: 17, marginBottom: 10 }}>Your Impact</Text>
              <OrgnizationInfoCard info="In a supportive classroom environment you will learn the fundamentals of front end web development and more!" />
            </View>

            <View style={styles.reachOutCardInfo}>
              <Text style={{ fontWeight: "700", fontSize: 17, marginBottom: 10 }}>Reach Out</Text>
            </View>
          </View>

          <View style={styles.bottomImagesContainer}>

            <View style={styles.coordinatorImageContainer}>
              <Image style={styles.coordinatorImage} source={require("../../assets/snapchat/OutreachCoord.png")} />

              <View style={styles.coordinatorNameContainer}>
                <Text style={{ fontSize: 15, fontWeight: "600" }}>David Xavier</Text>
                <Text style={{ fontWeight: "300" }}>Outreach Coordinator</Text>

                <View style={styles.contactButtonContainer}>
                  <Text style={{ fontSize: 12, fontWeight: "600", color: "#fff", textAlign: "center" }}>Contact</Text>
                </View>
              </View>

            </View>


          </View>
        </View>

        <View style={styles.bitmojiImageContainer}>
          <Image style={styles.bitmojiImage} source={require("../../assets/snapchat/bookStickerBitmoji.png")} />
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
  organizationContainer: {
    height: "98%",
    width: "100%",
    backgroundColor: "#f7f8f8",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  organizationContent: {
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
  },
  modalNotch: {
    backgroundColor: "#cfd3d8",
    padding: 2.5,
    width: "10%",
    position: "absolute",
    right: "45%",
    top: 5,
    borderRadius: 50,

  },
  closeOrganizationModalContainer: {
    backgroundColor: "#eceef0",
    padding: 15,
    borderRadius: 50,
    position: "absolute",
    right: 0,
  },
  closeOrganizationIcon: {
    width: 10,
    height: 10
  },
  communityInfo: {
    flexDirection: "row",
    marginTop: 15,
    alignItems: "center"
  },
  communityInfoLogoContainer: {
    backgroundColor: "#fae44c",
    borderRadius: 50,
    padding: 4,
  },
  communityInfoLogoInnerContainer: {
    backgroundColor: "#fff",
    borderRadius: 50,
    padding: 4,
  },
  communityInfoLogoInnerInnerContainer: {
    backgroundColor: "#000",
    borderRadius: 50,
    padding: 1,
  },
  communityImage: {
    width: 75,
    height: 75,
  },
  communityInfoRight: {
    marginLeft: 10,
  },
  communityHoursNumAddy: {
    
  },
  communityHours: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  timeDownArrowContainer: {
    backgroundColor: "#eceef0",
    borderRadius: 50,
    alignItems: "center",
    alignContent: "center",
    padding: 5,
  },
  timeDownArrowImage: {
    width: 10,
    height: 10,
  },
  locImageStyle: {
    width: 15,
    height: 15,
  },
  communityAddress: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
  },
  communityStreet: {
    marginLeft: 5,
  },
  phoneImg: {
    width: 12,
    height: 12,
  },
  phoneNumberContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginLeft: 2,
  },
  phoneNumber: {
    marginLeft: 5,
    color: "#4faaf8",
  },
  websiteContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  websiteImageContainer: {
    marginLeft: 20,
    marginRight: 5,
  },
  websiteImage: {
    width: 12,
    height: 12,
  },
  websiteUrl: {
    color: "#4faaf8",
  },
  cardInfoContainer: {
    marginTop: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 30,
  },
  communityGreyButton: {
    backgroundColor: "#eceef0",
    borderRadius: 50,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 12,
    paddingBottom: 12,
    marginRight: 12,
  },
  communityGreyButtonImage: {
    width: 15,
    height: 15,
  },
  communityJoinButton: {
    backgroundColor: "#eceef0",
    borderRadius: 50,
    width: "100%",
    paddingTop: 12,
    paddingBottom: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomImagesContainer: {
    flexDirection: "row",
  },
  coordinatorImage: {
    height: 80,
    width: 80,
  },
  bitmojiImage: {
    width: 250,
    height: 210,
  },
  coordinatorImageContainer: {
    flexDirection: "row",
  },
  bitmojiImageContainer: {
    position: "absolute",
    right: -85,
    bottom: 0,
  },
  coordinatorNameContainer: {
    marginTop: "5%",
    marginLeft: 5,
  },
  contactButtonContainer: {
    backgroundColor: "#4faaf8",
    borderRadius: "50",
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 7,
    paddingBottom: 7,
    alignContent: "center",
    justifyContent: "center",
    marginTop: 5,

  },
  communityButtonText: {
    color: "#000", 
    fontWeight: "700", 
    fontSize: 15
  },
  selected: {
    backgroundColor: "#4faaf8",
  },
  selectedText: {
    color: "#fff",
  },

});