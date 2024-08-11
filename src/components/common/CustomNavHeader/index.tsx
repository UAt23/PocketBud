import {View, Text} from 'react-native';
import React, {memo} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

interface HeaderProps {
  title: string;
  onPressLeft: any;
  iconLeftName?: string;
  iconRightName?: string;
  onPressRight?: any;
}

const CustomNavHeader = memo(
  ({
    title,
    onPressLeft,
    iconLeftName = 'menu',
    iconRightName = 'menu',
    onPressRight,
  }: HeaderProps) => {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={onPressLeft}>
          <Icon name={iconLeftName} size={32} color="#484A4B" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{title}</Text>
        <TouchableOpacity onPress={onPressRight}>
          <Icon
            name={iconRightName}
            size={32}
            color={iconRightName === 'menu' ? '#fff' : '#484A4B'}
          />
        </TouchableOpacity>
      </View>
    );
  },
);

export default CustomNavHeader;
