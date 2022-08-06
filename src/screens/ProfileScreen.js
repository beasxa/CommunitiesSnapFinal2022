import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity, Image, StyleSheet } from 'react-native';
import MapTopIcon from '../components/MapTopIcon';
import ProfileBadge from '../components/ProfileBadge';
import ProfileCard from '../components/ProfileCard';

export default function ProfileScreen({ navigation }) {
  return (
    <ImageBackground source={require("../../assets/snapchat/3dBitmojiProfilePage.png")} resizeMode="cover" style={styles.backgroundImage}>
      <View style={ styles.container }>
        <View style={ styles.profileModalTopContainer }>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <View style={ styles.profileModalTopLeft }>
              <MapTopIcon imageUrl={require("../../assets/snapchat/left-arroww.png")} smallest={true} />
            </View>
          </TouchableOpacity>
          <View style={ styles.profileModalTopRight }>
            <MapTopIcon imageUrl={require("../../assets/snapchat/uploadw.png")} smaller={true} />
            <MapTopIcon imageUrl={require("../../assets/snapchat/gearw.png")} smaller={true}  style={ styles.profileModalTopRightItem }/>
          </View>
        </View>

        <View style={ styles.profileContainer }>
          <View style={ styles.profileContent }>

            <View style={ styles.profileTopContainer }>
              <View style={ styles.profileTopLeft }>
                <View style={ styles.profileQRCodeContainer}>
                  <Image style={ styles.profileQRCode } source={require("../../assets/snapchat/QRCodeProfilePageIcon.png")} />
                </View>
              </View>

              <View style={ styles.profileTopRight }>
                <Text style={ styles.profileTopRightTextHeader }>Anthony</Text>
                <Text style={ styles.profileTopRightText }>antcodess</Text>
              </View>
            </View>

            <View style={ styles.profileBadges }>
              <ProfileBadge imageUrl={require("../../assets/snapchat/SnapFriendsProfilePageIcon.png")} text={4} />
              <ProfileBadge imageUrl={require("../../assets/snapchat/ZodiacSignProfilePageIcon.png")} text={"Scorpio"} containerStyle={styles.profileBadgeContainerStyle} textStyle={styles.profileBadgeZodiacText} />

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  navigation.navigate("CommunityMembers");
                }}
              >
                <ProfileBadge imageUrl={require("../../assets/snapchat/CodeTalkBadgeIcon.png")} text={"CodeTalk"} containerStyle={styles.profileBadgeContainerStyle} textStyle={styles.profileBadgeIconText} />
              </TouchableOpacity>
              
              <ProfileBadge imageUrl={require("../../assets/snapchat/SnapAcademiesBadgeIcon.png")} text={"Snap Academies"} containerStyle={styles.profileBadgeContainerStyle} textStyle={styles.profileBadgeIconText} />
            </View>

            <ProfileCard topHeader={""} header={"Find Friends on Snapchat"} subtext={"Tap to sync your contacts"} leftImage={require("../../assets/snapchat/notebook.png")} rightImage={require("../../assets/snapchat/findFriendsClose.png")} />
            <ProfileCard topHeader={"My Stories"} header={"Add to My Story"} subtext={""} leftImage={require("../../assets/snapchat/cameraIcon.png")} rightImage={require("../../assets/snapchat/addToMyStoryIcon.png")} style={styles.profileCardContainerStyle}/>
            <ProfileCard topHeader={"Friends"} header={"Add Friends"} subtext={""} leftImage={require("../../assets/snapchat/add-user.png")} rightImage={require("../../assets/snapchat/addFriendsArrow.png")} style={styles.profileCardContainerStyle}/>

            <View style={ [styles.profileMyFriends, styles.shadowProp ] }>
              <Image style={ styles.profileMyFriendsImage } source={require("../../assets/snapchat/profileFriends.png")} />
              
              <View style={ styles.profileMyFriendsTextContainer }>
                <View style={ styles.profileMyFriendsTextLeft }>
                  <Image style={ styles.profileMyFriendsTextImage } source={require("../../assets/snapchat/friendlist.png")} />
                </View>
                <View style={ styles.profileMyFriendsTextRight }>
                  <Text style={ styles.profileMyFriendsText }>My Friends</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "column",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },
  profileModalTopContainer: {
    width: "100%",
    height: 70,
    position: "absolute",
    top: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10
  },
  profileModalTopLeft: {
  },
  profileModalTopRight: {
    justifyContent: "flex-end",
    flexDirection: "row",
    width: 108,
  },
  profileModalTopRightItem: {
    marginLeft: 8,
  },
  profileContainer: {
    height: "70%",
    width: "100%",
    backgroundColor: "#f7f8f8",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  profileContent: {
    marginTop: 25,
    marginLeft: 20,
    marginRight: 20,
  },
  profileTopContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profileTopLeft: {
    marginRight: 20
  },
  profileQRCode: {
    width: 60,
    height: 60,
  },
  profileTopRightTextHeader: {
    fontWeight: "700",
    fontSize: 20,
    marginBottom: 8,
  },
  profileTopRightText: {
    color: "#666d77",
    fontWeight: "600",
  },
  profileBadges: {
    flexDirection: "row",
    marginRight: 20,
  },
  profileBadgeContainerStyle: {
    marginLeft: 5,
  },
  profileBadgeZodiacText: {
    color: "#000000",
  },
  profileBadgeIconText: {
    color: "#000000",
  },
  profilefindFriends: {
    backgroundColor: "#fff",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 30,
    paddingBottom: 30,
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 10,
  },
  profileMyFriends: {
    backgroundColor: "#fff",
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 10,
    paddingBottom: 60,
    marginTop: 10,
    borderRadius: 10,
  },
  profileMyFriendsImage: {
    width: "100%",
    height: 100,
    resizeMode: "contain"
  },
  profileCardContainerStyle: {
    marginTop: 20,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 1},
    shadowOpacity: 0.02,
    shadowRadius: 10,
  },
  profileMyFriendsTextContainer: {
    marginLeft: 10,
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
  },
  profileMyFriendsTextImage: {
    width: 35,
    height: 35,
    resizeMode: "contain"
  },
  profileMyFriendsTextRight: {
    marginLeft: 15,
  },
  profileMyFriendsText: {
    fontWeight: "700",
    fontSize: 15,
  }
});