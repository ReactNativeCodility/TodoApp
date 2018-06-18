import React, { Component } from 'react';
import { View } from 'react-native';

import PersonInput from './src/components/PersonInput/PersonInput';
import PersonList from './src/components/PersonList/PersonList';

export default class App extends Component {
  state = {
    persons: []
  }

  personAddedHandler = personName => {
    this.setState(prevState => {
      return {
        persons: prevState.persons.concat(personName)
      };
    });
  }

  personDeletehandler = index => {
    this.setState(prevState => {
      return {
        persons: prevState.persons.filter((person, i) => {
          return i !== index;
        })
      };
    });
  }

  render() {
    return (
      <View>
        <PersonInput onPersonAdded={this.personAddedHandler} />
        <PersonList
          persons={this.state.persons}
          onItemDeleted={this.personDeletehandler}
        />
      </View>
    );
  }
}