import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styles from './TotalBalance.style';
import Dot from '../../../../assets/Outline.svg';
const TotalBalance = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <Text style={styles.smallText}>GBP</Text>
        <Dot />
        <Text style={styles.smallText}>Toplam bakiye</Text>
      </View>
      <View style={styles.bottomContent}>
        <Text style={styles.largeText}>
          £19,600.<Text style={styles.mediumText}>75</Text>
        </Text>
      </View>
    </View>
  );
};

export default TotalBalance;
