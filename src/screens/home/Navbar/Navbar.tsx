import React, {ReactNode} from 'react';
import {View, Text} from 'react-native';
import styles from './Navbar.style';
import LogoParam from '../../../assets/Logo.svg';
import Notification from '../../../assets/Icon.svg';

import Edit from '../../../assets/edit.svg';


const Navbar = () => {
  return (

    <View style={styles.container}>
      <View style={styles.firstFrame}>
        <Text style={styles.text}>SY</Text>
        <View style={styles.iconContainer}>
          <Edit />
        </View>
      </View>
      <View style={styles.secondFrame}>
          <View>
            <LogoParam />
        </View>
      </View>
      <View style={styles.thirdFrame}>
        <Notification />
      </View>
    </View>
  
  );
};

export default Navbar;
