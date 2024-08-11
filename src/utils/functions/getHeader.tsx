import React from 'react';
import CustomNavHeader from '../../components/common/CustomNavHeader';

export const getHeader =
  (
    title: string,
    onPressLeft: any,
    iconLeftName?: string,
    iconRightName?: string,
    onPressRight?: any,
  ) =>
  () =>
    (
      <CustomNavHeader
        title={title}
        onPressLeft={onPressLeft}
        iconLeftName={iconLeftName}
        iconRightName={iconRightName}
        onPressRight={onPressRight}
      />
    );
