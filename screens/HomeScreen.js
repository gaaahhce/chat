import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { SafeAreaView, Text, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import User from '../User';
import firebase from 'firebase';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null
    }

    state = {
        users: [],
        dbRef: firebase.database().ref('users')

    }

    componentDidMount() {
        this.state.dbRef.on('child_added', (val) => {
            let person = val.val();
            person.phone = val.key;
            if (person.phone === User.phone) {
                User.name = person.name
            } else {
                this.setState((prevState) => {
                    return {
                        users: [...prevState.users, person]
                    }
                })
            }
        })
    }

    renderRow = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Chat', item)}
                style={{ padding: 10, borderBottomColor: '#ccc', borderBottomWidth: 1 }}>
                <Text style={{ fontSize: 20 }}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        const { height } = Dimensions.get('window');
        return (
            <SafeAreaView>
                <FlatList
                    data={this.state.users}
                    renderItem={this.renderRow}
                    keyExtractor={(item) => item.phone}
                    ListHeaderComponent={() => <Text style={{ fontSize: 30, marginVertical: 10, marginLeft: 10, fontWeight: 'bold' }}>Chats</Text>}
                />
            </SafeAreaView>
        )
    }
}