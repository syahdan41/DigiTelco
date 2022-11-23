import React, {Component} from 'react';
import Bottompopup from './ModalsBottomPopup';
import RBSheet from 'react-native-raw-bottom-sheet';
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

class ModalsPopup extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    modalVisible: false,
  };

  setModalVisible = visible => {
    this.setState({modalVisible: visible});
  };

  render() {
    const {modalVisible} = this.state;
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            this.setModalVisible(modalVisible);
          }}>
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              {/* Section Dalemnya Modals */}
              <TouchableOpacity
                style={styles.buttonClose}
                onPress={() => this.setModalVisible(!modalVisible)}>
                <ImageBackground
                  style={styles.buttonWidth}
                  imageStyle={{borderRadius: 200}}
                  source={require('../src/images/x.png')}></ImageBackground>
              </TouchableOpacity>

              <Image
                style={styles.profileModals}
                source={require('../src/images/PSI/logo_psi.jpg')}></Image>
              <Text style={styles.modalUsername}>Nama User Disini</Text>
              <Text style={styles.modalNIM}>110116969</Text>
              <View style={styles.medsosView}>
                <TouchableOpacity style={styles.medsosButton1}>
                  <Text style={styles.medsosText1}>Email</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.medsosButton2}>
                  <Text style={styles.medsosText2}>Handphone</Text>
                </TouchableOpacity>
              </View>
              {/* Section Dalemnya Modals */}
            </View>
            <View>
              <View style={styles.viewPengaturan}>
                <TouchableOpacity
                  style={styles.pengaturanButton}
                  onPress={() => {
                    this.setModalVisible(!modalVisible);
                    this.RBSheet.open();
                  }}>
                  <Text style={styles.medsosText1}>Pengaturan</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={180}
          openDuration={250}
          customStyles={{
            container: {
              // justifyContent: 'center',
              // alignItems: 'center',
              backgroundColor: '#1E1E1E',
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            },
          }}>
          <View style={styles.sheetContainer}>
            <TouchableOpacity style={styles.settingBtn}>
              <Image
                source={require('../src/images/x.png')}
                style={styles.settingIcon}
              />
              <Text style={styles.txtIcon}>Matikan Notifikasi</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.settingBtn}>
              <Image
                source={require('../src/images/tombol_edit_profile.png')}
                style={styles.settingIcon}
              />
              <Text style={styles.txtIcon}>Edit Profil</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.settingBtn}>
              <Image
                source={require('../src/images/tombol_about.png')}
                style={styles.settingIcon}
              />
              <Text style={styles.txtIcon}>Tentang Kami</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.settingBtn}
              onPress={() => this.props.navigation.navigate('Regist3')}>
              <Image
                source={require('../src/images/tombol_exit.png')}
                style={styles.settingIcon}
              />
              <Text style={styles.txtIcon}>Keluar</Text>
            </TouchableOpacity>
          </View>
        </RBSheet>

        <TouchableOpacity
          style={styles.profileButton}
          onPress={() => this.setModalVisible(!modalVisible)}>
          <ImageBackground
            style={styles.profilePictures}
            imageStyle={{borderRadius: 200}}
            source={require('../src/images/PSI/logo_psi.jpg')}></ImageBackground>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  profileButton: {
    marginTop: 10,
    marginLeft: 20,
    flexDirection: 'row',
  },
  profilePictures: {
    height: 45,
    width: 45,
  },
  buttonWidth: {
    height: 15,
    width: 15,
  },
  profileModals: {
    borderRadius: 200,
    height: 80,
    width: 80,
    marginTop: 25,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  medsosView: {
    flexDirection: 'row',
  },
  medsosText1: {
    color: '#ffff',
    marginHorizontal: 20,
  },
  medsosText2: {
    color: '#ffff',
  },
  medsosButton1: {
    borderWidth: 15,
    borderColor: '#0781C4',
    backgroundColor: '#0781C4',
    borderBottomLeftRadius: 20,
    paddingHorizontal: 30,
  },
  medsosButton2: {
    borderWidth: 15,
    borderColor: '#0781C4',
    backgroundColor: '#0781C4',
    borderBottomRightRadius: 20,
    paddingHorizontal: 30,
    marginHorizontal: 3,
  },
  viewPengaturan: {
    bottom: 2,
  },
  sheetContainer: {
    marginVertical: 15,
  },
  settingBtn: {
    flexDirection: 'row',
    marginVertical: 8,
    marginHorizontal: 15,
  },
  settingIcon: {
    width: 20,
    height: 20,
  },
  txtIcon: {
    color: '#ffff',
    marginHorizontal: 10,
  },
  pengaturanButton: {
    borderWidth: 15,
    borderColor: '#0781C4',
    backgroundColor: '#0781C4',
    borderRadius: 5,
    paddingHorizontal: 88,
  },
  modalView: {
    margin: 30,
    backgroundColor: '#1E1E1E',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    borderWidth: 5,
    borderColor: '#0781C4',
    backgroundColor: '#0781C4',
    borderRadius: 200,
    position: 'absolute',
    top: -5,
    right: -5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalUsername: {
    marginTop: 10,
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  modalNIM: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 28,
  },
});

export default ModalsPopup;
