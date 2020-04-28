import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Header } from 'react-native-elements'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function HeaderDash({ navigation }) {
  return (
    <View>
   
    <Header
      leftComponent={{ icon: 'menu', color: '#fff', onPress : () => navigation.openDrawer() }}
      centerComponent={{ text: 'DashBoard', style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
  />
    </View>
  );
}

const styles = StyleSheet.create({
	menu : {
		marginTop: -30,
	}
})


export default HeaderDash