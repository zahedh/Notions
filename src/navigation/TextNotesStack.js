import 'react-native-gesture-handler';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import TextNotesHolder from '../screens/TextNotesScreen';

const TextNotesStack = createStackNavigator(
{
  'TextNotes': {screen: TextNotesHolder}
},{
     defaultNavigationOptions: ({navigation}) => ({
      headerTitleAlign: "left",

}),
},

);

export default TextNotesStack;