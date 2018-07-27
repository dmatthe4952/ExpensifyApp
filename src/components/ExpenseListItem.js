import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import {startRemoveExpense} from '../actions/expenses';
import {Link} from 'react-router-dom';
import numeral from 'numeral';


export const ExpenseListItem = ({dispatch, description, id, amount, createdAt, note}) => {
    return (
        <tr>
            <td><Link to={`/edit/${id}`}>{description}</Link></td>
            <td>{numeral(amount / 100).format('$0,0.00')}</td>
            <td>{moment(createdAt).format("MM/DD/YYYY")}</td>
            <td>{note}</td>
            <td><button onClick={(e)=>{
                dispatch(startRemoveExpense({id}));
            }}>
            Remove</button></td>
        </tr>
    );
};

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    };
};

export default connect()(ExpenseListItem);