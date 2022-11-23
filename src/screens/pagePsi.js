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

class pagePsi extends Component {
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
            onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={styles.kembaliText}>Kembali</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.headText}>
          <Text style={styles.caborText1}>Cabang Laboratorium:</Text>
          <Text style={styles.caborText2}>PSI</Text>
          <Text style={styles.caborText3}>Pengolahan Sinyal Informasi</Text>
        </View>
        <View style={styles.listBSO}>
          <TouchableOpacity
            style={styles.cabBSO}
            onPress={() => this.props.navigation.navigate('IMV')}>
            <ImageBackground
              style={styles.imageBSO1}
              imageStyle={{borderRadius: 20}}
              source={require('../images/PSI/IMV/imv_cover.png')}>
              <View style={styles.textView}>
                <Text style={styles.imageText}>IMAGE PROCESSING AND</Text>
                <Text style={styles.imageText}>VISION LABORATORY</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cabBSO}
            onPress={() => this.props.navigation.navigate('DSP')}>
            <ImageBackground
              style={styles.imageBSO2}
              imageStyle={{borderRadius: 20}}
              source={require('../images/PSI/DSP/dsp_cover.jpg')}>
              <View style={styles.textView}>
                <Text style={styles.imageText}>DIGITAL SIGNAL PROCESSING</Text>
                <Text style={styles.imageText}>LABORATORY</Text>
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
    fontSize: 30,
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
  imageBSO2: {
    height: 130,
    width: 350,
  },
  textView: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    marginLeft: 15,
    marginBottom: 10,
  },
  imageText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  listBSO: {
    marginTop: 10,
  },
});

export default pagePsi;
