import React from 'react';
import {View} from 'react-native';
import {CustomText} from '../common';
import styles from './styles';
import CustomSelector from '../common/CustomSelector';

export default function Group() {
  return (
    <View style={styles.groupWrapper}>
      <CustomText fontSize={18} fontWeight={600} style={styles.groupLabel}>
        Group Label
      </CustomText>
      <View style={styles.categoryWrapper}>
        <CustomSelector label="category label" />
        <CustomSelector label="category label" />
        <CustomSelector label="category label" />
        <CustomSelector label="category label" />
      </View>
    </View>
  );
}
