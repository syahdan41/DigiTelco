import React, {Component} from 'react';
import Slidercps from '../../components/sliderCPS';
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

class pageCPS extends Component {
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
            onPress={() => this.props.navigation.navigate('NCM')}>
            <Text style={styles.kembaliText}>Kembali</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.headText}>
          <View>
            <Text style={styles.bsoText}>CYBER PHYSICAL SYSTEM</Text>
            <Text style={styles.bsoText}>LABORATORY</Text>
          </View>
        </View>
        <Slidercps />
        <View style={styles.descView}>
          <Text style={styles.bsoDesc}>
            CPS atau Cyber Physical System Laboratory adalah Kelompok Keahlian
            Jaringan dan Multimedia Program Studi S1 Teknik Telekomunikasi
            Fakultasi Teknik Elektro Telkom University menaungi tiga
            laboratorium riset diantaranya adalah Laboratorium Adaptive Network,
            Laboratorium Multimedia Big Data and Cyber Security, dan Cyber
            Physical System.Cyber Physical System Laboratory merupakan lab riset
            yang sebelumnya bernama Access Network RG yang memfokuskan risetnya
            pada bidang Jaringan Seluler, Jaringan Ad-Hoc pada kendaraan (VANET)
            dan Internet of Things. Untuk saat ini, Cyber Physical System Lab.
            memfokuskan melakukan riset di bidang Internet Of Things For
            Industry. Lab CPS bertempat di ruang O102 gedung Ararkula (Gedung O)
            Fakultas Teknik Elektro Telkom University.
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

export default pageCPS;
