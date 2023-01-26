import {StyleSheet} from 'react-native';

const ApplicationGuideStyles = StyleSheet.create({

  modalView: {
    width: '100%',
    maxHeight: "80%",
    backgroundColor: 'white',
    alignItems: 'flex-start',
    alignSelf: 'center',
    borderColor: "#000000",
    padding: 15,
  },

  modalTitleText: {
    fontWeight: "bold",
    fontFamily: 'Roboto',
    fontSize:  20,
    color: "#FB8C00",
    marginBottom: 20,
},

  modalButtonView: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%"
  },

  closeButton: {
    color: '#FB8C00',
    textAlign: "right",
    fontSize: 16,
    paddingTop: 15,
    marginRight: 10,
    fontFamily: 'Roboto',
    fontWeight: "bold"
  },

  modalDetailsHolder: {
//    marginBottom: 20,
  },

  text: {
    fontSize: 16,
    fontFamily: 'Roboto',
    marginBottom: 10,

  }


});


export default ApplicationGuideStyles;