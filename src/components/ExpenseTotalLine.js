import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpenseTotalLine = ({expensesCount, expensesTotal}) => { 
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
    return (
        <div className="page-header">
           <div className="content-container">
            {
                {expensesCount}  === 0 ?
                (<p/>) : 
                (<h1 className="page-header__title">You are viewing <span>{expensesCount}</span> {expenseWord},
                    totaling <span>{formattedExpensesTotal}</span>.</h1>)
                }
                <div>
                    <Link to="/create" className="button">Add Expense</Link>
                </div>
            </div>
        </div>
    )
 };

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpenseTotalLine);