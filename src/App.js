import React from 'react';

import './App.css';
import Header from './1Header/Header';
import Balance from './2Balance/Balance';
import IncomeExpense from './3IncomeExpense/IncomeExpense';
import TransactionForm from './5TransactionForm/TransactionForm';
import History from './4History/History';
import { GlobalProvider } from './6Context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
      <Balance/>
      <IncomeExpense/>
      <History/>
      <TransactionForm/>
      </div>
    </GlobalProvider>
  );
}

export default App;
