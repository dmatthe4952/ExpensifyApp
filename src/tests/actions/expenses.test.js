import {addExpense, removeExpense, editExpense} from '../../actions/expenses';
import moment from  'moment';
import uuid from 'uuid';

test('should setup removeExpense obect', ()=>{
    const result = (removeExpense({id:1}));
    expect(result).toEqual({
        type:'REMOVE_EXPENSE',
        id:1
    });
});

test('should setup editExpense object', ()=>{
    const result = (editExpense({id:'abcd'},{
        description: 'edited description',
        amount:200
    }));
    expect(result).toEqual({
        type:'EDIT_EXPENSE',
        id:{id:'abcd'},
        updates:{
            description: 'edited description',
            amount:200
        }
    })
});

test('should setup addExpense obect with values given',
() => {
    const expenseData = {
        description: 'Test Expense',
        amount: 20599,
        note: 'Note 1',
        createdAt: moment(5000)
    }
    const result = addExpense(expenseData);

    expect(result).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            id: expect.anything(),
            ...expenseData
        }
    });
});

test('should setup addExpense object with default values if no expense given',
()=>{
    const result = addExpense();

    expect(typeof result).toBe('object');
    expect(result.expense).toEqual({
        id:expect.anything(),
        description:'',
        amount:0,
        note:'',
        createdAt:0
    });
});