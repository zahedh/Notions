import React, { Component } from 'react';
import { Button, View, Text, Dimensions, FlatList, TextInput, ScrollView} from 'react-native';
import Globals from '../memory/globals.js';
import GlobalStyles from '../styles/globalStyles.js';
import TextNoteStyles from '../styles/textNoteStyles.js';
import TextButton from '../components/TextButton.js';

const width = Dimensions.get('window').width;

export default class TextNotesScreen extends Component {

    constructor (props) {
        super(props);
        this.state = {
            screen: Dimensions.get('window'),
            orientation: "Portrait",
        };
        this.myRef = React.createRef();
    }


  componentDidMount() {
     Globals.TextNotesScreen = this;
  }

  checkOrientation() {
    this.setState({screen: Dimensions.get('window')});
    this.getOrientation();
  }

  getOrientation(){
    if (this.state.screen.width > this.state.screen.height) {
      this.setState({orientation: "Landscape"});
      Globals.orientation = "Landscape";
      Globals.TextNoteColumns = 3;
    } else {
      this.setState({orientation: "Portrait"});
      Globals.orientation = "Portrait";
      Globals.TextNoteColumns = 2;
    }
  }

  updateText = (index, newText, location) => {
     Globals.TextNotes[index].location = newText;
  }




  render() {
    return (
      <View style={GlobalStyles.screenContainer} onLayout={this.checkOrientation.bind(this)}>
      <ScrollView keyboardDismissMode='on-drag' style={{flex: 1}}>
        <FlatList contentContainerStyle={TextNoteStyles.flatListContent} data={Globals.TextNotes} numColumns={2} renderItem={({item}) =>
            <View style={TextNoteStyles.mainView}>
                <TextInput style={TextNoteStyles.editTitle} multiline={true} onchangeText={text => this.updateText(item.key, text, Title)} value={item.Title}  placeholder="Title">
                </TextInput>
                <TextInput style={TextNoteStyles.editBody} multiline={true} onchangeText={text => this.updateText(item.key, text, Body)} value={item.Body}  placeholder="Body">
                </TextInput>
            </View>
        }>
        </FlatList>
        </ScrollView>
        <TextButton />
      </View>
    )
  }
}