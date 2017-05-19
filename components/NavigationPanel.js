import React, { Component } from 'react';
import { Image, Text, View, StyleSheet } from 'react-vr';
export default class NavigationPanel extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Image
          source={{
            uri: 'http://upload.wikimedia.org/wikipedia/commons/3/34/Rub_al_Khali_002.JPG'
          }}
          style={styles.image}
          resizeMode={'contain'}
        />
        <Text style={{ fontSize: 50, textAlign: 'center' }}> Desert </Text>

      </View>
    );
  }
}

var styles = StyleSheet.create({
  image: {
    height: 200,
    width: 250
  },
  container: {
    marginRight: 20,
    marginLeft: 20
    // transform: [{ rotateX: -20 }]
  }
});
