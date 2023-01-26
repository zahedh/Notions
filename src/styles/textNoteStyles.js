import { StyleSheet } from 'react-native';
import Globals from '../memory/globals.js';

const TextNoteStyles = StyleSheet.create({
    mainView: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#808080",
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
        padding: 5,
        borderRadius: 10,
    },

    flatListContent: {
     justifyContent: "center",
    },


    noteView: {
        borderColor: "#000000",
        width: "50%",
        maxWidth: "50%",
        height: "25%",
        marginBottom: 20,
        height: Globals.TextNotesWidth / 2,
    },

    editTitle: {
        borderBottomWidth: 1,
        borderColor: "#808080",
        fontWeight: "bold",
        fontSize: 18,
        fontFamily: 'Roboto',
    },
    editBody: {
        fontSize: 16,
        fontFamily: 'Roboto',

    },



});

export default TextNoteStyles;