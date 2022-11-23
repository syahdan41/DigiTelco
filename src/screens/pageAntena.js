import React, {Component} from 'react';
import Sliderantena from '../../components/sliderAntena';
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

class pageAntena extends Component {
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
            onPress={() => this.props.navigation.navigate('Satcomradar')}>
            <Text style={styles.kembaliText}>Kembali</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.headText}>
          <View>
            <Text style={styles.bsoText}>LABORATORIUM ANTENA</Text>
          </View>
        </View>
        <Sliderantena />
        <View style={styles.descView}>
          <Text style={styles.bsoDesc}>
            Laboratorium Antenna adalah sebuah sarana laboratorium transmisi
            yang dinaungi oleh Kelompok Keahlian TransTel (Transmisi
            Telekomunikasi) yang membahas dibidang antenna. Laboratorium Antenna
            pada tahun sebelum 2019 memiliki 3 divisi (Riset, Praktikum, dan
            Workshop). Namun, setelah ada peleburan laboratorium, divisi
            workshop digabung dengan divisi riset. Laboratorium Antenna masuk ke
            dalam peleburan Laboratorium SatComRadar. Saat ini, kegiatan pada
            divisi praktikum adalah melalukan praktikum pada mata kuliah Antenna
            dan Propagasi. Sedangkan kegiatan riset, untuk saat ini sedang
            dilakukan beberapa project yang diberikan oleh dosen. Adapun Project
            tersebut mengenai riset antenna pada satelit yang dihubungkan dengan
            perangkat IoT.
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
    marginHorizontal: 30,
    flexDirection: 'row',
  },
  bsoText: {
    fontSize: 25,
    color: '#ffff',
    fontWeight: 'bold',
  },
  temImage: {
    width: 10,
    height: 10,
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

export default pageAntena;
