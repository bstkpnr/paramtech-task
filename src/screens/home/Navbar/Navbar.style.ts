import {StyleSheet} from 'react-native';
import Colors from '../../../utils/color';

export default StyleSheet.create({

  container: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding:20,
  },
  firstFrame: {
    display:'flex',
    width: 32,
    height: 32,
    backgroundColor:Colors.access30,
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height: 15,
    textAlign: 'center',
    color: Colors.primary140,
    fontSize: 12,
    lineHeight:15,
    fontFamily: 'Mark-Pro',
    fontWeight: '500',
  },
  iconContainer: {
    padding: 4,
    backgroundColor:Colors.secondary100,
    borderRadius: 200,
    borderWidth: 0.5,
    borderColor: Colors.neutrol5,
    justifyContent: 'center',
    alignItems: 'center',
    display:'flex',
    position:'absolute',
    right:0,
    bottom:-4
  },
 
  absoluteElement2: {
    width: 5,
    height: 5,
    position: 'absolute',
    left: 0.5,
    top: 0.5,
    backgroundColor: Colors.neutrol0,
  },
  secondFrame: {
    width: 97.89,
    height: 12,
  },
  thirdFrame: {
    width: 24,
    height: 24,
    position: 'relative',
  },
});
