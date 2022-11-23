import React, {Component} from 'react';
import {
  View,
  ScrollView,
  ImageBackground,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

class wirelessCom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searching: '',
    };
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.view1}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Transtel')}>
            <Text style={styles.kembaliText}>Kembali</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.headText}>
          <Text style={styles.caborText1}>Cabang Laboratorium</Text>
          <Text style={styles.caborText2}>WIRELESS COMMUNICATION</Text>
          <Text style={styles.caborText2}>LABORATORY:</Text>
        </View>

        <View style={styles.listBSO}>
          <TouchableOpacity
            style={styles.cabBSO}
            onPress={() => this.props.navigation.navigate('Siskom')}>
            <ImageBackground
              style={styles.imageBSO1}
              imageStyle={{borderRadius: 20}}
              source={require('../images/Transtel/Wicom/Siskom/siskom_cover.jpg')}>
              <View style={styles.textView}>
                <Text style={styles.imageText}>SISTEM</Text>
                <Text style={styles.imageText}>KOMUNIKASI</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cabBSO}
            onPress={() => this.props.navigation.navigate('Elkom')}>
            <ImageBackground
              style={styles.imageBSO1}
              imageStyle={{borderRadius: 20}}
              source={require('../images/Transtel/Wicom/Elkom/elkom1.png')}>
              <View style={styles.textView}>
                <Text style={styles.imageText}>ELEKTRONIKA</Text>
                <Text style={styles.imageText}>TELEKOMUNIKASI</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cabBSO}
            onPress={() => this.props.navigation.navigate('Mobcom')}>
            <ImageBackground
              style={styles.imageBSO1}
              imageStyle={{borderRadius: 20}}
              source={require('../images/Transtel/Wicom/Mobcom/mobcom_cover.png')}>
              <View style={styles.textView}>
                <Text style={styles.imageText}>MOBCOM</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272626',
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
  headText: {
    marginTop: 20,
    marginHorizontal: 30,
  },
  caborText1: {
    fontSize: 30,
    color: '#ffff',
  },
  caborText2: {
    fontSize: 25,
    color: '#ffff',
    fontWeight: 'bold',
  },
  caborText3: {
    fontSize: 14,
    color: '#ffff',
    fontStyle: 'italic',
  },
  cabBSO: {
    marginLeft: 20,
    marginVertical: 10,
  },
  imageBSO1: {
    height: 125,
    width: 350,
  },
  textView: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    marginLeft: 15,
    marginBottom: 5,
  },
  imageText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  listBSO: {
    marginTop: 10,
  },
});

export default wirelessCom;
