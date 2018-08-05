import React from 'react';
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseTotalLine from './ExpenseTotalLine';

const ExpenseDashboardPage = () => (
    <div className="content-container">
        <ExpenseTotalLine />
        <ExpenseListFilters />        
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;