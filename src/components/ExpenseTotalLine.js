import React from 'react';
import { connect } from 'react-redux';
import expensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpenseTotalLine = (props) => (
    <div>
    {
        props.expenses.length === 0 ?
        (<p/>) : 
        (<p>You are viewing {props.expenses.length} expenses,
            totaling {numeral(expensesTotal(props.expenses)/100).format('$0,0.00')}.</p>)
    }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseTotalLine);