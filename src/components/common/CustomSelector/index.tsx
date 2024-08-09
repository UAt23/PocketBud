import React from 'react';
import {Text, TouchableOpacity, TextStyle, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

interface CustomSelectorProps {
  label: string;
  textStyle?: TextStyle;
  iconName?: string;
  iconSize?: number;
  iconColor?: string;
  onPress?: () => void;
  containerStyle?: ViewStyle; // Optional prop for custom container styles
}

const CustomSelector: React.FC<CustomSelectorProps> = ({
  label,
  textStyle,
  iconName = 'chevron-right',
  iconSize = 32,
  iconColor = '#2D3E50',
  onPress,
  containerStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      <Text style={[styles.label, textStyle]}>{label}</Text>
      <Icon name={iconName} size={iconSize} color={iconColor} />
    </TouchableOpacity>
  );
};

export default CustomSelector;
