import React, {Component, useEffect, useRef} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet
} from 'react-native';
import Globals from '../memory/globals';
import GlobalStyles from '../styles/globalStyles';

import SettingsScreen from '../components/SettingsScreen.js';
import { HeaderTitle } from '../components/headerTitle';
import BottomBar from '../components/BottomBar.js';

export default function SettingsScreenHolder({ navigation }) {
    Globals.navigation = navigation;
    useEffect(() => {
        navigation.setParams({
          headerTitle: ( <HeaderTitle title={"Settings"} tag={"Settings"} />),
            backColor: Globals.DarkMode == true ?  "#c25e00" : "#FB8C00",
            titleColor: "#FFFFFF",
        })
    }, [])
  return (
        <View style={GlobalStyles.container}>
          <SettingsScreen />
          <BottomBar/>
         </View>
  );
}

SettingsScreenHolder.navigationOptions = ({ navigation }) => {
    return {
        title: navigation.getParam('headerTitle'),
        headerStyle: {backgroundColor: navigation.getParam('backColor')},
        headerTitleStyle: {color: navigation.getParam('titleColor')},
    }
}