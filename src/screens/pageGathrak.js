import React, {Component} from 'react';
import Slidergathrak from '../../components/sliderGathrak';
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

class pageGathrak extends Component {
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
            onPress={() => this.props.navigation.navigate('Kepanitiaan')}>
            <Text style={styles.kembaliText}>Kembali</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.headText}>
          <View>
            <Text style={styles.bsoText}>GATHERING &</Text>
            <Text style={styles.bsoText}>ARAK - ARAKAN</Text>
          </View>
        </View>
        <Slidergathrak />
        <View style={styles.descView}>
          <Text style={styles.bsoDesc}>
            Gathrak merupakan serangkaian acara tahunan yang dikelola oleh
            kepanitiaan angkatan. Gathrak dimulai oleh acara Gathering yang
            merupakan kemeriahan penyambutan mahasiswa baru S1 Telco dengan
            mengenalkan sekaligus menyatukan mahasiswa di masing-masing kelas.
            Setelah itu, dilanjut oleh Telcoduation yang merupakan parade wisuda
            dengan mengarak para alumni yang baru saja diwisuda. Terakhir,
            rangkaian acara ini ditutup oleh Farewell Party yang merupakan
            pelepasan alumni yang baru diwisuda. Rangkaian acara ini diharapkan
            dapat membuat angkatan mahasiswa baru bersemangat sebagai mahasiswa
            S1 Telco dan dapat memberikan kesan yang dapat dikenang baik oleh
            para alumni.
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

export default pageGathrak;
