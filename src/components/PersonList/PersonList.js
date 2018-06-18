import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import ListItem from '../ListItems/ListItem';


const personList = props => {

    const output = props.persons.map((person, i) => (
        <ListItem
            key={i}
            personName={person}
            onItemPressed={() => props.onItemDeleted(i)}
        />
    ));
    return (
        <ScrollView>
            <View style={styles.container}>{output}</View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
   container:{
       paddingBottom:30
   } 
});

export default personList;