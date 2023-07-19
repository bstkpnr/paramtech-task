import React from 'react';
import {View} from 'react-native';
import styles from './Main.style';
import ActionsScreen from '../Actions';
import AllAccountTop from '../AllAccountTop/AllAccountTop';

const Main: React.FC = () => {
  return (
    <View style={styles.container}>
      <AllAccountTop />
      <View style={styles.actionsContainer}>
        <ActionsScreen />
      </View>
    </View>
  );
};

export default Main;
