import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('should filter by text value',()=>{
    const result = 
    selectExpenses(expenses,{
        text:"first",
        sortBy:"date",
        startDate:undefined,
        endDate:undefined
    });
    expect(result).toEqual([expenses[0]]);

});

test('should select everything and sort expenses by date if no text given',()=>{
    const result = 
    selectExpenses(expenses,{
        text:"",
        sortBy:"date",
        startDate:undefined,
        endDate:undefined
    });
    expect(result).toEqual([expenses[2],expenses[0],expenses[1]]);

});

test('should select everything and sort expenses by given amount key if no text given',()=>{
    const result = 
    selectExpenses(expenses,{
        text:"",
        sortBy:"amount",
        startdate:undefined,
        endDate:undefined
    });
    expect(result).toEqual([expenses[2], expenses[1],expenses[0]]);
});

test('should select expenses with createdBy greater than given start date',()=>{
    const testDate = moment(0);
    const result = 
    selectExpenses(expenses,{
        text:"",
        sortBy:"date",
        startDate: testDate,
        endDate:undefined
    });
    expect(result).toEqual([expenses[2],expenses[0]])
});

test('should select expenses with createdBy less than given end date',
()=>{
    const testDate = moment(0);
    const result = 
    selectExpenses(expenses,{
        text:"",
        sortBy:"date",
        startDate:undefined,
        endDate:testDate
    });
    expect(result).toEqual([expenses[0],expenses[1]]);
});

test('should select expenses between startDate and endDate given', ()=>{
    const testDate = moment(0);
    const result = 
    selectExpenses(expenses,{
        text:"",
        sortBy:"date",
        startDate:testDate,
        endDate:testDate
    });
    expect(result).toEqual([expenses[0]]);
})