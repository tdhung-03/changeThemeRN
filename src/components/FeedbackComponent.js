import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Keyboard,
} from 'react-native';

const FeedbackComponent = ({textStyle, notificationEnabled}) => {
  const [feedback, setFeedback] = useState('');
  const [feedbackList, setFeedbackList] = useState([]);

  const handleFeedbackSubmit = () => {
    if (feedback.trim() !== '') {
      // Add the feedback to the list
      setFeedbackList([...feedbackList, feedback]);

      // Show an alert if notifications are enabled
      if (notificationEnabled) {
        Alert.alert('Thank you for your feedback!', '', [{text: 'OK'}]);
      }

      // Clear the input field
      setFeedback('');
      Keyboard.dismiss();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, textStyle]}>Feedback</Text>
      <TextInput
        style={[styles.input, textStyle]}
        value={feedback}
        onChangeText={setFeedback}
      />
      <Button title="Send Feedback" onPress={handleFeedbackSubmit} />
      <Text style={[styles.text, textStyle, styles.feedbackListTitle]}>
        Frenquently Asked Questions
      </Text>
      {feedbackList.map((item, index) => (
        <Text
          key={index}
          style={[styles.text, textStyle, styles.feedbackListItem]}>
          {item}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
  },
  text: {
    fontSize: 15,
  },
  title: {
    fontSize: 20,
    marginBottom: 7,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  feedbackListTitle: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
  feedbackListItem: {
    marginTop: 5,
  },
});

export default FeedbackComponent;
