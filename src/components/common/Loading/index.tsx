import {View, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './styles';

export default function Loading() {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator size="large" color="#484A4B" />
    </View>
  );
}
