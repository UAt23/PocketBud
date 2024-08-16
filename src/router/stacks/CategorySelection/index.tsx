import {ActivityIndicator, ScrollView, Text} from 'react-native';
import React, {ReactNode, useEffect, useState} from 'react';
import {fetchCategories} from '../../../utils/SupabaseClient';
import {CustomText, Page} from '../../../components/common';
import Group from '../../../components/Group';
import styles from './styles';
import Loading from '../../../components/common/Loading';
import {getCategoryList} from '../../../utils/functions/getCategoryList';

export default function CategorySelection() {
  const [loading, setLoading] = useState<boolean>(false);
  const [categories, setCategories] = useState<Array<any>>([]);

  useEffect(() => {
    setLoading(true);
    const list = getCategoryList();
    list
      .then(data => {
        Object.keys(data).forEach(key => {
          const value = data[key];
          setCategories(existing => [...existing, value]);
        });
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  const getGroupCards = (): ReactNode => {
    if (categories.length > 0) {
      return categories.map((category: any, index: number): ReactNode => {
        return <Group key={index} groupData={category} />;
      });
    } else {
      return <CustomText>No data</CustomText>;
    }
  };
  return (
    <Page style={styles.pageCustom}>
      {loading ? (
        <Loading />
      ) : (
        <ScrollView style={styles.listWrapper}>{getGroupCards()}</ScrollView>
      )}
    </Page>
  );
}
