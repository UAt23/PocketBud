import React from 'react';
import {View, ViewStyle, ViewProps} from 'react-native';

interface PageProps extends ViewProps {
  backgroundColor?: ViewStyle['backgroundColor'];
  borderRadius?: ViewStyle['borderRadius'];
  padding?: ViewStyle['padding'];
  margin?: ViewStyle['margin'];
  style?: ViewStyle;
}

const Page: React.FC<PageProps> = ({
  backgroundColor = 'transparent',
  borderRadius = 0,
  padding = 20,
  margin = 0,
  style,
  children,
  ...rest
}) => {
  const combinedStyle: ViewStyle = {
    backgroundColor,
    borderRadius,
    padding,
    margin,
    ...style,
  };

  return (
    <View style={combinedStyle} {...rest}>
      {children}
    </View>
  );
};

export default Page;
