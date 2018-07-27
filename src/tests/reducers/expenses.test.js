import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import { setExpenses } from '../../actions/expenses';

test('should setup the default state',()=>{
    const state = expensesReducer(undefined,{type:'@@init'});
    expect(state).toEqual([]);
});

test('should remove an expense from state',()=>{
    const action = {
        type:'REMOVE_EXPENSE',
        id: 3
    }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([
        expenses[0],expenses[1]
    ])
});

test('should not remove an expense if id not found',()=>{
    const action = {
        type:'REMOVE_EXPENSE',
        id:4
    }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([
        expenses[0],expenses[1],expenses[2]
    ])
})

test('EDIT_EXPENSE action should modify expense with id given',()=>{   
    const action = {
        type:'EDIT_EXPENSE',
        id: "3",
        updates: {
            description: "Edited Bill",
            amount: 25000,                  
        }
    };

    const state = expensesReducer(expenses,action);
    expect(state[2]).toEqual({
        id: "3",
        description: "Edited Bill",
        amount: 25000,
        createdAt: moment(0).add(1,'day').valueOf(),
        note: "note 3"
    });
});

test('EDIT_EXPENSE action should not modify expense if id not found',()=>{   
    const action = {
        type:'EDIT_EXPENSE',
        id: 4,
        updates: {
            description: "Edited Bill",
            amount: 25000,                  
        }
    };

    const state = expensesReducer(expenses,action);
    expect(state).toEqual([
        expenses[0],expenses[1],expenses[2]
    ]);
});

test('action ADD_EXPENSE should add an expense to state',()=>{
    const state = [
        expenses[0],
        expenses[1]
    ];
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id:'ABCD123',
            description: "Edited Bill",
            amount: 25000,
            createdAt: moment(0).add(1,'day').valueOf(),
            note: "note 3"
        }
    };
    const result = expensesReducer(state,action);
    expect(result).toEqual([
        expenses[0],expenses[1],{
            id:'ABCD123',
            description: "Edited Bill",
            amount: 25000,
            createdAt: moment(0).add(1,'day').valueOf(),
            note: "note 3"
        }
    ])
});

test('should set expenses',()=>{
    const action = {
        type: 'SET_EXPENSES',
        expenses: [
            expenses[1]
        ]
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([expenses[1]]);
});