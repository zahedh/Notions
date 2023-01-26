import React, { Component } from 'react';
import { View, Text, Switch, TouchableWithoutFeedback, Keyboard, ScrollView, TouchableOpacity, YellowBox} from 'react-native';
import Globals from '../memory/globals.js';
import GlobalStyles from '../styles/globalStyles.js';
import SettingsStyles from '../styles/settingsStyles';
YellowBox.ignoreWarnings(['VirtualizedLists should never be nested']);

export default class SettingsScreen extends Component {

    constructor (props) {
        super(props);

        this.state = {
        };

    }

  componentDidMount() {
     Globals.SettingsScreen = this;
  }

  deleteAll() {
    Globals.TextNotes = [];
    Globals.GalleryImages = [];

  }


  render() {
    return (
          <View>
              <ScrollView style={GlobalStyles.ScrollView}>
                <View>
                      <Text style={GlobalStyles.Title}>Alter the behaviour of the application from this screen. For additional information: please refer to the Application Guide link below.</Text>
                     <View style={SettingsStyles.detailsItem}>
                        <TouchableOpacity activeOpacity={.5} style={GlobalStyles.Button} onPress={() => Globals.applicationGuide.showModal()}>
                            <Text style={GlobalStyles.ButtonText}>APPLICATION GUIDE</Text>
                        </TouchableOpacity>
                     </View>
                      <View style={SettingsStyles.detailsItem}>
                         <TouchableOpacity activeOpacity={.5} style={GlobalStyles.Button} onPress={() => this.deleteAll()}>
                             <Text style={GlobalStyles.ButtonText}>DELETE ALL NOTES</Text>
                         </TouchableOpacity>
                      </View>
                 </View>
              </ScrollView>
          </View>
    )
  }
}