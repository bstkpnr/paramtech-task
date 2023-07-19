import React from 'react';
import {View} from 'react-native';
import Account from '../../../../../components/Account';
import styles from './AccountInfo.style';

const AccountInfo = () => {
  return (
    <View style={styles.container}>
      <Account label="Hesap Numarası" value="00000000" iconVal="svg1" />
      <Account label="Sort Kod" value="04-14-11" iconVal="svg2" />
    </View>
  );
};

export default AccountInfo;
