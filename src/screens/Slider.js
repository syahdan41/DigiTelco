import React, {Component} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('../images/2.jpg'),
        require('../images/3.jpg'),
        require('../images/4.jpg'),
        require('../images/5.jpg'),
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
            width: '85%',
            marginTop: 20,
            marginHorizontal: 30,
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
