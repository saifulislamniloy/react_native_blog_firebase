import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button, Card } from 'react-native-elements';
import { AuthContext } from "../providers/AuthProvider";


const SignUpScreen = (props) => {
    const [name, setName] = useState("");
    const [sid, setSid] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <AuthContext.Consumer>
            {(auth) => (<View style={styles.viewStyle}>
                <Card>
                    <Card.Title>Welcome to My Blog App</Card.Title>
                    <Card.Divider />
                    <Input
                        placeholder="Name"
                        onChangeText={function (currentInput) { setName(currentInput) }} />
                    <Input
                        placeholder="Student ID"
                        onChangeText={function (currentInput) { setSid(currentInput) }} />
                    <Input
                        placeholder="Email Address"
                        onChangeText={function (currentInput) { setEmail(currentInput) }} />
                    <Input
                        placeholder="Password"
                        secureTextEntry={true}
                        onChangeText={function (currentInput) { setPassword(currentInput) }} />
                    <Button title="Sign Up"
                        onPress={function () {
                            let currentUser = { name:name, sid:sid, email:email, password:password }
                            storeDataJson(email, currentUser)
                            props.navigation.navigate("SignInScreen")
                        }} />
                    <Button
                        type="clear"
                        title="Already have an account? Click here"
                        onPress={function () { props.navigation.navigate("SignInScreen") }} />


                </Card>
            </View>)}
        </AuthContext.Consumer>
    );
}

const styles = StyleSheet.create({
    viewStyle:{
        flex:1,
        justifyContent:"center",
        backgroundColor:"orange"
    },
    card:{
        alignContent:"center"
    }
})


export default SignUpScreen;