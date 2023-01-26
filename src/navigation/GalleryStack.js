import 'react-native-gesture-handler';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import GalleryScreenHolder from '../screens/GalleryScreen';

const GalleryStack = createStackNavigator(
{
  'Gallery': {screen: GalleryScreenHolder}
},{
     defaultNavigationOptions: ({navigation}) => ({
      headerTitleAlign: "left",

}),
},

);

export default GalleryStack;