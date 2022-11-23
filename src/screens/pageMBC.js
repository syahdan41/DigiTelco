import React, {Component} from 'react';
import Slidermbc from '../../components/sliderMBC';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

class pageMbc extends Component {
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
            <Text style={styles.bsoText}>Laboratorium</Text>
            <Text style={styles.bsoText}>
              Multimedia Big Data & Cyber Security
            </Text>
          </View>
        </View>
        <Slidermbc />
        <View style={styles.descView}>
          <Text style={styles.bsoDesc}>
            Laboratorium MBC (Multimedia Application, Big Data & Cybersecurity)
            merupakan laboratorium riset dan praktikum peminatan Keahlian
            Jaringan yang dahulu bernama Application and Security (AnS). Pada
            2016 Terbentuk Lab AnS, dan AnS hanya bertahan selama 3 tahun dan
            berganti nama menjadi MBC di tahun 2019 dengan 3 divisi utama yaitu
            Big data, CyberSecurity dan Aplikasi Multimedia.
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

export default pageMbc;
