import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: '#F5fcff',
    },
    input: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        width: '80%',
        marginBottom: 10,
        borderRadius: 5
    },
    inputMessage: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        width: '85%',
        marginBottom: 10,
        borderRadius: 20
    },
    btnText: {
        color: 'darkblue',
        fontSize: 20,
    },
    bottomBar: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        position: 'absolute',
        bottom: 1,
        left: 0,
        right: 0,
        zIndex: 2,
        height: 60,
        marginLeft: 13
    },
    sendButton: {
        alignItems: 'center',
        marginBottom: 10,
        marginLeft: 10,
        height: 40,
        width: 40,
        paddingTop: 10,
        paddingLeft: 5,
        backgroundColor: '#2196F3',
        borderRadius: 20
    }
});

export default styles;