import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {CustomText} from '../common';

const Transaction = () => {
  return (
    <View style={styles.card}>
      <CustomText>Transaction</CustomText>
    </View>
  );
};

export default Transaction;
