import 'react-native-gesture-handler';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import SettingsScreenHolder from '../screens/SettingsScreen';

const SettingsStack = createStackNavigator(
{
  'Settings': {screen: SettingsScreenHolder}
},{
     defaultNavigationOptions: ({navigation}) => ({
      headerTitleAlign: "left",

}),
},

);

export default SettingsStack;