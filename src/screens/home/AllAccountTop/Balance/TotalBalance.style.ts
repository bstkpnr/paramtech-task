import {StyleSheet} from 'react-native';
import Colors from '../../../../utils/color';
export default StyleSheet.create({
  container: {
    flex: 1,
    bottom:31,
    flexShrink: 0,
  },
  topContent: {
    height: 13,
    justifyContent: 'center',
    margin: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  totalBalanceText: {
    color: Colors.access70,
    fontSize: 10,
    fontFamily: 'Mark-Pro',
    fontWeight: '500',
    lineHeight: 13,
  },

  bottomContent: {
    width: 158,
    height: 40,
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:'center'
  },
  balanceText: {
    color: Colors.neutrol0,
    fontSize: 32,
    fontFamily: 'Mark-Pro',
    fontWeight: '500',
    lineHeight: 40,
  },
  smallBalanceText: {
    color: Colors.neutrol0,
    fontSize: 20,
    fontFamily: 'Mark-Pro',
    fontWeight: '500',
  },
});
