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
  TouchableHighlight,
  View,
  Modal,
  Picker,
  Switch
} from 'react-native';

class Button extends Component {
  
  state = {
    active: false,
  };  

  _onHighlight = () => {
    this.setState({active: true});
  };

  _onUnhighlight = () => {
    this.setState({active: false});
  };

  render() {
    var colorStyle = {
      color: this.state.active ? '#fff' : '#000',
    };    
    return (
    <TouchableHighlight
      onHideUnderlay={this._onUnhighlight}
      onPress={this.props.onPress}
      onShowUnderlay={this._onHighlight}
      style={[styles.button, this.props.style]}
      underlayColor="#a9d9d4">
        <Text style={[styles.buttonText, colorStyle]}>{this.props.children}</Text>
    </TouchableHighlight>      
    );
  }
}

export default class ModalExample extends Component {

  state = {
    modalVisible: false,
    animationType: 'none',
    transparent: false
  }

  _setModalVisible = (type) => {
    this.setState({modalVisible: type});
  }

  _setAnimationType = (type) => {
    this.setState({animationType: type});
  }

  _toggleTransparent = () => {
    this.setState({transparent: !this.state.transparent});
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    
    var modalBackgroundStyle = {
      backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : '#f5fcff',
    };
  
    var innerContainerTransparentStyle = this.state.transparent ? {backgroundColor: '#fff', padding: 20} : null;
    
    var activeButtonStyle = { backgroundColor: '#ddd' }; 

    return (
      <View style = {styles.topStatusBar}>
        <Modal
          animationType={this.state.animationType}
          transparent={this.state.transparent}
          visible={this.state.modalVisible}
          onRequestClose={() => this._setModalVisible(false)}
          >
          <View style={[styles.container, modalBackgroundStyle]}>
          <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
            <Text>This modal was presented {this.state.animationType === 'none' ? 'without' : 'with'} animation.</Text>
            <Button
              onPress={this._setModalVisible.bind(this, false)}
              style={styles.modalButton}>
              Close
            </Button>
          </View>
          </View>
        </Modal>

        <View style={styles.row}>
          <Text style={styles.rowTitle}>Animation Type</Text>
          <Button onPress={this._setAnimationType.bind(this, 'none')} style={this.state.animationType === 'none' ? activeButtonStyle : {}}>
          none
          </Button>
          <Button onPress={this._setAnimationType.bind(this, 'slide')} style={this.state.animationType === 'slide' ? activeButtonStyle : {}}>
          slide
          </Button>
          <Button onPress={this._setAnimationType.bind(this, 'fade')} style={this.state.animationType === 'fade' ? activeButtonStyle : {}}>
          fade
          </Button>
        </View>
        <View style={{marginTop:50,flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
          <Text style={{color:'grey',fontWeight: 'bold',marginRight:20}}>Transparent</Text>
          <Switch value={this.state.transparent} onValueChange={this._toggleTransparent} />
        </View>
        <Button onPress={this._setModalVisible.bind(this, true)}>
          Present
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topStatusBar:{
    paddingTop: 40
  },

 container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  innerContainer: {
    borderRadius: 10,
    alignItems: 'center',
  },
  row: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
  },
  rowTitle: {
    flex: 1,
    fontWeight: 'bold',
  },
  button: {
    borderRadius: 5,
    flex: 0,
    height: 44,
    alignSelf: 'stretch',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  buttonText: {
    fontSize: 18,
    margin: 5,
    textAlign: 'center',
  },
  modalButton: {
    marginTop: 10,
  },
  pickerItem: {
    fontSize: 16,
  },
});

AppRegistry.registerComponent('ModalExample', () => ModalExample);
