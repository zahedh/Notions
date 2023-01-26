import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {TouchableOpacity, View} from 'react-native';

import GlobalStyles from '../styles/globalStyles';
import Globals from '../memory/globals';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-crop-picker';


export default class ImagePickerButton extends Component {
    constructor(props) {
      super(props);

      this.state = {
      };

    }

    componentDidMount() {
      Globals.ImagePickerButton = this;
    }

    pickPhoto() {
        ImagePicker.openPicker({
          width: 1200,
          height: 1500,
          cropping: false
        }).then(image => {
          Globals.GalleryImages.push(image);
          console.log(image);
          Globals.GalleryScreen.forceUpdate();
        });
    }

    render() {
        return  (
            <View style={GlobalStyles.ImagePickerButtonHolder} >
              <TouchableOpacity style={GlobalStyles.ImagePickerButtonHolder2}  onPress={() => this.pickPhoto()}>
                <Icon style={GlobalStyles.FloatingActionButton} name="add-photo-alternate" size={40} />
              </TouchableOpacity>
            </View>
        )
    }
}