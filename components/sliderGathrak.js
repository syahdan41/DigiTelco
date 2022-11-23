import React, {Component} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

export default class Slidergathrak extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('../src/images/Gathrak/Gathrak2.png'),
        require('../src/images/Gathrak/Gathrak3.png'),
        require('../src/images/Gathrak/Gathrak4.png'),
        require('../src/images/Gathrak/Gathrak5.png'),
        require('../src/images/Gathrak/Gathrak6.png'),
      ],
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <SliderBox
          images={this.state.images}
          sliderBoxHeight={200}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
          dotColor="#0781C4"
          inactiveDotColor="#90A4AE"
          paginationBoxVerticalPadding={20}
          autoplay
          circleLoop
          resizeMethod={'resize'}
          resizeMode={'cover'}
          paginationBoxStyle={{
            position: 'absolute',
            bottom: 0,
            padding: 0,
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            paddingVertical: 10,
          }}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            padding: 0,
            backgroundColor: 'rgba(128, 128, 128, 0.92)',
          }}
          ImageComponentStyle={{
            borderRadius: 15,
            width: '90%',
            height: 350,
            marginTop: 20,
            marginHorizontal: 10,
          }}
          imageLoadingColor="#2196F3"
        />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
