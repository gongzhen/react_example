/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

export default class TextInputExample extends Component {
    constructor(props) {
      super(props);
    
      this.state = {text: ' '};
    }  

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.container}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}/>
        <Text style={styles.inputContainer}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop:40,
    padding:10
  },
  inputFieldContainer: {
    padding:40,
  },
  inputContainer: {
    padding: 10, 
    fontSize: 42
  },  
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TextInputExample', () => TextInputExample);
