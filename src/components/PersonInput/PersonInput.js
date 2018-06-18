import React, { Component } from 'react';
import { View, TextInput, Text, Button, StyleSheet, ToastAndroid } from 'react-native';

export default class PersonInput extends Component {
    state = {
        personName: ""
    }

    addPersonHandler = val => {
        this.setState({
            personName: val
        });
    };

    submitHandler = () => {
        if (this.state.personName == "") {
            return ToastAndroid.show('Person name is empty !!', ToastAndroid.SHORT);
        }

        this.props.onPersonAdded(this.state.personName);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerTextStyle}>React-Native Codility</Text>
                <View style={{ backgroundColor: 'red', height: '1%', width: '100%' }} />
                <View style={styles.viewContainer}>
                    <TextInput
                        style={styles.welcome}
                        onChangeText={this.addPersonHandler}
                        value={this.state.personName}
                        placeholder={'Enter message...'} />

                    <Button title="Add" onPress={this.submitHandler} color="green" />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',

    },
    viewContainer: {
        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',

    },
    headerTextStyle: {
        fontSize:35,
        padding:15,
        color:'green'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        width: '80%'
    },

});