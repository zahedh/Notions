import React, {Component} from 'react';

import {
  Text,
  View,
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';

import * as Animatable from 'react-native-animatable';

import Globals from '../memory/globals';


export const Modal = (props) => {
    return(
        <>
            {props.visible ?
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View
                    style={{
                    zIndex: props.zIndex,
                    height: "100%",
                    width: "100%",
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    paddingLeft: 10,
                    paddingRight: 10,
                    backgroundColor: "rgba(0,0,0,0.5)"}}
                >
                    <Animatable.View animation={"fadeIn"}>
                         {props.children}
                    </Animatable.View>
                </View>

            </TouchableWithoutFeedback>
             : null }
        </>
        );

}