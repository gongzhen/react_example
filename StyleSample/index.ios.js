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
	View
} from 'react-native';

export default class StyleSample extends Component {
	render() {    
		return (
			<View style = {styles.mainContainer}>
				<View style={styles.toolbar}>
					<Text style={styles.toolbarAddButton}>Add</Text>
					<Text style={styles.toolbarTitle}>This is the title</Text> 
					<Text style={styles.toolbarLikeButton}>Like</Text> 
				</View>

				<View style = {styles.content}>
				<Text style={{flex: 0, backgroundColor:'red', marginTop: 0, textAlign: 'center'}}>Column, ROW, center></Text>      
					<View style={styles.columnContainer}>
						<Text>Item Column</Text>
						<View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
						<View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />  
						<View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} /> 
						<View style={{width: 50, height: 50, backgroundColor: 'red'}} /> 
					</View>
					<View style={styles.rowContainer}>
						<Text>Item Row</Text>
						<View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
						<View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />  
						<View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} /> 
						<View style={{width: 50, height: 50, backgroundColor: 'red'}} /> 
					</View> 
					 <View style={styles.itemCenter}>
					 	<Text>Item Center</Text>
						<View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
						<View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />  
						<View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} /> 
						<View style={{width: 50, height: 50, backgroundColor: 'red'}} /> 
					</View> 
				</View>
			</View>     
		);
	}
}


const styles = StyleSheet.create({		

		mainContainer:{
			flex: 1
		},

		content: {
			backgroundColor: '#ebeef0',
			flex: 1
		},

		toolbar:{      
			backgroundColor:'#81c04d',
			paddingTop:30,
			paddingBottom:10,
			flexDirection:'row'    //Step 1
		},

		toolbarAddButton:{
			width: 50,            //Step 2
			color:'#fff'
		},
		toolbarTitle:{   
			color:'#fff',
			textAlign:'center',
			fontWeight:'bold',
			flex:1
		},
		toolbarLikeButton:{
			width: 50,            //Step 2
			color:'#fff'
		},    

		columnContainer: {
			flex: 1,
			flexDirection: 'column',
			justifyContent: 'space-between',
		},

		rowContainer: {
			flex: 1,
			flexDirection: 'row',
			justifyContent: 'space-between',
		},

		itemCenter: {
			flex: 1,
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center'
		},
});

AppRegistry.registerComponent('StyleSample', () => StyleSample);
