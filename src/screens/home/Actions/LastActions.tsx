import React, {ReactNode, useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import styles from './LastActions.style';
import Filled from '../../../assets/Filled2.svg';
import LastMoves from '../../../components/LastMoves/LastMoves';
import Outline1 from '../../../assets/Outline1.svg';
import Outline2 from '../../../assets/Outline2.svg';
import Outline3 from '../../../assets/Outline3.svg';

interface Actions {
  icon: ReactNode;
  name: string;
  action: string;
  date: string;
  amount: string;
}
function LastActions() {
  const [actions, setActions] = useState<Actions[]>([]);

  useEffect(() => {
    const time = setTimeout(() => {
      setActions([
        {
          icon: <Outline1 />,
          name: 'Serhan Yılmaz',
          action: 'Uluslararası',
          date: '18 Şubat 2023 / 14:24',
          amount: '- £100.00',
        },
        {
          icon: <Outline2 />,
          name: 'Emin Can Yılmaz',
          action: 'Yerel ',
          date: '18 Şubat 2023 / 14:24',
          amount: '+ £15,000.00',
        },
        {
          icon: <Outline3 />,
          name: 'Serhan Yılmaz',
          action: 'Para Yükle',
          date: '18 Şubat 2023 / 14:24',
          amount: '- £100.00',
        },
      ]);
    }, 5000);

    return () => clearTimeout(time);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.titleText}>Son Hareketler</Text>
        {actions.length > 0 && <Text style={styles.seeAll}>{"Tümü >>"}</Text>}
      </View>
      <View style={[styles.box,actions.length>0 ?  { } : { height: 330, flexDirection: "column", justifyContent: "center" ,bottom:10}]}>
        <View style={styles.innerBox}>
          {actions.length === 0 ? (
            <>
              <Filled />
              <Text style={styles.centeredText}>
                Son hareketin{'\n'}bulunmuyor.
              </Text>
            </>
          ) : (
            actions.map((move, index) => (

              <LastMoves
                key={index}
                icon={move.icon}
                name={move.name}
                action={move.action}
                date={move.date}
                amount={move.amount}
              />
            ))
          )}
        </View>
      </View>
    </View>
  );
}

export default LastActions;
