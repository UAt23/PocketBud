import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CustomText, Page} from '../common';
import {Tab, TabView} from '@rneui/themed';
import styles from './styles';
import CustomInput from '../common/CustomInput/CustomInput';
import CustomSelector from '../common/CustomSelector';
import {useNavigation} from '@react-navigation/native';
import {SubmitHandler, useForm} from 'react-hook-form';
import {TouchableOpacity} from 'react-native-gesture-handler';
import DatePicker from 'react-native-date-picker';
import {reformatDate} from '../../utils/functions';
import {AppDispatch, RootState} from '../../store/store';
import {useDispatch, useSelector} from 'react-redux';
import {submitForm} from '../../store/slices/formSlice';
import {setSelectedCategory} from '../../store/slices/categoriesSlice';

interface FormInputs {
  amount: string;
  account: any;
  category: any;
  date: Date;
}

const AddTransaction = () => {
  const navigation = useNavigation();
  const dispatch: AppDispatch = useDispatch();
  const {selectedCategory} = useSelector(
    (state: RootState) => state.categories,
  );
  const {loading, error, data} = useSelector((state: RootState) => state.form);
  const [index, setIndex] = React.useState(0);
  const {
    control,
    handleSubmit,
    formState: {errors},
    setValue,
    trigger,
  } = useForm<FormInputs>();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  /**
   * This useEffect is to update form field
   * when the selectedCategory state's value
   * change
   */
  useEffect(() => {
    if (selectedCategory) {
      setValue('category', selectedCategory);
      trigger('category');
    }
  }, [selectedCategory]);

  const onSubmit: SubmitHandler<FormInputs> = formData => {
    dispatch(submitForm(formData));
    dispatch(setSelectedCategory(null));
    setValue('category', null);
    trigger('category');
  };

  const changePage = (type: string) => {
    switch (type) {
      case 'account':
        break;
      case 'categories':
        navigation.navigate('categorySelection');
        break;
      default:
        break;
    }
  };

  return (
    <Page>
      <Tab value={index} onChange={e => setIndex(e)} disableIndicator={true}>
        <Tab.Item
          buttonStyle={[styles.expenseButton, index === 0 && styles.active]}
          title="Expense"
          titleStyle={[styles.tabTitle, index === 0 && styles.tabTitleActive]}
        />
        <Tab.Item
          buttonStyle={[styles.incomeButton, index === 1 && styles.active]}
          title="Income"
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
            <CustomInput
              label="Enter Amount"
              name="amount"
              control={control}
              errorMessage={errors.amount?.message}
              rules={{
                required: {value: true, message: 'Please provide amount'},
              }}
              keyboard="numeric"
            />
            <CustomSelector
              onPress={() => changePage('account')}
              label="Select Account"
              name="account"
              control={control}
              errorMessage={errors.account?.message}
              // rules={{
              //   required: {value: true, message: 'Please select an account'},
              // }}
            />
            <CustomSelector
              onPress={() => changePage('categories')}
              label={
                selectedCategory ? selectedCategory.name : 'Select Category'
              }
              name="category"
              control={control}
              errorMessage={errors.category?.message}
              rules={{
                required: {value: true, message: 'Please select a category'},
              }}
            />
            <CustomSelector
              onPress={() => setOpen(true)}
              label={date ? reformatDate(date) : 'Select Date'}
              iconName="calendar-month"
              control={control}
              errorMessage={errors.date?.message}
              rules={{
                required: {value: true, message: 'Please select a date'},
              }}
            />
            <DatePicker
              modal
              mode="date"
              open={open}
              date={date}
              onConfirm={selectedDate => {
                setOpen(false);
                setDate(date);
                setValue('date', selectedDate); // Update the form value using React Hook Form
                trigger('date'); // Manually trigger validation so the error message disappears
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </View>
        </TabView.Item>
        <TabView.Item>
          <View style={[styles.tabPage, index === 1 && styles.tabShow]}>
            {/* <CustomInput placeholder="select account" label="Select Account" />
            <CustomInput label="Select Category" /> */}
          </View>
        </TabView.Item>
      </TabView>
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={[styles.buttonWrapper, styles.createButton]}>
          <CustomText style={styles.buttonText}>Create</CustomText>
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={() => changePage('account')}
          style={[styles.buttonWrapper, styles.cancelButton]}>
          <CustomText style={styles.buttonText}>Cancel</CustomText>
        </TouchableOpacity> */}
      </View>
    </Page>
  );
};

export default AddTransaction;
