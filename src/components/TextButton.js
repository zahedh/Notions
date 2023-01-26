import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {TouchableOpacity, View, ScrollView} from 'react-native';

import GlobalStyles from '../styles/globalStyles';
import Globals from '../memory/globals';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default class TextButton extends Component {
    constructor(props) {
      super(props);

      this.state = {
      };

    }

    componentDidMount() {
      Globals.TextButton = this;
    }

    createNote() {
        if(Globals.TextNotes.length > 0) {
            Globals.TextNotes.push({key: Globals.TextNotes[Globals.TextNotes.length - 1].key + 1})
        } else {
            Globals.TextNotes.push({"key": 1})
        }
        Globals.TextNotesScreen.forceUpdate();
    }

    render() {
        return  (
            <View style={GlobalStyles.FloatingActionButtonHolder} >
              <TouchableOpacity style={GlobalStyles.ButtonHolder} onPress={() => this.createNote()}>
                <Icon style={GlobalStyles.FloatingActionButton} name="add-circle" size={35} />
              </TouchableOpacity>
            </View>
        )
    }
}