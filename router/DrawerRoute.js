import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';



const Drawer = createDrawerNavigator();

export default function DrawerRoute() {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Details" component={Details} />
      </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  menu:{
    marginTop: -30,
  }
})