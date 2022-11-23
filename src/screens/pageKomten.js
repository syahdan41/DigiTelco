import React, {Component} from 'react';
import Sliderkomten from '../../components/sliderKomten';
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

class pageKomten extends Component {
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
            source={require('../images/Komten/komten1.jpg')}
            style={styles.bsoLogo}
          />
          <View>
            <Text style={styles.bsoText}>KOMUNITAS TENTOR</Text>
          </View>
        </View>
        <Sliderkomten />
        <View style={styles.descView}>
          <Text style={styles.bsoDesc}>
            Komunitas Tentor atau yang biasa disebut dengan Komten adalah salah
            satu Badan Semi Otonom (BSO) dinaungi oleh Departemen Akademik,
            Kementerian Keilmuan dan Pengembangan Mahasiswa BP-HMTT. Fungsi
            utama diadakannya kegiatan ini adalah dalam rangka mewadahi
            kebutuhan mahasiswa/i S-1 Teknik Telekomunikasi dari segi akademik,
            seperti adanya Responsi dalam rangka persiapan ujian dan Telcourse
            dalam bentuk kelas privat bersama para mentor-mentor Komten.
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
    marginHorizontal: 20,
    flexDirection: 'row',
  },
  bsoText: {
    marginTop: 20,
    fontSize: 25,
    color: '#ffff',
    fontWeight: 'bold',
  },
  bsoLogo: {
    width: 75,
    height: 75,
    marginLeft: 1,
    marginRight: 16,
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

export default pageKomten;
