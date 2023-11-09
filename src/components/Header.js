import {Text, Image, StyleSheet, View} from 'react-native';

const Header = ({textStyle}) => {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/logo-og.png')} />
      <Text style={[styles.text, textStyle]}>React Native App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 5,
  },
  text: {
    fontWeight: '700',
    textAlign: 'center',
  },
});
export default Header;
