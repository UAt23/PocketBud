import React from 'react';
import {Page} from '../common/Page';
import BalanceCard from '../BalanceCard/BalanceCard';
import TransactionList from '../TransactionsList/TransactionList';
import styles from '../../styles/components/Home';

function Home() {
  return (
    <Page style={styles.pageContainer}>
      <BalanceCard />
      <TransactionList />
    </Page>
  );
}

export default Home;
