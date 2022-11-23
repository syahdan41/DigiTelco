import React, {Component} from 'react';
import Slideradaptive from '../../components/sliderAdaptive';
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

class pageAdaptive extends Component {
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
            <Text style={styles.bsoText}>ADAPTIVE NETWORK</Text>
            <Text style={styles.bsoText}>LABORATORY</Text>
          </View>
        </View>
        <Slideradaptive />
        <View style={styles.descView}>
          <Text style={styles.bsoDesc}>
            Adaptive Network Laboratory merupakan laboratorium riset dan juga
            praktikum yang bergerak dibidang core network yang merupakan
            peleburan dari Datacomm Laboratory & Computer and Communication
            Laboratory yang dahulunya bernama Core Network Laboratory. dan
            termasuk kedalam peminatan jaringan. Adaptive Network Laboratory
            mempunyai 3 divisi utama, yaitu SDN (Software Defined Network), NFV
            (Network Function Virtualization) dan Cloud Native. Laboratorium ini
            diresmikan pada tanggal 19 Januari 2017 (Core Network Laboratory)
            dan pada tanggal 1 September 2019 berubah nama menjadi Adaptive
            Network Laboratory.
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

export default pageAdaptive;
