import {StyleSheet} from 'react-native';
import Colors from '../../utils/color';
export default StyleSheet.create({
  container: {
    display: 'flex',
    width: 270,
    paddingVertical: 5.5,
    paddingHorizontal: 12,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 99,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.20)',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    marginTop: 5,
    margin: 4,
    alignSelf: 'center',
  },
  leftText: {
    flex: 1,
    color: Colors.access70,
    fontSize: 12,
    fontFamily: 'Mark-Pro',
    fontWeight: '500',
    lineHeight: 15,
  },
  rightText: {
    flex: 1,
    textAlign: 'right',
    color: Colors.access70,
    fontSize: 12,
    fontFamily: 'Mark-Pro',
    fontWeight: '500',
    lineHeight: 15,
  },
  iconContainer: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 4,
  },
});
