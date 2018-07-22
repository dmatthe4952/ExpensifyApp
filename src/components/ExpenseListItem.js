import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import {removeExpense} from '../actions/expenses';
import {Link} from 'react-router-dom';
import numeral from 'numeral';


export const ExpenseListItem = ({dispatch, description, id, amount, createdAt, note}) => {
    return (
        <div>
            <span><Link to={`/edit/${id}`}>{description}</Link></span>
            <span>{numeral(amount / 100).format('$0,0.00')}</span>
            <span>{moment(createdAt).format("MM/DD/YYYY")}</span>
            <span>{note}</span>
            <span><button onClick={(e)=>{
                dispatch(removeExpense({id}));
            }}>
            Remove</button></span>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    };
};

export default connect()(ExpenseListItem);