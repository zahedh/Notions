import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import Globals from '../memory/globals.js';
import GlobalStyles from '../styles/globalStyles.js';
import MapView, { PROVIDER_GOOGLE, Callout } from  'react-native-maps';
import { Marker } from 'react-native-maps';
import LocationButton from '../components/LocationButton.js';
import GetLocation from 'react-native-get-location';

export default class LocationScreen extends Component {

    constructor (props) {
        super(props);
        this.state = {
            marker: {
                latitude: 53.0558,
                longitude: -2.1052,
                latitudeDelta: 0.15,
                longitudeDelta: 0.15
            },
            markerSet: false,
        };
        this.myRef = React.createRef();
    }

  componentDidMount() {
     Globals.LocationScreen = this;
  }

  createMapReference(ref) {
      Globals.mapReference = ref.current;
  }



  render() {
    return (
      <View style={GlobalStyles.map}>
            <MapView
            ref={this.myRef}
            provider={PROVIDER_GOOGLE}
            style={GlobalStyles.map}
            onMapReady={() => { Globals.mapComponent = this;  this.createMapReference(this.myRef)}}
            initialRegion = {{
                latitude: 52.5,
                longitude: 19.2,
                latitudeDelta: 8.5,
                longitudeDelta: 8.5,
              }}
            >
            <Marker
                key={'highlightedMarker'}
                title={"Coordinates"}
                description={this.state.marker.latitude.toString() + ", " + this.state.marker.longitude.toString()}
                pinColor={"#FB8C00"}
                coordinate={this.state.marker}
            />
            </MapView>

            <LocationButton />
      </View>
    )
  }
}