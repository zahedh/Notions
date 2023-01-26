import {StyleSheet} from 'react-native';

const SettingsStyles = StyleSheet.create({

  detailsItem: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      marginLeft: 20,
      marginRight: 20,
  },
  OptionTitleHolder: {
    width: '60%',
    marginBottom: 10,
    fontFamily: 'Roboto',
  },
  OptionLabel: {
    textAlign: 'left',
    fontSize:  16,
    fontFamily: 'Roboto',
  },
  BooleanSelector: {
    flex: 1,
    width: '40%',
  },
});


export default SettingsStyles;