import {Text, View} from 'react-native';
import React from 'react';
import {CustomText, Page} from '../common';
import {Tab, TabView} from '@rneui/themed';
import styles from './styles';
import CustomInput from '../common/CustomInput/CustomInput';

const AddTransaction = () => {
  const [index, setIndex] = React.useState(0);

  return (
    <Page>
      <Tab value={index} onChange={e => setIndex(e)} disableIndicator={true}>
        <Tab.Item
          buttonStyle={[styles.incomeButton, index === 0 && styles.active]}
          title="Income"
          titleStyle={styles.tabTitle}
        />
        <Tab.Item
          buttonStyle={[styles.expenseButton, index === 1 && styles.active]}
          title="Expense"
          titleStyle={styles.tabTitle}
        />
      </Tab>

      <TabView
        value={index}
        disableSwipe={true}
        onChange={setIndex}
        tabItemContainerStyle={{}}
        animationType="spring">
        <TabView.Item>
          <View style={[styles.tabPage, index === 0 && styles.tabShow]}>
            <CustomInput label="Account" />
            <CustomInput label="Category" />
          </View>
        </TabView.Item>
        <TabView.Item>
          <View style={[styles.tabPage, index === 1 && styles.tabShow]}>
            <CustomInput placeholder="select account" label="Select Account" />
            <CustomInput label="Select Category" />
          </View>
        </TabView.Item>
      </TabView>
    </Page>
  );
};

export default AddTransaction;
