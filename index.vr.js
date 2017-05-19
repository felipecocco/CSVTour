import React from 'react';
import { AppRegistry, asset, Pano, Image, Text, View, Scene, CylindricalPanel, Sound } from 'react-vr';
import NavigationPanel from './components/NavigationPanel';

export default class CSVTour extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('forest.jpg')} />
        {/* <Sound
          // Background audio that plays throughout the tour.
          source={asset('forest.mp3')}
          autoPlay={true}
          loop={true}
          volume={1}
        /> */}

        <CylindricalPanel
          layer={{ width: 2340, height: 600 }}
          style={{ position: 'absolute', transform: [{ translate: [0, -0, 0] }] }}
        >
          <View
            style={{
              flex: 1,
              width: 2340,
              height: 600,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center'
              // backgroundColor: 'green'
            }}
          >
            <NavigationPanel />
            <NavigationPanel />
            <NavigationPanel />
            <NavigationPanel />
          </View>

        </CylindricalPanel>
        <Image
          source={asset('bee.png')}
          style={{ position: 'absolute', height: 2.5, width: 2, transform: [{ translate: [0, -2, 20] }] }}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('CSVTour', () => CSVTour);
