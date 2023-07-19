import React from 'react';
import {View, Text} from 'react-native';
import styles from './Account.style';
import Copy from '../../assets/Copy.svg';
import Check from '../../assets/Check.svg';

interface Props {
  label: string;
  value: string;
  iconVal: 'svg1' | 'svg2';
}

const Account: React.FC<Props> = ({label, value, iconVal}) => {
  const SvgIcon = iconVal === 'svg1' ? Copy : Check;
  return (
    <View style={styles.container}>
      <Text style={styles.leftText}>{label}</Text>
      <Text style={styles.rightText}>{value}</Text>
      <View style={styles.iconContainer}>
        <SvgIcon width={20} height={20} />
      </View>
    </View>
  );
};
export default Account;
