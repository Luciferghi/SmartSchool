import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';

const Logo = () => (
  <Image source={require('../assets/nitschool.png')} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
    width: 165,
    height: 150,
    marginBottom: 12,
  },
});

export default memo(Logo);