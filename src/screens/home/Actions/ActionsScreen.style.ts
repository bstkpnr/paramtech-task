import {StyleSheet} from 'react-native';
import Colors from '../../../utils/color';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  innerContainer: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },

  titleText: {
    color: Colors.access100,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18,
    fontFamily: 'Mark-Pro',
    fontStyle: 'normal',
  },

  box: {
    display: 'flex',
    width: 320,
    margin: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: Colors.neutrol0,
    borderColor: Colors.neutrol20,
    bottom: 10,
  },

  boxEmpty: {
    display: 'flex',
    width: 320,
    margin: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: Colors.neutrol0,
    borderColor: Colors.neutrol20,
    bottom: 10,
    height: 300,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  innerBox: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  boxText: {
    textAlign: 'center',
    color: Colors.neutrol60,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18,
    fontFamily: 'Mark-Pro',
    margin: 20,
  },
  
  seeAll: {
    color: Colors.neutrol70,
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 15,
    textAlign: 'right',
    fontFamily: 'Mark-Pro',
  },
});
