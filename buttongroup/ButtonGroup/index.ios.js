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
  View,
  Image, 
  Navigator,
  Button,
  Alert,
  TouchableHighlight
} from 'react-native';

const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};

export default class ButtonGroup extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={onButtonPress}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button" />
        <Button
          onPress={onButtonPress}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button" />          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ButtonGroup', () => ButtonGroup);
