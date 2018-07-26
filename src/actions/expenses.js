import uuid from 'uuid';
import database from '../firebase/firebase';

//ADD_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData={}) => {
    return (dispatch)=>{
       const {
        description="",
        note="",
        amount=0,
        createdAt=0
        } = expenseData;

        const expense = {description, note, amount, createdAt};

        return database.ref('expenses').push(expense).then((ref)=> {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        }).catch((e)=>{
            console.log('Error adding expense:', e)
        });
    };
};

//REMOVE_EXPENSE
export const removeExpense = ({id}) => {
    return {
        type: 'REMOVE_EXPENSE',
        id        
    }
};

//EDIT_EXPENSE
export const editExpense = (id, updates) => {
    return {
    type: 'EDIT_EXPENSE',
    id,
    updates
    }
};

//SET_EXPENSES
export const setExpenses = (expenses)=>{
    return {
        type: 'SET_EXPENSES',
        expenses 
    }
};

export const startSetExpenses = ()=>{
    return (dispatch) => {
        let expenses = [];
        return database.ref('expenses').once('value',(snapshot)=>{
            snapshot.forEach((childSnapshot)=>{
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val() 
                }
                );
            });
            dispatch(setExpenses(expenses));
        });
    };
};

