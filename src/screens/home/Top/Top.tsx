import React, {ReactNode} from 'react';
import {View, Text} from 'react-native';
import styles from './Top.style';

import TotalBalance from './Balance/TotalBalance';
import TopFrame from './Frame/AccountInfo/AccountInfo';
import TopFrame2 from './Frame/AccountFooter/AccountFooter';
import LinearGradient from 'react-native-linear-gradient';
import Frame1 from '../Navbar';
function Top() {
  return (
    <LinearGradient
      start={{x: 0.0, y: 0.0}}
      end={{x: 0.0, y: 1.0}}
      colors={['#220C45', '#440E85']}>
      <View style={{top: 50}}>
        <Frame1 />
      </View>

      <TotalBalance />

      <TopFrame />
      <TopFrame2 />
    </LinearGradient>
  );
}

export default Top;
