import React, {Component} from 'react';
import Slider from '../screens/Slider';
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

class kepanitiaan extends Component {
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
          <Text style={styles.caborText1}>Cabang Kegiatan:</Text>
          <Text style={styles.caborText2}>Kepanitiaan</Text>
        </View>

        <View style={styles.listBSO}>
          <TouchableOpacity
            style={styles.cabBSO}
            onPress={() => this.props.navigation.navigate('Tesla')}>
            <ImageBackground
              style={styles.imageBSO1}
              imageStyle={{borderRadius: 20}}
              source={require('../images/Tesla/Tesla_Cover.jpg')}>
              <View style={styles.textView}>
                <Text style={styles.imageText}>TESLA</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cabBSO}
            onPress={() => this.props.navigation.navigate('Gathrak')}>
            <ImageBackground
              style={styles.imageBSO2}
              imageStyle={{borderRadius: 20}}
              source={require('../images/Gathrak/Gathrak1.png')}>
              <View style={styles.textView}>
                <Text style={styles.imageText}>GATHRAK</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cabBSO}
            onPress={() => this.props.navigation.navigate('Bindes')}>
            <ImageBackground
              style={styles.imageBSO2}
              imageStyle={{borderRadius: 20}}
              source={require('../images/Bindes/Bindes1.png')}>
              <View style={styles.textView}>
                <Text style={styles.imageText}>BINA</Text>
                <Text style={styles.imageText}>DESA</Text>
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
    marginBottom: 15,
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

export default kepanitiaan;
