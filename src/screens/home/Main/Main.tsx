import React, {ReactNode} from 'react';
import {View} from 'react-native';
import styles from './Main.style';

import LastActions from '../Actions';
import Top from '../Top';
interface LayoutProps {
  children: ReactNode;
}

const Main: React.FC<LayoutProps> = ({children}) => {
  return (
    <View style={styles.container}>
      <Top />
      <View style={{padding: 20}}>
        <LastActions />
      </View>
    </View>
  );
};

export default Main;
