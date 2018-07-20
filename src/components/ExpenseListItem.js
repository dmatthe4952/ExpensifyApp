import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import {removeExpense} from '../actions/expenses';
import {Link} from 'react-router-dom';
import numeral from 'numeral';


export const ExpenseListItem = ({dispatch, description, id, amount, createdAt}) => {
    return (
        <div>
            <span><Link to={`/edit/${id}`}>{description}</Link></span>
            <span>{amount}</span>
            <span>{moment(createdAt).format("MM/DD/YYYY")}</span>
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