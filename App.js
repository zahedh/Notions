/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Alert} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import TextNotesStack from './src/navigation/TextNotesStack.js';
import GalleryStack from './src/navigation/GalleryStack.js';
import LocationStack from './src/navigation/LocationStack.js';
import SettingsStack from './src/navigation/SettingsStack.js';
import {ApplicationGuide} from './src/components/ApplicationGuide.js';

import {
  Image,
  StyleSheet, Dimensions
} from 'react-native';

import Globals from './src/memory/globals';

const AppSwitchNavigator = createSwitchNavigator({
  'TextNotes'   : {screen : TextNotesStack},
  'Gallery' : {screen: GalleryStack},
  'Location' : {screen: LocationStack},
  'Settings' : {screen: SettingsStack}
},
{
  initialRouteName : 'TextNotes' // Telling the navigator that the first route is Splash screen
}
)

const App = createAppContainer(AppSwitchNavigator);


export default class Navigator extends Component {
     constructor (props) {
        super(props);

     }

      getDefaultTexts(uri) {
          var myHeaders = new Headers();
          myHeaders.append("Accept", "application/json");
          myHeaders.append("Content-Type", "application/json");
          myHeaders.append("Connection", "keep-alive");
          myHeaders.append("Cache-Control", "no-cache");

          var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          };

          const source = uri;
            fetch(source, requestOptions)
            .then((response) => {
              var status = response.status;
              if (status == 200) {
                response.json()
                .then ((data) => {
                    Globals.TextNotes.push({"Title" : data[0].Title, "Body": data[0].Body, "key" : 1})
                    Globals.TextNotes.push({"Title" : data[1].Title, "Body": data[1].Body, "key" : 2})
                 })
                 .catch((error) => {
                        Alert.alert(
                          "Default Text Notes Fetch Failure",
                          "The default text notes could not be retrieved. This is due to a server error or your device is offline.",
                          [

                            { text: "OK", onPress: () => console.log("OK Pressed") }
                          ]
                        );
                 });
              }
              else {
                    Alert.alert(
                      "Default Text Notes Fetch Failure",
                      "The default text notes could not be retrieved. This is due to a server error or your device is offline.",
                      [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                      ]
                    );
              }
            })
            .catch((error) => {
                Alert.alert(
                  "Default Text Notes Fetch Failure",
                  "The default text notes could not be retrieved. This is due to a server error or your device is offline.",
                  [

                    { text: "OK", onPress: () => console.log("OK Pressed") }
                  ]
                );
            });
      }

    async componentDidMount() {
        Globals.application = this;
        this.getDefaultTexts("https://mocki.io/v1/aff8ff69-b921-4df3-ab67-88c18bd534a4");
    }


    render() {
        return (
          <>
            <App />
            <ApplicationGuide />
          </>
          );
    }
}


