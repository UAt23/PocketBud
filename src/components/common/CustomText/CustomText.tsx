import React from 'react';
import {Text, TextStyle} from 'react-native';

interface CustomTextProps {
  children: React.ReactNode;
  fontWeight?: TextStyle['fontWeight'];
  fontSize?: TextStyle['fontSize'];
  fontColor?: TextStyle['color'];
  style?: TextStyle;
}

const CustomText: React.FC<CustomTextProps> = ({
  children,
  fontWeight = 'normal',
  fontSize = 14,
  fontColor = '#484A4B',
  style,
}) => {
  const combinedStyle: TextStyle = {
    fontWeight,
    fontSize,
    color: fontColor,
    ...style,
  };

  return <Text style={combinedStyle}>{children}</Text>;
};

export default CustomText;
