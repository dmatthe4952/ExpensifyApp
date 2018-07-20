import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import {addExpense, removeExpense, editExpense} from './actions/expenses';
import {setTextFilter, setStartDate, setEndDate, sortByDate, sortByAmount} from './actions/filters';
import getVisibleExpeses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'
import moment from 'moment';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpeses(state.expenses, state.filters)
});

store.dispatch(addExpense({
    description: 'Water Bill',
    amount: 3400,
    createdAt: moment().subtract(5,'days')
}));

store.dispatch(addExpense({
    description: 'Gas Bill',
    amount: 7400,
    createdAt: moment().subtract(10,'days')
}));

store.dispatch(addExpense({
    description: 'Rent',
    amount: 150000,
    createdAt: moment().subtract(1, 'day')
}));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx , document.getElementById('app'));  