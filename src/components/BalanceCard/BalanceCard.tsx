import {View, Text} from 'react-native';
import React from 'react';
import styles from '../../styles/components/BalanceCard';
import {CustomText} from '../common';

const BalanceCard = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardHeader}>
        <CustomText fontSize={18} fontColor={'#484A4B'}>
          Available Balance
        </CustomText>
        <CustomText fontSize={32} fontColor={'#0B7FF4'} fontWeight={600}>
          24,563.54 ₺
        </CustomText>
      </View>
      <View style={styles.cardDetail}>
        <View style={styles.leftDetail}>
          <CustomText fontSize={16} fontColor={'#484A4B'} fontWeight={700}>
            Monthly Budget
          </CustomText>
          <CustomText fontSize={14} fontColor={'#484A4B60'} fontWeight={600}>
            220₺ / Day
          </CustomText>
        </View>
        <View style={styles.rightDetail}>
          <CustomText fontSize={18} fontColor={'#D85F5F'} fontWeight={700}>
            14,653.54₺
          </CustomText>
          <CustomText fontSize={11} fontColor={'#484A4B60'} fontWeight={600}>
            of 40,000₺
          </CustomText>
        </View>
      </View>
    </View>
  );
};

export default BalanceCard;
