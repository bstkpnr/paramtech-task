import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../../../../utils/color';
const screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.10)',
    flexDirection: 'row',
    width: screenWidth,
    top: 10,
  },
  groupContainer: {
    width: 179.5,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 4,
  },
  iconContainer: {
    width: 24,
    height: 24,
    position: 'relative',
  },

  text: {
    textAlign: 'center',
    color: Colors.access70,
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 20,
    fontFamily: 'Mark-Pro',
    fontStyle: 'normal',
  },
  line: {
    width: 1,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.10)',
  },
});
