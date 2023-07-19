import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    width: '100%',
    flexShrink: 0,
  },

  pattern:{
    height: 65, overflow: 'hidden'
  },

  maskSvg:{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    opacity: 0.7,
  },
  
  navbarContainer:
    {bottom: 50}
  
});
