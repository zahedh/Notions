import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {TouchableOpacity, View, Alert} from 'react-native';
import GetLocation from 'react-native-get-location';

import GlobalStyles from '../styles/globalStyles';
import Globals from '../memory/globals';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default class LocationButton extends Component {
    constructor(props) {
      super(props);

      this.state = {
      };

    }

    componentDidMount() {
      Globals.LocationButton = this;
    }


    updateCurrentLocation () {
      GetLocation.getCurrentPosition({
          enableHighAccuracy: true,
          timeout: 15000,
      })
      .then(location => {
          const r = {
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.25,
              longitudeDelta: 0.25
          }

          Globals.mapReference.animateToRegion(r, 0);
       })
      .catch(error => {
        Alert.alert(
          "Failed to Get Current Location",
          "Your current location could not be retreived. This is due to a server error or your device is offline.",
          [

            { text: "OK", onPress: () => console.log("OK Pressed") }
          ]
        );
      })
     }

    render() {
        return  (
            <View style={GlobalStyles.LocationButtonHolder} >
              <TouchableOpacity style={GlobalStyles.ButtonHolder}  onPress={() => this.updateCurrentLocation()}>
                <Icon style={GlobalStyles.FloatingActionButton} name="add-circle" size={35} />
              </TouchableOpacity>
            </View>
        )
    }
}