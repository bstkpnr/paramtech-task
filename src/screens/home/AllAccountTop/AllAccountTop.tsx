import React from 'react';
import {View} from 'react-native';
import TotalBalance from './Balance/TotalBalance';
import AccountInfo from './Frame/AccountInfo/AccountInfo';
import AccountFooter from './Frame/AccountFooter/AccountFooter';
import LinearGradient from 'react-native-linear-gradient';
import Navbar from '../Navbar';
import MaskGroup from '../../../assets/MaskGroup.svg';
import styles from './AllAccountTop.style';

function AllAccountTop() {
  
  return (
    <LinearGradient
      start={{x: 0.0, y: 0.0}}
      end={{x: 0.0, y: 1.0}}
      style={styles.container}
      colors={['#220C45', '#440E85']}>
      <View style={styles.pattern}>
        <MaskGroup style={styles.maskSvg} />
      </View>
      <View style={styles.navbarContainer}>
        <Navbar />
      </View>
      <TotalBalance />
      <AccountInfo />
      <AccountFooter />
    </LinearGradient>
  );
}

export default AllAccountTop;
