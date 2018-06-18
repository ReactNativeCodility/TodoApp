import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default listItem = (props) => (
    <TouchableOpacity>
        <View style={styles.listItem}>
            <Text style={styles.textStyle}>{props.personName}</Text>
            <Button style={styles.ButtonStyle} title= "Delete" onPress={props.onItemPressed} />
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({

    listItem: {
        width: "100%",
        padding: 10,
        backgroundColor: "#eee",
        marginBottom: 5,
        flexDirection:'row',
        alignItems: 'center',
    },
    textStyle:{
        width: '80%'
    },
    ButtonStyle: {
        width:'20%'
    }
});