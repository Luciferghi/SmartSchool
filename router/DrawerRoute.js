import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from '../screens/Dashboard';
import {DrawerContent} from '../screens/DrawerContent';
import Details from '../screens/Details';

const Drawer = createDrawerNavigator();

export default function DrawerRoute() {
  return (
      <Drawer.Navigator initialRouteName="Dashboard" drawerContent = { props => <DrawerContent { ...props } />}>
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