import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from './Dashboard';
import {DrawerContent} from './DrawerContent';


function Details({ navigation }) {
  return (
    <View style = {styles.menu} >
   
    <Header
      leftComponent={{ icon: 'menu', color: '#fff', onPress : () => navigation.openDrawer() }}
      centerComponent={{ text: 'Details', style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
  />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function Detail() {
  return (
      <Drawer.Navigator drawerContent = { props => <DrawerContent { ...props } />}>
        <Drawer.Screen name="Details" component={Details} />
        <Drawer.Screen name="Dashboard" component={Dashboard} />

      </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  menu:{
    marginTop: -30,
  }
})