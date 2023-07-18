import React from 'react';
import {Text, View} from 'react-native';
import styles from './LastMoves.style';

interface Props {
  icon: React.ReactNode;
  name: string;
  action: string;
  date: string;
  amount: string;
}

const LastMoves: React.FC<Props> = ({icon, name, action, date, amount}) => {
    const amountPositive=amount.startsWith("+");
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <View style={styles.userDetails}>
          <View style={styles.userIcon}>{icon}</View>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userAction}>{action}</Text>
            <Text style={styles.userAction}>{date}</Text>
          </View>
        </View>
        <Text style={[styles.amount,{color:amountPositive ? '#4E6C35' : '#000'}]}>{amount}</Text>
      </View>
    </View>
  );
};
export default LastMoves;
