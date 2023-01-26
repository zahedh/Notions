import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView
} from 'react-native';
import {Modal} from './customModal';

import GlobalStyles from '../styles/globalStyles';
import ApplicationGuideStyles from '../styles/applicationGuideStyles';
import Globals from '../memory/globals';

export class ApplicationGuide extends Component {

    constructor (props) {
        super(props);

        this.state = {
            modalVisible: false
        };
    }

    componentDidMount() {
        Globals.applicationGuide = this;
    }

    showModal() {
      this.setState({ modalVisible: true });
    }
    hideModal() {
      this.setState({ modalVisible: false });
    }

    render() {
      return (
        <Modal visible={this.state.modalVisible}>
          <View style={ApplicationGuideStyles.modalView}>
            <View style={GlobalStyles.TitleHolder}>
              <Text style={ApplicationGuideStyles.modalTitleText}>
                Application Guide
              </Text>
            </View>
            <ScrollView>
              <Text style={ApplicationGuideStyles.text}>
                Welcome to your note taking application!
              </Text>
              <Text style={ApplicationGuideStyles.text}>
                There is an action bar present in all areas that will hold the appropriate title for which screen is currently active. There is also a bottom navigation bar present in all areas, allowing you to switch between each segment of the application – also: the icon of the active screen will be highlighted and labelled for your convenience.There are four screens to Notions: The Text Notes Screen. This is where you’ll be able to create, edit and label text notes. The Floating Action Button will create a new note and each one can be edited by selecting either the title or body. Each not is infinitely expandable. The Gallery Screen. This is where you’ll be able to take and upload pictures. The Floating Action Button will reveal two additional buttons – presenting you with the option to take a new picture to store into your device’s local storage and present it in the Gallery, or upload a file from local storage to present in the Gallery. The Location Screen. This is where you will be presented with a functional version of Google Maps. The Floating Action Button will navigate the focus of the map to your current devices location. The Settings Screen. This is where you’ll be able to alter the behaviour of the application. You will find this guide here should you ever wish to review it. The option to toggle Dark Mode is here as well. Happy organising!
              </Text>
            </ScrollView>

            <View style={ApplicationGuideStyles.modalButtonView}>
              <TouchableOpacity activeOpacity={.5}  onPress={() => this.hideModal()}>
                <Text style={ApplicationGuideStyles.closeButton}>
                  Close
                </Text>
              </TouchableOpacity>
            </View>
          </View>
      </Modal>
)
}
}