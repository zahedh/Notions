import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {TouchableOpacity, View} from 'react-native';

import GlobalStyles from '../styles/globalStyles';
import Globals from '../memory/globals';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-crop-picker';


export default class ImageTakerButton extends Component {
    constructor(props) {
      super(props);

      this.state = {
      };

    }

    componentDidMount() {
      Globals.ImageTakerButton = this;
    }

    takePhoto() {
        ImagePicker.openCamera({
          width: 300,
          height: 400,
          cropping: false,
        }).then(image => {
          Globals.GalleryImages.push(image);
          console.log(image);
          Globals.GalleryScreen.forceUpdate();
        });
    }

    render() {
        return  (
            <View style={GlobalStyles.ImageTakerButtonHolder} >
              <TouchableOpacity style={GlobalStyles.ImageTakerButtonHolder2} onPress={() => this.takePhoto()}>
                <Icon style={GlobalStyles.FloatingActionButton} name="add-a-photo" size={35} />
              </TouchableOpacity>
            </View>
        )
    }
}