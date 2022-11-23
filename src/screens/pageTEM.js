import React, {Component} from 'react';
import Slidertem from '../../components/sliderTEM';
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

class pageTEM extends Component {
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
            onPress={() => this.props.navigation.navigate('BSO')}>
            <Text style={styles.kembaliText}>Kembali</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.headText}>
          <Image
            source={require('../images/TEM/Logo_TEM1.jpg')}
            style={styles.bsoLogo}
          />
          <View>
            <Text style={styles.bsoText}>TELCO ENTERTAIMENT</Text>
            <Text style={styles.bsoText}>MANAGEMENT</Text>
          </View>
        </View>
        <Slidertem />
        <View style={styles.descView}>
          <Text style={styles.bsoDesc}>
            Telco Entertain Management (TEM) merupakan bagian dari Departemen
            Pengembangan Minat dan Bakat yang mewadahi mahasiswa S1 teknik
            telekomunikasi dibidang kesenian. Terdapat 3 divisi utama didalamnya
            yaitu Telcoustic, Telco in Frame, dan Telco black dance. Mulai dari
            telcoustic yang berhubungan dengan musik seperti menyanyi,
            instrumental cover, band, dan lain lain. Lalu telco in frame yang
            berhubungan dengan seni peran, seperti teater, webseries, drama
            musikal, dan lain-lain. Yang terakhir telco black dance, yang
            berhubungan dengan seni tari mulai dari tradisional maupun modern.
          </Text>
        </View>
        <View style={styles.medsosView}>
          <TouchableOpacity style={styles.medsosButton}>
            <Text style={styles.medsosText}>Instagram</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.medsosButton}>
            <Text style={styles.medsosText}>Youtube</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
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
    marginHorizontal: 10,
    flexDirection: 'row',
  },
  bsoText: {
    fontSize: 22,
    color: '#ffff',
    fontWeight: 'bold',
  },
  bsoLogo: {
    width: '30%',
    height: '110%',
  },
  descView: {
    marginHorizontal: 25,
    marginTop: 15,
    borderWidth: 25,
    borderColor: '#272626',
    borderRadius: 20,
  },
  bsoDesc: {
    fontSize: 15,
    color: '#ffff',
    textAlign: 'justify',
    backgroundColor: '#272626',
  },
  medsosView: {
    flexDirection: 'row',
    marginLeft: 25,
    marginTop: 20,
    marginBottom: 150,
  },
  medsosText: {
    color: '#ffff',
    marginHorizontal: 20,
  },
  medsosButton: {
    borderWidth: 10,
    borderColor: '#0781C4',
    backgroundColor: '#0781C4',
    borderRadius: 20,
    marginHorizontal: 5,
  },
});

export default pageTEM;
