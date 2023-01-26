import { StyleSheet } from 'react-native';
import Globals from '../memory/globals.js';

const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  screenContainer : {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#FFFFFF',
    marginBottom: Globals.NavBarHeight,
  },

  ScrollView: {
    backgroundColor: '#F5FCFF',
    height: "100%",
        marginBottom: Globals.NavBarHeight,
  },

  TitleHolder: {
    width: '100%',
//    padding: 10,
    justifyContent: "flex-start",
    fontFamily: 'Roboto',
  },

  Title: {
    fontSize:  16,
    textAlign: "center",
    paddingTop: 42,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 10,
    fontFamily: 'Roboto',
//    paddingBottom: 15,
  },

  Button: {
    backgroundColor: "#fafafa",
    flex: 1,
    justifyContent: "center",
    marginLeft: 5,
    marginRight: 5,
    width: "35%",
    maxWidth: "60%",
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#FB8C00',
    fontFamily: 'Roboto',
    },

  ButtonText: {
    color: '#000000',
    textAlign: "center",
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 3,
    paddingRight: 3,
    fontFamily: 'Roboto',
  },

  centeredText: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: 'Roboto',
  },

  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

  },

  FloatingActionButtonHolder: {
    position: 'absolute',
    zIndex: 2,
    bottom: 15,
    right: 25,
    borderRadius: 25,
    backgroundColor: "#FB8C00",
  },

  LocationButtonHolder: {
    position: 'absolute',
    zIndex: 2,
    bottom: 77,
    right: 25,
    borderRadius: 25,
    backgroundColor: "#FB8C00",
  },

  ImagePickerButtonHolder: {
    position: 'absolute',
    zIndex: 2,
    bottom: 15,
    right: 25,
    borderRadius: 25,
    backgroundColor: "#FB8C00",
    alignItems: "center",
    justifyContent: "center"
  },

  ImageTakerButtonHolder: {
    position: 'absolute',
    zIndex: 2,
    bottom: 90,
    right: 25,
    borderRadius: 25,
    backgroundColor: "#FB8C00",
    alignItems: "center",
    justifyContent: "center"
  },

  ImageTakerButtonHolder2 :{
    width: 50,
    height: 50,
    paddingLeft: 6,
    paddingTop: 5
  },

  ImagePickerButtonHolder2: {
    width: 50,
    height: 50,
    paddingLeft: 5,
    paddingTop: 3
  },

  TextButtonHolder: {


  },

  ButtonHolder: {
    width: 50,
    height: 50,
    paddingLeft: 7.5,
    paddingTop: 7
  },

  FloatingActionButton: {
    width: 50,
    height: 50,
    color: "#ffffff",
  },

});

export default GlobalStyles;