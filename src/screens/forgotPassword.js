import React, {Component} from 'react';
import {
  View,
  ImageBackground,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

class forgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Ini Page Lupa PW</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b2a2a',
  },

  welcomeText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 40,
    marginTop: 25,
  },
});

export default forgotPassword;
