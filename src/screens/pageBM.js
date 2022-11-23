import React, {Component} from 'react';
import Sliderbm from '../../components/sliderBM';
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

class pageBM extends Component {
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
            source={require('../images/BM/logo_bm.jpg')}
            style={styles.bsoLogo}
          />
          <View>
            <Text style={styles.bsoText}>BLACK MILITAN</Text>
          </View>
        </View>
        <Sliderbm />
        <View style={styles.descView}>
          <Text style={styles.bsoDesc}>
            Black Militan adalah suatu BSO (Badan Semi Otonom) yang ada di HMTT,
            berujuan untuk mewadahi minat dan bakat mahasiswa/i khususnya
            dibidang olahraga (Offline/Online). Biasanya atlit/mahasiswa yang
            ada di Black Militant disalurkan untuk mengikuti berbagai
            perlombaan, baik dalam Telkom University ataupun diluar Telkom
            University. Terdapat 6 cabor dalam Black Militant yaitu, Basket,
            Futsal, Tenis, Billiard, Badminton dan E-sport.
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
    marginTop: 12,
    fontSize: 25,
    color: '#ffff',
    fontWeight: 'bold',
  },
  bsoLogo: {
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

export default pageBM;
