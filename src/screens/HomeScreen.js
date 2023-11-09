import {useState} from 'react';
import {View, useColorScheme, StyleSheet} from 'react-native';
import Header from '../components/Header';
import ThemeToggle from '../components/ThemeToggler';
import NotificationToggle from '../components/NotificationToggler';
import FeedbackComponent from '../components/FeedbackComponent';

const HomeScreen = () => {
  // Theme handling
  const colorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark');
  const toggleSwitch = () => {
    setIsDarkMode(!isDarkMode);
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: 20,
      paddingHorizontal: 20,
      backgroundColor: isDarkMode ? 'black' : 'white',
    },
    text: {
      color: isDarkMode ? 'white' : 'black',
    },
  });

  // Notifications handling
  const [notificationEnabled, setNotificationEnabled] = useState(false);
  const toggleNotification = () => {
    setNotificationEnabled(!notificationEnabled);
  };

  // Feedback handling

  return (
    <View style={styles.container}>
      <Header textStyle={styles.text} />
      <ThemeToggle
        textStyle={styles.text}
        isDarkMode={isDarkMode}
        onToggle={toggleSwitch}
      />
      <NotificationToggle
        textStyle={styles.text}
        notificationEnabled={notificationEnabled}
        onToggle={toggleNotification}
      />
      <FeedbackComponent
        textStyle={styles.text}
        notificationEnabled={notificationEnabled}
      />
    </View>
  );
};
export default HomeScreen;
