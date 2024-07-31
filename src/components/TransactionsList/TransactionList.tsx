import React from 'react';
import {View} from 'react-native';
import {CustomText} from '../common';
import Transaction from '../Transaction/Transaction';
import styles from './styles.scss';
import CustomInput from '../common/CustomInput/CustomInput';

const TransactionList = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <CustomText>Transactions</CustomText>
      </View>
      <View style={styles.listWrapper}>
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
      </View>
    </View>
  );
};

export default TransactionList;
