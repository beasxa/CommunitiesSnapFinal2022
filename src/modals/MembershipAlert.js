import React from 'react'
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function MembershipAlert({ navigation }) {
  return (
    <View style={ styles.container }>
      <View style={ styles.membershipAlertContainer }>
        <View style={ styles.membershipAlertContent }>
          <Image style={ styles.membershipAlertImage } source={require("../../assets/snapchat/MembershipJoinBadge.png")} />
          <Text style={ styles.membershipAlertHeaderText }>Welcome to CodeTalk!</Text>
          <Text style={ styles.membershipAlertText }>Checkout your new badge on your profile!</Text>
          <Text style={ styles.membershipAlertText }>Click the badge to find community members to connect!</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.goBack();
              navigation.navigate("Communities");
          }}
          >
          <View style={ [styles.membershipAlertButtonContainer, styles.shadowProp] }>
            <Text style={ styles.membershipAlertButtonText }>Okay</Text>
          </View>
        </TouchableOpacity>

        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  membershipAlertContainer: {
    height: "50%",
    width: "80%",
    backgroundColor: "#f7f8f8",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignSelf: "center",
  },
  membershipAlertContent: {
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  membershipAlertImage: {
    width: 192,
    height: 119,
    borderRadius: 20
  },
  membershipAlertHeaderText: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 20,
  },
  membershipAlertText: {
    textAlign: "center",
    marginBottom: 10,
  },
  membershipAlertButtonContainer: {
    borderRadius: 50,
    marginTop: 15,
    backgroundColor: "#4FAAF8",
  },
  membershipAlertButtonText: {
    fontWeight: "700",
    fontSize: 18,
    color: "#fff",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 50
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },

});