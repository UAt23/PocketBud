import {ScrollView, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fetchCategories} from '../../../utils/SupabaseClient';
import {Page} from '../../../components/common';
import Group from '../../../components/Group';
import styles from './styles';

export default function CategorySelection() {
  const [categories, setCategories] = useState<Array<any>>([]);

  // useEffect(() => {
  //   async function name() {
  //     const data = await fetchCategories();
  //     setCategories(data);
  //   }
  //   name();
  // }, []);

  // console.log(categories.length);

  return (
    <Page style={styles.pageCustom}>
      <ScrollView style={styles.listWrapper}>
        <Group />
      </ScrollView>
    </Page>
  );
}
