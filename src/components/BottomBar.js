import 'react-native-gesture-handler';
import React, {Component,} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

import Globals from '../memory/globals';

import IconFA from 'react-native-vector-icons/FontAwesome';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMI from 'react-native-vector-icons/MaterialIcons';

import BottomBarStyles from '../styles/bottomnavbar';


export default class BottomNavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMounted: false,
    };

  }

  componentDidMount() {
    Globals.barHolder.push(this);
    this.setState({isMounted: true}, () => {
    });
  }

  componentWillUnmount() {
    this.setState({isMounted: false});

    let idx = Globals.barHolder.indexOf(this) ;
    if (idx !== -1) {
       Globals.barHolder.splice(idx, 1) ;
    }
  }

  activate(tabName) {
    Globals.navigation.navigate(tabName);
    Globals.barHolder.map((barItem, index) => {
      barItem.forceUpdate();
  });
    Globals.buttonActive = tabName;
  }

    recordNavbarHeight(layout) {
      const {x, y, width, height} = layout;
      Globals.NavBarHeight = height + 10 ;
    }

  render() {
      return(
          <View visible={this.state.barActive} style={BottomBarStyles.container} >
            <TouchableOpacity onPress={() => {this.activate('TextNotes')}} style={Globals.buttonActive === 'TextNotes' ? BottomBarStyles.textActive : BottomBarStyles.text}>
              <IconMCI style={Globals.buttonActive === 'TextNotes' ? BottomBarStyles.iconActive : BottomBarStyles.icon} name="pencil" size={20}/>
              <Text style={Globals.buttonActive === 'TextNotes' ? BottomBarStyles.titleActive : BottomBarStyles.title}>Text</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {this.activate('Gallery')}} style={Globals.buttonActive === 'Gallery' ? BottomBarStyles.galleryActive : BottomBarStyles.gallery}>
              <IconMCI style={Globals.buttonActive === 'Gallery' ? BottomBarStyles.iconActive : BottomBarStyles.icon} name="camera" size={20}/>
              <Text style={Globals.buttonActive === 'Gallery' ? BottomBarStyles.titleActive : BottomBarStyles.title}>Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {this.activate('Location')}} style={Globals.buttonActive === 'Location' ? BottomBarStyles.locationActive : BottomBarStyles.location}>
              <IconMI style={Globals.buttonActive === 'Location' ? BottomBarStyles.iconActive : BottomBarStyles.icon} name="my-location" size={20}/>
              <Text style={Globals.buttonActive === 'Location' ? BottomBarStyles.titleActive : BottomBarStyles.title}>Location</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {this.activate('Settings')}} style={Globals.buttonActive === 'Settings' ? BottomBarStyles.settingsActive : BottomBarStyles.settings}>
              <IconMI style={Globals.buttonActive === 'Settings' ? BottomBarStyles.iconActive : BottomBarStyles.icon} name="settings" size={20}/>
              <Text style={Globals.buttonActive === 'Settings' ? BottomBarStyles.titleActive : BottomBarStyles.title}>Settings</Text>
            </TouchableOpacity>
          </View>
      );
  }
}
