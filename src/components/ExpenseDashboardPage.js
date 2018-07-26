import React from 'react';
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseTotalLine from './ExpenseTotalLine';

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters />        
        <ExpenseTotalLine />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;