import { 
    setExpenses,
    startSetExpenses,
    startAddExpense, 
    addExpense, 
    removeExpense, 
    editExpense} from '../../actions/expenses';
import moment from  'moment';
import uuid from 'uuid';
import expenses from '../fixtures/expenses';
import configureStore  from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';


const mockStore = configureStore([thunk]);

beforeEach((done)=>{
    const expensesData = {};
    expenses.forEach(({id,description,note,amount,createdAt})=>{
        expensesData[id] = {description,note,amount,createdAt};
    });
    database.ref('expenses').set(expensesData).then(()=>{done()});
});


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

test('should setup addExpense obect with values given', () => {

    const result = addExpense(expenses[2]);

    expect(result).toEqual({
        type:'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('should add expense to database and store', (done)=>{
    const state = mockStore({});
    const expenseData = {
        description: 'Mouse',
        note: 'This is a better one',
        amount: 3000,
        createdAt: 1000
    }
    state.dispatch(startAddExpense(expenseData)).then(()=>{
        const action = state.getActions()[0];
        expect(action).toEqual({
            type: 'ADD_EXPENSE',
            expense:{
            id: expect.anything(),
            ...expenseData}
        });

        database.ref(`expenses/${action.expense.id}`).once('value').then((snapshot)=>{
            expect(snapshot.val()).toEqual(expenseData);
            done();
        })
    })

});

test('should add expense with defaults to database and store', (done)=>{
    const state = mockStore({});
    const defaultData = {
        description:'',
        amount:0,
        note:'',
        createdAt:0 
    }
    state.dispatch(startAddExpense()).then(()=>{
        const action = state.getActions()[0];
        expect(action.expense).toEqual({
        id:expect.anything(),
        ...defaultData
        });
        database.ref(`expenses/${action.expense.id}`).once('value').then((snapshot)=>{
            expect(snapshot.val()).toEqual(defaultData);
            done();
        })
    });
});

test('should setup set expense object with data',()=>{
     const result = setExpenses(expenses);

     expect(result).toEqual({
         type:'SET_EXPENSES',
         expenses
     })
});

test('should return data from state',()=>{
    const state = mockStore({
        id:'123abcd',
        ...expenses[0]
    });

    state.dispatch(startSetExpenses()).then((done)=>{
        const action = getActions()[0];
        expect(action).toEqual({
            type: 'SET_EXPENSES',
            expenses
        })
        done();
    })
});
