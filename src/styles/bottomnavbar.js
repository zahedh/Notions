import {StyleSheet} from 'react-native';

const CustomBottomTabStyles = StyleSheet.create({

container: {

  flexDirection: 'row',
  backgroundColor: "#FFCC80",
  position: "absolute",
  bottom: 0,
  borderWidth: 0, 
  borderColor: '#333333',
  marginBottom: 0,
  alignItems: "center",
//  flex: 1,
},

text: {
  flex: 1,
  alignItems: "center",
  borderWidth: 0, 
  borderColor: '#333333',
  paddingRight: 5,
  paddingLeft: 5,
  paddingBottom: 5,
},

textActive: {
  flex: 1,
  alignItems: "center",
  borderWidth: 0, 
  borderColor: '#333333',
  paddingRight: 5,
  paddingLeft: 5,
  paddingBottom: 5,
  backgroundColor: "#FB8C00",
},

gallery: {
  flex: 1,
  alignItems: "center",
  borderWidth: 0, 
  borderColor: '#333333',
  paddingRight: 5,
  paddingLeft: 5,
  paddingBottom: 5,
},

galleryActive: {
  flex: 1,
  alignItems: "center",
  borderWidth: 0, 
  borderColor: '#333333',
  paddingRight: 5,
  paddingLeft: 5,
  paddingBottom: 5,
  backgroundColor: "#FB8C00",
},

location: {
  flex: 1,
  alignItems: "center",
  borderWidth: 0, 
  borderColor: '#333333',
  paddingRight: 5,
  paddingLeft: 5,
  paddingBottom: 5,
},

locationActive: {
  flex: 1,
  alignItems: "center",
  borderWidth: 0, 
  borderColor: '#333333',
  paddingRight: 5,
  paddingLeft: 5,
  paddingBottom: 5,
  backgroundColor: "#FB8C00",
  
},

settings: {
  flex: 1,
  alignItems: "center",
  borderWidth: 0, 
  borderColor: '#333333',
  paddingRight: 5,
  paddingLeft: 5,
  paddingBottom: 5,
},

settingsActive: {
  flex: 1,
  alignItems: "center",
  borderWidth: 0, 
  borderColor: '#333333',
  paddingRight: 5,
  paddingLeft: 5,
  backgroundColor: "#FB8C00",
  paddingBottom: 5,
},

title: {
  color: "#000000",
  paddingTop: 5,
  fontSize: 12,
},

titleActive: {
  color: "#FFFFFF",
  paddingTop: 5,
  fontSize: 12,
},

icon: {
  color: "#000000",
  paddingTop: 5
},
iconActive: {
  color: "#FFFFFF",
  paddingTop: 5
},
});

export default CustomBottomTabStyles;