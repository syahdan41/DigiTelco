import React, {Component} from 'react';
import Slidermobcom from '../../components/sliderMobcom';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

class pageMobcom extends Component {
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
            onPress={() => this.props.navigation.navigate('Wicom')}>
            <Text style={styles.kembaliText}>Kembali</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.headText}>
          <View>
            <Text style={styles.bsoText}>Laboratorium</Text>
            <Text style={styles.bsoText}>Mobile Communication</Text>
          </View>
        </View>
        <Slidermobcom />
        <View style={styles.descView}>
          <Text style={styles.bsoDesc}>
            Laboratorium Mobile Communication merupakan salah satu laboratorium
            riset di bawah Fakultas Teknik Elektro. Laboratorium ini berada di
            kelompok keahlian transmisi yang diresmikan pada tanggal 18 April
            1994 dan merupakan sumbangan dari PT. Motorola. Sumbangan ini
            merupakan aktualisasi dari program Link and Match antara STT Telkom
            dan Motorola. Dahulu, sebelum laboratorium-laboratorium di S1 Teknik
            Telekomunikasi terbagi menjadi 3 kelompok keahlian, laboratorium
            Mobile Communication ini merupakan laboratorium untuk praktikum,
            namun kini hanya berfokus untuk riset saja.
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

export default pageMobcom;
