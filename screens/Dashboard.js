import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Details from './Details';
import {DrawerContent} from './DrawerContent';



const Drawer = createDrawerNavigator();


function HomeScreen({ navigation }) {
  return (
    <View style = {styles.menu} >
   
    <Header
      leftComponent={{ icon: 'menu', color: '#fff', onPress : () => navigation.openDrawer() }}
      centerComponent={{ text: 'DashBoard', style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
  />
    </View>
  );
}


export default function Dashboard() {
  return (
      <Drawer.Navigator initialRouteName="Home" drawerContent = { props => <DrawerContent { ...props } />}>
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