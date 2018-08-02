import configureStore  from 'redux-mock-store';
import thunk from 'redux-thunk';
import { 
    setExpenses,
    startSetExpenses,
    addExpense, 
    startAddExpense, 
    editExpense, 
    startEditExpense,
    removeExpense,
    startRemoveExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const uid = 'asdflkjh1234';
const defaultAuthState = {auth:{uid}}
const mockStore = configureStore([thunk]);

beforeEach((done)=>{
    const expensesData = {};
    expenses.forEach(({id,description,note,amount,createdAt})=>{
        expensesData[id] = {description,note,amount,createdAt};
    });
    database.ref(`users/${uid}/expenses`).set(expensesData).then(()=>{done()});
});


test('should setup removeExpense obect', ()=>{
    const action = (removeExpense({id:1}));
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:1
    });
});

test('should remove expense identified',(done)=>{
    const state = mockStore(defaultAuthState);
    const id = 1;
    state.dispatch(startRemoveExpense({id})).then(()=>{
        const action = state.getActions()[0];
        expect(action).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        });
        return database.ref(`users/${uid}expenses/${id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toBeFalsy();
        done();
    });   
});

test('should setup edit Expense object', ()=>{
    const action = (editExpense({id:'abcd',updates:{
        description: 'edited description',
        amount:200}
    }));
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:{id:'abcd',
        updates:{
            description: 'edited description',
            amount:200
            }
        }
    })
});

test('should edit expense identified with given updates', (done) => {
    const state = mockStore(defaultAuthState);

    const id = 1

    const updates = {
        description: "Edited Item",
        note: "Edited note",
        amount: 99999999
    }
    state.dispatch(startEditExpense(id, updates)).then(()=>{
        const action = state.getActions()[0];
        expect(action).toEqual({
            type: 'EDIT_EXPENSE',
            id,
            updates
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val().amount).toBe(updates.amount);
        done();
    })
});

test('should setup addExpense obect with values given', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('should add expense to database and store', (done)=>{
    const state = mockStore(defaultAuthState);
    const expenseData = {
        description: 'Mouse',
        note: 'This is a better one',
        amount: 3000,
        createdAt: 1000
    };

    state.dispatch(startAddExpense(expenseData)).then(()=>{
        const action = state.getActions()[0];
        expect(action).toEqual({
            type: 'ADD_EXPENSE',
            expense:{
                id: expect.anything(),
                ...expenseData
            }
        });
        return database.ref(`users/${uid}/expenses/${action.expense.id}`).once('value');
        }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('should add expense with defaults to database and store', (done)=>{
    const state = mockStore(defaultAuthState);
    const defaultData = {
        description:'',
        amount:0,
        note:'',
        createdAt:0 
    }
    state.dispatch(startAddExpense({})).then(()=>{
        const action = state.getActions()[0];
        expect(action).toEqual({
            type: 'ADD_EXPENSE',
            expense:{
                id:expect.anything(),
                ...defaultData
            }
        });

        return database.ref(`users/${uid}/expenses/${action.expense.id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(defaultData);
        done();
    });
});

test('should setup set expense object with data',()=>{
     const result = setExpenses(expenses);
     expect(result).toEqual({
         type:'SET_EXPENSES',
         expenses
     })
});

test('should set Expenses with data from firebase',(done) => {
    const state = mockStore(defaultAuthState);

    state.dispatch(startSetExpenses()).then(() => {
        const action = state.getActions()[0];
        expect(action).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});



