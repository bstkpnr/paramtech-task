import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styles from './TotalBalance.style';
import Dot from '../../../../assets/Outline.svg';
const TotalBalance = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <Text style={styles.totalBalanceText}>GBP</Text>
        <Dot />
        <Text style={styles.totalBalanceText}>Toplam bakiye</Text>
      </View>
      <View style={styles.bottomContent}>
        <Text style={styles.balanceText}>
          £19,600.<Text style={styles.smallBalanceText}>75</Text>
        </Text>
      </View>
    </View>
  );
};

export default TotalBalance;
