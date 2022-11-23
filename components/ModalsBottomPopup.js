import React, {Component} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

export default class Bottompopup extends Component {
  render() {
    return (
      <View>
        <View style={styles.viewPengaturan}>
          <TouchableOpacity
            style={styles.pengaturanButton}
            onPress={() => this.RBSheet.open()}>
            <Text style={styles.medsosText1}>Pengaturan</Text>
          </TouchableOpacity>
        </View>
        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={300}
          openDuration={250}
          customStyles={{
            container: {
              justifyContent: 'center',
              alignItems: 'center',
            },
          }}>
          {/* <YourOwnComponent /> */}
        </RBSheet>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  medsosText1: {
    color: '#ffff',
    marginHorizontal: 20,
  },
  viewPengaturan: {
    bottom: 2,
  },
  pengaturanButton: {
    borderWidth: 15,
    borderColor: '#0781C4',
    backgroundColor: '#0781C4',
    borderRadius: 5,
    paddingHorizontal: 88,
  },
});
