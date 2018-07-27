import React from 'react';
import { shallow }  from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let startEditExpense, startRemoveExpense, wrapper, history
beforeEach(()=>{
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(<EditExpensePage
         startEditExpense={startEditExpense}
         startRemoveExpense={startRemoveExpense}
         history={history}
         expense={expenses[1]}
         />); 
})

test('should render EditExpensePage correctly', ()=> {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit if called', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[1].id,expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle onClick when remove pressed',()=>{
    wrapper.find('button').prop('onClick')({id:expenses[1].id})
    expect(startRemoveExpense).toHaveBeenLastCalledWith({id:expenses[1].id})
    expect(history.push).toHaveBeenLastCalledWith('/')
});