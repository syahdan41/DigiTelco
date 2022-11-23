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

class regist2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.view1}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Regist')}>
            <Text style={styles.kembaliText}>Kembali</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Landing')}>
            <Text style={styles.btlText}>Batal</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.regText1}>Langkah 2 dari 3</Text>
        <Text style={styles.registerText}>Verifikasi</Text>
        <Text style={styles.regText2}>
          Masukkan 4-digit kode yang telah kami kirim ke E-mail
        </Text>
        <Text style={styles.regText3}>you****@hotmail.com</Text>
        <Text style={styles.regText3}>Bukan kamu? Ganti email</Text>
        <View style={styles.boxInput}>
          <TextInput
            value={this.state.email}
            style={styles.boxVeriv1}
            onChangeText={value => this.setState({email: value})}
          />
          <TextInput
            value={this.state.telepon}
            style={styles.boxVeriv2}
            onChangeText={value => this.setState({telepon: value})}
          />
          <TextInput
            value={this.state.password}
            style={styles.boxVeriv3}
            onChangeText={value => this.setState({password: value})}
          />
          <TextInput
            value={this.state.konfirm}
            style={styles.boxVeriv4}
            onChangeText={value => this.setState({konfirm: value})}
          />
        </View>

        <TouchableOpacity
          style={styles.userLanjut}
          onPress={() => this.props.navigation.navigate('Regist3')}>
          <Text style={{color: '#ffff'}}>Lanjut</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.userKirul}>
          <Text style={{color: '#ffff'}}>Kirim Ulang</Text>
        </TouchableOpacity>
        <Text style={styles.regText1}>
          Dengan melanjutkan anda menyetujui syarat dan kebijakan pribadi kami.
        </Text>
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
  boxInput: {
    flexDirection: 'row',
    marginRight: 40,
    marginLeft: 40,
  },
  kembaliText: {
    color: '#0781C4',
    fontSize: 18,
    marginLeft: 40,
    marginTop: 25,
    textAlign: 'left',
  },
  btlText: {
    color: '#0781C4',
    fontSize: 18,
    textAlign: 'right',
    marginTop: 25,
    marginLeft: 200,
  },
  registerText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 40,
    marginTop: 14,
  },
  regText1: {
    color: '#737474',
    textAlign: 'left',
    marginLeft: 40,
    marginTop: 15,
  },
  regText2: {
    color: '#fff',
    textAlign: 'left',
    marginLeft: 40,
    marginTop: 15,
    marginRight: 40,
  },
  regText3: {
    color: '#fff',
    textAlign: 'left',
    marginLeft: 40,
    marginTop: 15,
  },
  boxVeriv1: {
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 25,
    paddingVertical: 20,
    marginTop: 37,
    borderColor: '#0781C4',
    color: '#ffff',
    justifyContent: 'center',
  },
  boxVeriv2: {
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 25,
    paddingVertical: 20,
    marginTop: 37,
    marginLeft: 10,
    borderColor: '#0781C4',
    color: '#ffff',
    justifyContent: 'center',
  },
  boxVeriv3: {
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 25,
    paddingVertical: 20,
    marginTop: 37,
    marginLeft: 10,
    borderColor: '#0781C4',
    color: '#ffff',
    justifyContent: 'center',
  },
  boxVeriv4: {
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 25,
    paddingVertical: 20,
    marginTop: 37,
    marginLeft: 10,
    borderColor: '#0781C4',
    color: '#ffff',
    justifyContent: 'center',
  },

  userLanjut: {
    backgroundColor: '#35d0f3',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginHorizontal: 40,
    borderRadius: 5,
    marginTop: 35,
    alignItems: 'center',
  },
  userKirul: {
    borderColor: '#0781C4',
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginHorizontal: 40,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
});

export default regist2;
