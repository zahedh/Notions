import React, { Component } from 'react';
import { Button, View, Text, ScrollView, Image, Dimensions} from 'react-native';
import Globals from '../memory/globals.js';
import GlobalStyles from '../styles/globalStyles.js';
import GalleryStyles from '../styles/galleryStyles.js';
import ImagePickerButton from '../components/ImagePickerButton.js';
import ImageTakerButton from '../components/ImageTakerButton.js';

export default class GalleryScreen extends Component {

    constructor (props) {
        super(props);
        this.state = {
            screen: Dimensions.get('window'),
            images: Globals.GalleryImages,
            orientation: "Portrait",
        };
        this.myRef = React.createRef();
    }

  componentDidMount() {
     Globals.GalleryScreen = this;
  }

  checkOrientation() {
    this.setState({screen: Dimensions.get('window')});
    this.getOrientation();
  }

  getOrientation(){
    if (this.state.screen.width > this.state.screen.height) {
      this.setState({orientation: "Landscape"});
    } else {
      this.setState({orientation: "Portrait"});
    }
  }

  renderImages(array) {
    if(array.length > 0) {
    return(
    <>
        {array.map((image, index) => {
            return (
            <View key={index} style={this.state.orientation == "Portrait" ? GalleryStyles.imageContainerPortrait : GalleryStyles.imageContainerLandscape} onLayout={this.checkOrientation.bind(this)}>
                <Image style={{flex: 1, marginBottom: 5, marginTop: 20}} source={{uri: array[index].path}}>
                </Image>
            </View>
            );
        })}
    </>
    )
    } else {
        return(null);
    }
  }

  render() {
    return (
      <View style={GlobalStyles.screenContainer}>
        <ScrollView style={{paddingLeft: 30, paddingRight: 30}} contentContainerStyle={{alignItems: "center"}}>
            {this.renderImages(this.state.images)}
        </ScrollView>
        <ImagePickerButton />
        <ImageTakerButton />
      </View>
    )
  }
}

//{this.renderImages(this.state.images)}