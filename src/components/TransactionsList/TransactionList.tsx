import React from 'react';
import {View} from 'react-native';
import {CustomText} from '../common';
import Transaction from '../Transaction/Transaction';
import styles from './styles.scss';

const TransactionList = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <CustomText>Transactions</CustomText>
      </View>
      <View style={styles.listWrapper}>
        <Transaction />
      </View>
    </View>
  );
};

export default TransactionList;
