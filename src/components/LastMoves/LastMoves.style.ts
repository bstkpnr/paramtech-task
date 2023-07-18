import {StyleSheet} from 'react-native';
import Colors from '../../utils/color';

export default StyleSheet.create({
  container: {
    display: 'flex',
    width: 320,
    paddingHorizontal: 16,
    margin: 10,
  },
 
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: 'red',
    paddingBottom:12
    
  },
  userDetails: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  userIcon: {
    width: 40,
    height: 40,
    padding: 8,
    backgroundColor: '#F4F2F9',
    borderRadius: 6,
    marginRight: 12,
  },
  userInfo: {
    flexDirection: 'column',
  },
  userName: {
    color: Colors.access100,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18,
    fontFamily: 'Mark-Pro',
    fontStyle: 'normal',
  },
  userAction: {
    color: Colors.neutrol70,
    fontSize: 11,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 14,
    fontFamily: 'Mark-Pro',
  },
  amount: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18,
    fontFamily: 'Mark-Pro',
    fontStyle: 'normal',
  },
});
