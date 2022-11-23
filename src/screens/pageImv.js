import React, {Component} from 'react';
import Sliderimv from '../../components/sliderIMV';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

class pageImv extends Component {
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
            onPress={() => this.props.navigation.navigate('PSI')}>
            <Text style={styles.kembaliText}>Kembali</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.headText}>
          <View>
            <Text style={styles.bsoText}>Image Processing And</Text>
            <Text style={styles.bsoText}>Vision Laboratory</Text>
          </View>
        </View>
        <Sliderimv />
        <View style={styles.descView}>
          <Text style={styles.bsoDesc}>
            Laboratorium Image, Processing, and Vision (IMV) adalah laboratorium
            Fakultas Teknik Elektro di penjurusan S1 Teknik Telekomunikasi yang
            berada di bawah naungan Kelompok Keahlian Pengolahan Sinyal
            Informasi (KKPSI). Laboratorium IMV ini bergerak dibidang computer
            vision, signal processing, pattern recocnition, virtual reality, dan
            artificial intelligence. Laboratorium IMV memiliki tujuan untuk
            mengembangkan pemahaman mahasiswa dan mahasiswi dalam bidang
            pengolahan citra dan juga menjalin hubungan dengan berbagai pihak
            untuk menunjang kemajuan riset. Laboratorium IMV ini adalah
            laboratorium riset yang dibina langsung oleh Bapak Suryo Adhi
            Wibowo, ST., MT.,Ph.D.
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

export default pageImv;
