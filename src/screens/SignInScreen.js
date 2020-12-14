import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button, Card } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../providers/AuthProvider';

const SignInScreen = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <AuthContext.Consumer>
            {(auth)=>(<View style={styles.viewStyle}>
                <Card>
                    <Card.Title>Welcome to My Blog App</Card.Title>
                    <Card.Divider />
                    <Input
                        placeholder="Email Address" 
                        leftIcon= {(<FontAwesomeIcon icon={faEnvelope} size={25} color={"#42f5ec"} />)}
                        onChangeText={function (currentInput) { setEmail(currentInput) }} />
                    <Input
                        placeholder="Password"
                        leftIcon= {(<FontAwesomeIcon icon={faKey} size={25} color={"blue"} />)}
                        secureTextEntry={true} 
                        onChangeText={function (currentInput) { setPassword(currentInput) }} />
                    <Button
                        title="Sign In"
                        onPress={alert("sign in")} />
                    <Button
                        type="clear"
                        title="Don't have an account? Click here"
                        onPress={function () { props.navigation.navigate("SignUpScreen") }} />
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

export default SignInScreen;