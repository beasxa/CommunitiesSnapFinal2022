import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity, Image, StyleSheet } from 'react-native';

import SearchBox from '../components/SearchBox.js';
import MembersCard from '../components/MembersCard.js';

export default function CommunityMembersScreen({ navigation }) {
  return (
    <View style={ styles.container }>
      <View style={ styles.organizationContainer }>
        <View style={ styles.organizationContent }>
          <View style={ styles.organizationContentTop }>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                navigation.popToTop();
              }}
            >
              <View style={ styles.closeOrganizationModalContainer }>
                <Image style={ styles.closeOrganizationIcon } source={require("../../assets/snapchat/CommunitiesModalXIcon.png")} />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.organizationLogoContainer}>
              <View style={styles.organizationLogoStory}>
                <View style={styles.organizationLogoOuterStory}>
                  <View style={styles.organizationLogoInnerContainer}>
                    <Image style={styles.organizationLogoImage} source={require("../../assets/snapchat/CodeTalkLogo.png")}/>
                  </View>
                </View>
              </View>
          </View>
          
          <View style={styles.organzationNameContainer}>
            <View style={styles.organizationName}>
              <Text style={{fontWeight: "600", fontSize: 21,}}>Code Talk</Text>
            </View>

            <View style={styles.organizationDescription}>
              <Text style={{fontWeight: "300", fontSize: 14}}>Technology Training Program</Text>
            </View>          
          </View>

          <View style={styles.buttonsContainer}>
            <View style={styles.communityMembersButton}>
              <Text style={{color: "#000", fontWeight: "700"}}>Community Chat</Text>
            </View>
            <View style={styles.communityMembersButton}>
              <Text style={{color: "#000", fontWeight: "700"}}>Resources</Text>
            </View>
          </View>

          <View style={styles.searchBoxContainer}>
              <SearchBox initialText={"Search Members"}/>
          </View>
          
          <View style={styles.membersContainer}>
              <MembersCard name="Ashley Beasley" imageUrl={require("../../assets/snapchat/Ashley.png")}/>
              <MembersCard name="Diego Godinez" imageUrl={require("../../assets/snapchat/Diego.png")}/>
              <MembersCard name="Nyah Gaitan" imageUrl={require("../../assets/snapchat/placeholder.png")}/>
              <MembersCard name="Vanessa Malabanan" imageUrl={require("../../assets/snapchat/Vanessa.png")}/>
              <MembersCard name="Community Member" imageUrl={require("../../assets/snapchat/placeholder.png")}/>
          </View>

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
    height: "100%",
    width: "100%",
    backgroundColor: "#f7f8f8",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  organizationContent: {
    marginTop: 12,
    marginLeft: 15,
    marginRight: 15,
  },
  organizationContentTop: {

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
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 1},
    shadowOpacity: 0.02,
    shadowRadius: 10,
  },
  organizationLogoContainer: {
    marginTop: 10,
    marginBottom: 5,
    alignSelf: "center",

  },
  organizationLogoOuterStory: {
    backgroundColor: "#fff",
    borderRadius: 50,
    padding: 4,
  },
  organizationLogoInnerContainer: {
    backgroundColor: "#000",
    borderRadius: 50,
    padding: 2,
  },
  organizationLogoImage: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  organizationLogoStory: {
    backgroundColor: "#fae44c",
    borderRadius: 50,
    padding: 4,
  },
  organzationNameContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  organizationName: {
    justiifyContent: "center",
  },
  organizationDescription: {
    alignItems: "center",
  },
  searchBoxContainer: {
    marginTop: "5%",
  },
  membersContainer: {
    marginTop: "5%",
  },
  buttonsContainer: {
   flexDirection: "row",
   justifyContent: "space-between",
   marginTop: 10,
  },
  communityMembersButton: {
    backgroundColor: "#fae44c",
    borderRadius: 50,
    padding: 5,
    width: "49%",
    alignItems:"center",
    paddingTop: 10,
    paddingBottom: 10,
  },
});