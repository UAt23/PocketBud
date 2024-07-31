import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import {CustomText} from '../common';

const Transaction = () => {
  return (
    <View style={styles.card}>
      <View style={styles.categoryWrapper}>
        <CustomText fontColor={'#484A4B'} fontWeight={600} fontSize={18}>
          Category
        </CustomText>
        <CustomText fontColor={'#484A4B90'} fontSize={12}>
          10/07/2024
        </CustomText>
      </View>
      <View style={styles.amountWrapper}>
        <CustomText fontColor={'#484A4B'} fontWeight={600} fontSize={20}>
          +1279,99₺
        </CustomText>
      </View>
    </View>
  );
};

export default Transaction;
