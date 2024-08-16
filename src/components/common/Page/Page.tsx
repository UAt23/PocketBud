import React from 'react';
import {View, ViewStyle, ViewProps} from 'react-native';
import styles from '../../../styles/common/common';

interface PageProps extends ViewProps {
  backgroundColor?: ViewStyle['backgroundColor'];
  borderRadius?: ViewStyle['borderRadius'];
  padding?: ViewStyle['padding'];
  margin?: ViewStyle['margin'];
  width?: ViewStyle['width'] | string;
  height?: ViewStyle['height'] | string;
  style?: ViewStyle;
}

const Page: React.FC<PageProps> = ({
  backgroundColor = 'transparent',
  borderRadius = 0,
  padding = 20,
  margin = 0,
  width = '100%',
  height = '100%',
  style = styles.pageContainer,
  children,
  ...rest
}) => {
  const combinedStyle: ViewStyle = {
    backgroundColor,
    borderRadius,
    padding,
    margin,
    width,
    height,
    ...style,
  };

  return (
    <View style={combinedStyle} {...rest}>
      {children}
    </View>
  );
};

export default Page;
