import React from 'react';
import { AppRegistry, asset, Pano, Image, Text, View, Scene, CylindricalPanel } from 'react-vr';
import NavigationPanel from './components/NavigationPanel';

export default class CSVTour extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')} />

        {/* <View
          style={{
            flex: 1,
            flexDirection: 'row',
            layoutOrigin: [0.5, 0.5],
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'absolute',
            backgroundColor: 'blue',
            transform: [{ translate: [0, -2, -6] }]
          }}
        > */}
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
      </View>
    );

    // </View>
  }
}

AppRegistry.registerComponent('CSVTour', () => CSVTour);
