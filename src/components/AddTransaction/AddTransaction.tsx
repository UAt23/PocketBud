import {Text, TextInput, View} from 'react-native';
import React from 'react';
import {CustomText, Page} from '../common';
import {Tab, TabView} from '@rneui/themed';
import styles from './styles';
import CustomInput from '../common/CustomInput/CustomInput';
import CustomSelector from '../common/CustomSelector';

const AddTransaction = () => {
  const [index, setIndex] = React.useState(0);

  return (
    <Page>
      <Tab value={index} onChange={e => setIndex(e)} disableIndicator={true}>
        <Tab.Item
          buttonStyle={[styles.incomeButton, index === 0 && styles.active]}
          title="Income"
          titleStyle={[styles.tabTitle, index === 0 && styles.tabTitleActive]}
        />
        <Tab.Item
          buttonStyle={[styles.expenseButton, index === 1 && styles.active]}
          title="Expense"
          titleStyle={[styles.tabTitle, index === 1 && styles.tabTitleActive]}
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
            <CustomInput label="Enter Amount" />
            <CustomSelector label="Select Account" />
            <CustomSelector label="Select Category" />
            <CustomSelector label="Select Date" />
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
