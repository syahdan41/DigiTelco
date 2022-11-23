import React, {Component} from 'react';
import {
  View,
  ImageBackground,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

class landingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../images/IntiLandingFixBanget.jpg')}
          resizeMode="cover"
          style={styles.image}>
          <Image
            source={require('../images/LogoFix3.png')}
            style={styles.headerImage}
          />
          <Text style={styles.text1}>Segala informasi</Text>
          <Text style={styles.text2}>Telco dalam satu aplikasi</Text>
          <Text style={styles.text3}>
            Akses segala berita seputar Telco dengan
          </Text>
          <Text style={styles.text4}>cepat dan mudah dalam satu aplikasi</Text>
          <TouchableOpacity
            style={styles.buttonRegist}
            onPress={() => this.props.navigation.navigate('Regist')}>
            <Text style={{color: '#FFFF'}}>Registrasi</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonMasuk}
            onPress={() => this.props.navigation.navigate('Regist3')}>
            <Text style={{color: '#0781C4'}}>Masuk</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  text1: {
    color: 'white',
    fontSize: 28,
    lineHeight: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text2: {
    color: 'white',
    fontSize: 28,
    lineHeight: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text3: {
    color: 'white',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  text4: {
    color: 'white',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  buttonRegist: {
    backgroundColor: '#0781C4',
    paddingVertical: 15,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
    marginHorizontal: 38,
  },
  buttonMasuk: {
    borderColor: '#0781C4',
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 12,
    marginBottom: 60,
    marginHorizontal: 38,
  },
  headerImage: {
    flex: 1,
    justifyContent: 'center',
    width: '70%',
    height: '70%',
    marginBottom: 360,
    marginLeft: 60,
  },
});

export default landingPage;
