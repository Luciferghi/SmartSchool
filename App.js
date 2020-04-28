import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';
import Constants from 'expo-constants';

// or any pure javascript modules available in npm
import { Card, Container } from 'react-native-paper';
import LoginScreen from './screens/LoginScreen';
import Dashboard from './screens/Dashboard';
import Destination from './router/Router';


const { width: WIDTH } = Dimensions.get('window');

function App() {
  return (<Destination />);
}

const styles = StyleSheet.create({});

export default App;
