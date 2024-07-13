import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Dimensions } from 'react-native';
import colors from './colors';

const GradientBackground = ({ children }) => {
  return (
    <LinearGradient colors={[colors.gradientStart, colors.gradientEnd]} style={styles.gradient}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default GradientBackground;
