import React from 'react';
import {ScrollView, View} from 'react-native';
import {CustomText} from '../common';
import Transaction from '../Transaction/Transaction';
import styles from './styles.scss';

const TransactionList = () => {

  // const callData = async () => {
  //   // const {data, error} = await supabase.from('Category').select('*');
  // };

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <CustomText fontSize={18} fontWeight={'700'} fontColor={'#484A4B80'}>
          Transactions
        </CustomText>
      </View>
      <ScrollView style={styles.listWrapper}>
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
      </ScrollView>
    </View>
  );
};

export default TransactionList;
