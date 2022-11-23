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

class regist3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'E-mail',
      telepon: 'No.Telepon',
      password: 'password',
      konfirm: 'Konfirmasi Password',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.view1}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Regist2')}>
            <Text style={styles.kembaliText}>Kembali</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('lupaPW')}>
            <Text style={styles.lupapwText}>Lupa Password</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.registerText}>Selamat Datang</Text>

        <TextInput
          value={this.state.email}
          style={styles.userName}
          onChangeText={value => this.setState({email: value})}
        />

        <TextInput
          value={this.state.password}
          style={styles.userPw}
          onChangeText={value => this.setState({password: value})}
        />

        <TouchableOpacity
          style={styles.userMasuk}
          onPress={() => this.props.navigation.navigate('Home')}>
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
  view1: {
    flexDirection: 'row',
  },
  kembaliText: {
    color: '#0781C4',
    fontSize: 18,
    marginLeft: 40,
    marginTop: 25,
    textAlign: 'left',
  },
  lupapwText: {
    color: '#0781C4',
    fontSize: 18,
    marginTop: 25,
    marginLeft: 134,
  },
  registerText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 40,
    marginTop: 30,
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
    paddingHorizontal: 23,
    marginHorizontal: 40,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
});

export default regist3;
