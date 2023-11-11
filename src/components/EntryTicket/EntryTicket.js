import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import HomeStyle from '../../screens/HomeScreen/HomeStyle';
import styles from './styles';

const EntryTicket = ({item, index}) => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <Text
        style={[
          index === 3 ? styles.listStyle : styles.otherItem,
          //   activeList == item && HomeStyle.activeListStyle,
        ]}>
        {item}
      </Text>
    </TouchableOpacity>
  );
};

export default EntryTicket;
