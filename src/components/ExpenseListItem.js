import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import {startRemoveExpense} from '../actions/expenses';
import {Link} from 'react-router-dom';
import numeral from 'numeral';


export const ExpenseListItem = ({dispatch, description, id, amount, createdAt, note}) => {
    return (
        <Link to={`/edit/${id}`} className="list-item">
            <div>
                <h3 className="list-item__title">{description}</h3>
                <span className="list-item__sub-title">{moment(createdAt).format("MMM Do, YYYY")}</span>
            </div>
            <h3 className="list-item__data">{numeral(amount / 100).format('$0,0.00')} </h3>
        </Link>
    );
};

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    };
};

export default connect()(ExpenseListItem);