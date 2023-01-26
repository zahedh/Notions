import 'react-native-gesture-handler';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import LocationScreenHolder from '../screens/LocationScreen';

const LocationStack = createStackNavigator(
{
  'Location': {screen: LocationScreenHolder}
},{
     defaultNavigationOptions: ({navigation}) => ({
      headerTitleAlign: "left",

}),
},

);

export default LocationStack;