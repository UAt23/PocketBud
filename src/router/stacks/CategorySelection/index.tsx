import {ActivityIndicator, ScrollView, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fetchCategories} from '../../../utils/SupabaseClient';
import {Page} from '../../../components/common';
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
        setCategories(data);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  console.log(categories.length);

  return (
    <Page style={styles.pageCustom}>
      {loading ? (
        <Loading />
      ) : (
        <ScrollView style={styles.listWrapper}>
          <Group />
        </ScrollView>
      )}
    </Page>
  );
}
