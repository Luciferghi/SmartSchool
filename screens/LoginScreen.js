import React, { memo, useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import { theme } from '../core/theme';
import {AsyncStorage} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './Dashboard';

const LoginScreen = ({ navigation, props }) => {
   const [email, setEmail] = useState();
   const [password, setPassword] = useState();

  
  const myfun = async() => {
  await fetch("https://nitschool.ga/api/login",{
    method: 'POST',
    headers: {
      'Accept': 'Application/json',
      'Content-Type': 'Applicaton/json'
    },
    body: JSON.stringify({"email": email, "password": password })
  }).then(res => res.json())
  .then(resData => {
   if(resData.success){
 return (() => navigation.navigate('Dashboard') );
     //alert(resData.success);
   }
   else{
 return (() => navigation.navigate('Dashboard') );
   }
  });
  }

  return (
    <Background>
      <Logo />

      <Header>Welcome To NitSchool</Header>

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email}
        onChangeText={(value) => setEmail(value)}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password}
        onChangeText={(value) => setPassword(value)}
        secureTextEntry
      />

      <View style={styles.forgotPassword}>
        <TouchableOpacity
          
        >
          <Text style={styles.label}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>

      <Button mode="contained" onPress={() => navigation.navigate('Dashboard') }>
        Login
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Don’t have an account? Contact School [</Text>
        <TouchableOpacity >
          <Text style={styles.link}></Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default memo(LoginScreen);