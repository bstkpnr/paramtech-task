import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Account from '../../../../../components/Account';

const AccountInfo = () => {


  return (
    <View style={{marginTop:96,}}>
        <Account label='Hesap Numarası' value='00000000' iconVal='svg1'  />
        <Account label='Sort Kod' value='04-14-11' iconVal='svg2' />
   
    </View>
  );
};


export default AccountInfo;