import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {
    ActivityIndicator,
    StatusBar,
    View,
} from 'react-native';
import firebase from 'firebase';
import User from '../User';

export default class AuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    };

    componentDidMount() {
        var config = {
            apiKey: "AIzaSyBP4QwBnLxBUSjBU5G_lKIprN04IQjqkLg",
            authDomain: "fir-chat-e2f57.firebaseapp.com",
            databaseURL: "https://fir-chat-e2f57.firebaseio.com",
            projectId: "fir-chat-e2f57",
            storageBucket: "fir-chat-e2f57.appspot.com",
            messagingSenderId: "858857929120",
        };
        // Initialize Firebase
        firebase.initializeApp(config);
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        Userphone = await AsyncStorage.getItem('userPhone');
        this.props.navigation.navigate(Userphone ? 'App' : 'Auth');
    };

    // Render any loading content that you like here
    render() {
        return (
            <View>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}