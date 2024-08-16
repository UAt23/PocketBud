import React from 'react';
import {Text, TouchableOpacity, TextStyle, ViewStyle, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Controller} from 'react-hook-form';
import styles from './styles';

interface CustomSelectorProps {
  label: string;
  textStyle?: TextStyle;
  iconName?: string;
  iconSize?: number;
  iconColor?: string;
  onPress?: () => void;
  containerStyle?: ViewStyle;
  control?: any;
  name?: string;
  errorMessage?: string;
  rules?: any;
}

const CustomSelector: React.FC<CustomSelectorProps> = ({
  label,
  textStyle,
  iconName = 'chevron-right',
  iconSize = 32,
  iconColor = '#2D3E50',
  onPress,
  containerStyle,
  control,
  name,
  errorMessage,
  rules,
}) => {
  if (control && name) {
    return (
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({field: {onChange, value}, fieldState: {error}}) => (
          <TouchableOpacity
            style={[styles.container]}
            onPress={() => {
              onPress && onPress();
              onChange(value);
            }}>
            <View style={[containerStyle]}>
              <Text style={[styles.label, textStyle]}>{label}</Text>
              {error?.message && (
                <Text style={styles.errorText}>{error.message}</Text>
              )}
            </View>
            <Icon name={iconName} size={iconSize} color={iconColor} />
          </TouchableOpacity>
        )}
      />
    );
  }

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
