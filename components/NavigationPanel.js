import React, { Component } from 'react';
import { Image, Text, View, StyleSheet, VrButton } from 'react-vr';
export default class NavigationPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
  }
  render() {
    let that = this;
    return (
      <VrButton onClick={() => console.log('clicked')}>
        <View
          style={[styles.container, { backgroundColor: that.state.hovered ? 'rgba(0,0,0,.3)' : '' }]}
          onEnter={() => this.setState({ hovered: true })}
          onExit={() => this.setState({ hovered: false })}
        >

          <Image
            source={{
              uri: 'http://upload.wikimedia.org/wikipedia/commons/3/34/Rub_al_Khali_002.JPG'
            }}
            style={styles.image}
            resizeMode={'contain'}
          />
          <Text style={{ fontSize: 50, textAlign: 'center' }}> Desert </Text>

        </View>
      </VrButton>
    );
  }
}

var styles = StyleSheet.create({
  image: {
    height: 200,
    width: 250
  },
  container: {
    padding: 20,
    marginRight: 20,
    marginLeft: 20
    // transform: [{ rotateX: -20 }]
  }
});
