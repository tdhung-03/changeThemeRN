import React from 'react';
import {Switch, Text, View, StyleSheet} from 'react-native';

const ThemeToggle = ({textStyle, isDarkMode, onToggle}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, textStyle]}>Dark Mode</Text>
      <Switch
        value={isDarkMode}
        onValueChange={onToggle}
        accessibilityState={{disabled: false}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  text: {
    fontSize: 15,
  },
});
export default ThemeToggle;
