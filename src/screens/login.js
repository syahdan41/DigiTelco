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

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loginView}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Landing')}>
            <Text style={styles.batalText}>Batal</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('forgotPassword')}>
            <Text style={styles.lupapwText}>Lupa Password</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.welcomeText}>Selamat Datang</Text>
        <TextInput
          value={this.state.username}
          style={styles.userName}
          onChangeText={value => this.setState({username: value})}
        />
        <TextInput
          value={this.state.password}
          style={styles.userPw}
          onChangeText={value => this.setState({password: value})}
        />

        <TouchableOpacity style={styles.userMasuk}>
          <Text style={{color: '#ffff'}}>Masuk</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b2a2a',
  },
  loginView: {
    flexDirection: 'row',
  },
  batalText: {
    color: '#0781C4',
    fontSize: 18,
    marginLeft: 40,
    marginTop: 25,
  },
  lupapwText: {
    color: '#0781C4',
    fontSize: 18,
    marginTop: 25,
    marginLeft: 150,
  },
  welcomeText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 40,
    marginTop: 25,
  },
  userName: {
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 20,
    marginHorizontal: 40,
    marginTop: 37,
    borderColor: '#0781C4',
    color: '#ffff',
  },
  userPw: {
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 20,
    marginHorizontal: 40,
    marginTop: 10,
    borderColor: '#0781C4',
    color: '#fff',
  },
  userMasuk: {
    backgroundColor: '#35d0f3',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginHorizontal: 40,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },

  // image: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   width: '100%',
  //   height: '100%',
  // },
});

export default login;
