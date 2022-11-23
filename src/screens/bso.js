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

class BSO extends Component {
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
          <Text style={styles.caborText1}>Cabang Organisasi:</Text>
          <Text style={styles.caborText2}>BSO</Text>
          <Text style={styles.caborText3}>Badan Semi Otonom</Text>
        </View>
        <View style={styles.listBSO}>
          <TouchableOpacity
            style={styles.cabBSO}
            onPress={() => this.props.navigation.navigate('BM')}>
            <ImageBackground
              style={styles.imageBSO1}
              imageStyle={{borderRadius: 20}}
              source={require('../images/BM.jpg')}>
              <View style={styles.textView}>
                <Text style={styles.imageText}>BLACK</Text>
                <Text style={styles.imageText}>MILITAN</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cabBSO}
            onPress={() => this.props.navigation.navigate('Hooligans')}>
            <ImageBackground
              style={styles.imageBSO2}
              imageStyle={{borderRadius: 20}}
              source={require('../images/Hooligans.jpg')}>
              <View style={styles.textView}>
                <Text style={styles.imageText}>TELCO</Text>
                <Text style={styles.imageText}>HOOLINGANS</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cabBSO}
            onPress={() => this.props.navigation.navigate('TEM')}>
            <ImageBackground
              style={styles.imageBSO2}
              imageStyle={{borderRadius: 20}}
              source={require('../images/TEM/TEM1_4.jpg')}>
              <View style={styles.textView}>
                <Text style={styles.imageText}>TELCO ENTERTAINMENT</Text>
                <Text style={styles.imageText}>MANAGEMENT</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cabBSO}
            onPress={() => this.props.navigation.navigate('Tosca')}>
            <ImageBackground
              style={styles.imageBSO2}
              imageStyle={{borderRadius: 20}}
              source={require('../images/TOSCA.jpg')}>
              <View style={styles.textView}>
                <Text style={styles.imageText}>TOSCA</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cabBSO}
            onPress={() => this.props.navigation.navigate('Komten')}>
            <ImageBackground
              style={styles.imageBSO2}
              imageStyle={{borderRadius: 20}}
              source={require('../images/Komten/komten1.jpg')}>
              <View style={styles.textView}>
                <Text style={styles.imageText}>KOMTEN</Text>
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

export default BSO;
