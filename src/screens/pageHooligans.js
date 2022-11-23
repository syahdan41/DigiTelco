import React, {Component} from 'react';
import Sliderhooligans from '../../components/sliderHooligans';
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

class pageHooligans extends Component {
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
            source={require('../images/Hooligans/LOGO_HOOLIGANS.jpg')}
            style={styles.bsoLogo}
          />
          <View>
            <Text style={styles.bsoText}>TELCO</Text>
            <Text style={styles.bsoText}>HOOLIGANS</Text>
          </View>
        </View>
        <Sliderhooligans />
        <View style={styles.descView}>
          <Text style={styles.bsoDesc}>
            Telco Hooligans merupakan Badan Semi Otonom yang dinaungi oleh
            Departement Sumber Daya Anggota dibawah kementrian kesejahteraan
            anggota HMTT. Telco Hooligans mempunyai tujuan untuk meramaikan
            pertandingan-pertandingan yang di ikuti oleh atlet Telco serta
            memberi dukungan penuh dengan menyanyikan chants bersama-sama.
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
    fontSize: 30,
    color: '#ffff',
    fontWeight: 'bold',
  },
  bsoLogo: {
    marginTop: 9,
    width: 68,
    height: 68,
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

export default pageHooligans;
