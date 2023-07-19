import React from 'react';
import {View, Text} from 'react-native';
import User from '../../../../../assets/User.svg';
import AddCard from '../../../../../assets/AddCard.svg';
import styles from './AccountFooter.style';

const AccountFooter = () => {
  return (
    <View style={styles.container}>
      <View style={styles.groupContainer}>
        <View style={styles.iconContainer}>
          <User />
        </View>
        <Text style={styles.text}>Para Gönder</Text>
      </View>
      <View style={styles.line} />
      <View style={styles.groupContainer}>
        <View style={styles.iconContainer}>
          <AddCard />
        </View>
        <Text style={styles.text}>Para Yükle</Text>
      </View>
    </View>
  );
};

export default AccountFooter;
