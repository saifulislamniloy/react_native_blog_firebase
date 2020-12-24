import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Card, Avatar } from "react-native-elements";
import { AuthContext } from "../providers/AuthProvider";
import HeaderHome from "./../components/HeaderHome";
const ProfileScreen = (props) => {
  return (
    <AuthContext.Consumer>
      {(auth) => (
        <View style={styles.viewStyle}>
          <HeaderHome
            DrawerFunction={() => {
              props.navigation.toggleDrawer();
            }}
          />
          <Card>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ alignSelf: "center", fontSize: 25 }}>
                {auth.CurrentUser.name}
              </Text>
              <Text style={{ alignSelf: "center", fontSize: 15 }}>
                {auth.CurrentUser.email}
              </Text>
              <Text style={{ alignSelf: "center", fontSize: 15 }}>
                {auth.CurrentUser.sid}
              </Text>
            </View>
          </Card>
        </View>
      )}
    </AuthContext.Consumer>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "blue",
  },
  viewStyle: {
    flex: 1,
  },
});

export default ProfileScreen;
