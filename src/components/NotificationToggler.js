import React from 'react';
import {Switch, Text, View, StyleSheet} from 'react-native';

const NotificationToggle = ({textStyle, notificationEnabled, onToggle}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, textStyle]}>Notifications</Text>
      <Switch
        value={notificationEnabled}
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
export default NotificationToggle;
