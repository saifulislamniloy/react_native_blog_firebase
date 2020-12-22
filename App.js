import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStackScreen from "./src/navigation/AuthStack";
import AppDrawerScreen from "./src/navigation/AppDrawer";
import { AuthContext, AuthProvider } from "./src/providers/AuthProvider";
import * as firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyAI4lVRBN-QG4cPpDo8IbjBNiOP2YNhmtw",
  authDomain: "blog-54d11.firebaseapp.com",
  projectId: "blog-54d11",
  storageBucket: "blog-54d11.appspot.com",
  messagingSenderId: "584401667761",
  appId: "1:584401667761:web:8ae82586b655e89550c490"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <AuthProvider>
      <AuthContext.Consumer>
        {(auth) => (
          <NavigationContainer>
            {auth.IsLoggedIn ? <AppDrawerScreen /> : <AuthStackScreen />}
          </NavigationContainer>
        )}
      </AuthContext.Consumer>
    </AuthProvider>
  );
}

export default App;
