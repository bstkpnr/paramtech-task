import React from 'react';
import {Text, View} from 'react-native';
import styles from './LastActions.style';
import Colors from '../../utils/color';

interface Props {
  icon: React.ReactNode;
  name: string;
  action: string;
  date: string;
  amount: string;
  lastBorder: boolean;
}

const LastActions: React.FC<Props> = ({
  icon,
  name,
  action,
  date,
  amount,
  lastBorder,
}) => {
  const amountPositive = amount.startsWith('+');
  return (
    <View style={styles.container}>
      <View style={[styles.details, lastBorder && {borderBottomWidth: 0}]}>
        <View style={styles.userDetails}>
          <View style={styles.userIcon}>{icon}</View>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userAction}>{action}</Text>
            <Text style={styles.userAction}>{date}</Text>
          </View>
        </View>
        <Text
          style={[
            styles.amount,
            {color: amountPositive ? Colors.green100 : Colors.neutral100},
          ]}>
          {amount}
        </Text>
      </View>
    </View>
  );
};
export default LastActions;
