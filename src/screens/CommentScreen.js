import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList, ActivityIndicator } from 'react-native';
import { Header, Card, Button, Input } from 'react-native-elements';
import { Entypo } from "@expo/vector-icons";
import * as firebase from "firebase";
import "firebase/firestore";

class CommentScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading:false,
        }
    }

    componentDidMount() {
        console.log(this.props.route.params.blogId)
        const db = firebase.firestore()
        let comments = db.collection("posts").doc("0VwanGiXybvIKOqhfp75").get().then(function (doc) {
            if (doc.exists) {
                console.log("Data: ", doc.data())
            }
        })
    }

    renderComment = (item) => (
        <Card>
            <Text style={{ alignSelf: "flex-start", fontSize: 25 }}>
                <FontAwesomeIcon icon={faUser} size={20} color={"blue"} />
                {item.commenter}
            </Text>
            <Card.Divider />
            <Text style={{ fontStyle: "italic", color: "gray" }}>{item.comment}</Text>
        </Card>
    );

    render() {
        let i = 0;
        return (
            <View>
                <Header
                    centerComponent={{ text: "Comments" }}
                />
                <Card>
                    <Input
                        placeholder="What's On Your Mind?"
                        leftIcon={<Entypo name="pencil" size={24} color="black" />}
                        onChangeText={(currentText) => {
                            setInput(currentText);
                        }}
                    />
                    <Button
                        title="Comment"
                        type="outline"
                        onPress={function () {
                            firebase
                                .firestore()
                                .collection("posts").doc("LezVsYrs1WFIWPFVLwje")
                                .update({
                                    comments: "test ",
                                })
                                .then((docRef) => {
                                })
                                .catch((error) => {
                                    alert(error);
                                });
                        }}
                    />
                </Card>
                <ActivityIndicator size="large" color="red" animating={this.state.loading} />

                <FlatList
                    data={this.state.commentData}
                    renderItem={({ item }) => {
                        return (
                            <this.renderComment
                                commenter={item.commenter}
                                comment={item.comment}
                            />)
                    }}
                    keyExtractor={item => `${i++}`}
                />
            </View>
        );
    }
}

export default CommentScreen;