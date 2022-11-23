import React, {Component} from 'react';
import Slider from './Slider';
import ModalsPopup from '../../components/ModalsPopup';
// import BottomNavigator from '../../components/bottomNav';
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ListItem,
} from 'react-native';
// let newsArray = require('../../testingNewsList.json');

class homePage extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   // allNews: newsArray,
    // };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.circlePicture}>
          <View>
            <Text style={styles.welcomeText}>
              Hello,
              <Text style={styles.welcomeUser}>Nama User!</Text>
            </Text>
            <Text style={styles.textPtst}>
              Pertama,Terbaik,Salam Telekomunikasi
            </Text>
          </View>
          <ModalsPopup />
        </View>
        <TextInput
          // value={this.state.searching}
          style={styles.tabSearch}
          // onChangeText={value => this.setState({searching: value})}
        />
        {/* <Slider /> */}
        <View style={styles.boxBSO}>
          <TouchableOpacity
            style={styles.labButton}
            onPress={() => this.props.navigation.navigate('cabLab')}>
            <Image
              source={require('../images/lab.png')}
              style={styles.labImage}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.panitiaButton}
            onPress={() => this.props.navigation.navigate('Kepanitiaan')}>
            <Image
              source={require('../images/Kepanitiaan.png')}
              style={styles.labImage}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bsoButton}
            onPress={() => this.props.navigation.navigate('BSO')}>
            <Image
              source={require('../images/bso.png')}
              style={styles.labImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.astrkButton}>
            <Image
              source={require('../images/asterisk.png')}
              style={styles.labImage}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.boxBSO}>
          <View>
            <Text style={styles.laborText}>Cabang</Text>
            <Text style={styles.laborText}>Laboratorium</Text>
          </View>
          <View>
            <Text style={styles.panitiaText}>Kegiatan</Text>
            <Text style={styles.panitiaText}>Kepanitiaan</Text>
          </View>
          <View>
            <Text style={styles.bsoText}> Badan Semi</Text>
            <Text style={styles.bsoText}>Otonom</Text>
          </View>
          <View>
            <Text style={styles.astrkText}>ASTERISK</Text>
          </View>
        </View>
        <View style={styles.garis}></View>
        <Text style={styles.todayNews}>Berita Terkini </Text>

        <View style={styles.newsContainer}>
          <TouchableOpacity style={styles.newsLayout}>
            <Image
              source={require('../images/3.jpg')}
              style={styles.newsImage}
            />
            <View>
              <Text style={styles.newsTitle}>What is Lorem Ipsum?</Text>
              <Text style={styles.newsTxt}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's...
              </Text>
            </View>
          </TouchableOpacity>

          <View>
            <TouchableOpacity style={styles.newsLayout}>
              <Image
                source={require('../images/3.jpg')}
                style={styles.newsImage}
              />
              <View>
                <Text style={styles.newsTitle}>Where does it come from?</Text>
                <Text style={styles.newsTxt}>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC...
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={styles.newsLayout}>
              <Image
                source={require('../images/3.jpg')}
                style={styles.newsImage}
              />
              <View>
                <Text style={styles.newsTitle}>Why do we use it?</Text>
                <Text style={styles.newsTxt}>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its
                  layout....
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={styles.newsLayout}>
              <Image
                source={require('../images/3.jpg')}
                style={styles.newsImage}
              />
              <View>
                <Text style={styles.newsTitle}>Where can I get some?</Text>
                <Text style={styles.newsTxt}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form...
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/* <View style={styles.bottomNavbar}>
          <BottomNavigator />
        </View> */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  bottomNavbar: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  circlePicture: {
    flexDirection: 'row',
  },
  profilePictures: {
    height: 45,
    width: 45,
  },
  profileButton: {
    marginTop: 27,
    marginLeft: 50,
    flexDirection: 'row',
  },
  newsContainer: {
    marginVertical: 12,
    marginHorizontal: 12,
  },
  newsLayout: {
    borderWidth: 3,
    flexDirection: 'row',
    backgroundColor: '#272626',
    borderColor: '#272626',
    borderRadius: 15,
    marginHorizontal: 10,
    marginVertical: 15,
  },

  newsTitle: {
    fontSize: 18,
    color: '#ffff',
    fontWeight: 'bold',
    marginTop: 12,
    marginLeft: 18,
    marginRight: 140,
  },
  newsTxt: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
    textAlign: 'left',
    marginLeft: 19,
    marginRight: 145,
    marginBottom: 15,
  },

  newsImage: {
    height: 115,
    width: 115,
    marginLeft: 20,
    marginTop: 18,
    marginBottom: 18,
    borderRadius: 15,
  },

  welcomeText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 32,
    marginTop: 25,
  },
  welcomeUser: {
    color: '#0781C4',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 32,
  },
  textPtst: {
    color: '#fff',
    fontSize: 12,
    marginLeft: 32,
  },
  tabSearch: {
    borderWidth: 1,
    borderColor: '#0781C4',
    marginTop: 25,
    marginHorizontal: 30,
    borderRadius: 8,
    color: '#ffff',
    paddingHorizontal: 15,
  },
  boxBSO: {
    flexDirection: 'row',
    marginRight: 28,
    marginLeft: 28,
  },
  labButton: {
    borderWidth: 8,
    marginLeft: 5,
    borderColor: '#2b2a2a',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 15,
    backgroundColor: '#2b2a2a',
  },
  panitiaButton: {
    borderWidth: 8,
    borderColor: '#2b2a2a',
    marginLeft: 24,
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 15,
    backgroundColor: '#2b2a2a',
  },
  bsoButton: {
    borderWidth: 8,
    borderColor: '#2b2a2a',
    marginLeft: 22,
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 15,
    backgroundColor: '#2b2a2a',
  },
  astrkButton: {
    borderWidth: 8,
    borderColor: '#2b2a2a',
    marginLeft: 20,
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 15,
    backgroundColor: '#2b2a2a',
  },
  labImage: {
    width: 50,
    height: 50,
    borderWidth: 5,
    borderRadius: 40,
  },
  laborText: {
    color: '#ffff',
    textAlign: 'center',
    marginLeft: 2,
    fontSize: 12,
  },
  panitiaText: {
    color: '#ffff',
    textAlign: 'center',
    marginLeft: 22,
    fontSize: 12,
  },
  bsoText: {
    color: '#ffff',
    textAlign: 'center',
    marginLeft: 21,
    fontSize: 12,
  },
  astrkText: {
    color: '#ffff',
    textAlign: 'center',
    marginLeft: 27,
    fontSize: 12,
    marginTop: 2,
  },
  garis: {
    borderWidth: 4,
    marginHorizontal: 0,
    marginTop: 20,
  },
  todayNews: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 35,
    marginTop: 25,
  },
});

export default homePage;
