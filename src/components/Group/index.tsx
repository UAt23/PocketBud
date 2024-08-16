import React, {ReactNode} from 'react';
import {View} from 'react-native';
import {CustomText} from '../common';
import styles from './styles';
import CustomSelector from '../common/CustomSelector';
import {useForm} from 'react-hook-form';
import {AppDispatch, RootState} from '../../store/store';
import {useDispatch, useSelector} from 'react-redux';
import {
  Category,
  setSelectedCategory,
} from '../../store/slices/categoriesSlice';
import {useNavigation} from '@react-navigation/native';

interface GroupProps {
  groupData: any;
}

export default function Group({groupData}: GroupProps) {
  const navigation = useNavigation();
  const {categories, selectedCategory, loading, error} = useSelector(
    (state: RootState) => state.categories,
  );
  const dispatch: AppDispatch = useDispatch();

  const onSelect = (data: Category) => {
    // const selected = categories.find(category => category.id === data.id);
    // console.log('====================================');
    // console.log(data);
    // console.log('====================================');
    if (data) {
      dispatch(setSelectedCategory(data));
      navigation.navigate('addTransaction');
    }
  };

  const getCategories = (): ReactNode => {
    return groupData.map((category: any, index: number) => {
      return (
        <CustomSelector
          onPress={() => onSelect(category)}
          key={index}
          label={category.name}
        />
      );
    });
  };

  return (
    <View style={styles.groupWrapper}>
      <CustomText fontSize={18} fontWeight={600} style={styles.groupLabel}>
        {groupData[0]['group_name']}
      </CustomText>
      <View style={styles.categoryWrapper}>{getCategories()}</View>
    </View>
  );
}
