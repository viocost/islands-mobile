import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

export default class Vault extends React.Component {
    render(){
	return (
	    <View style={styles.container}>
		<Text> This is going to be vault</Text>
	    </View>
	)
    }
}


const styles = StyleSheet.create({
    container: {
	flex: 1,
	backgroundColor: "#fff",
	alignItems: 'center',
	justifyContent: 'center',
    },
})
