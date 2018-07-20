import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should supply default state if none given', ()=>{
    const state = filtersReducer(undefined,{type:'@@init'});
    expect(state).toEqual({
        text:"",
        sortBy:"date",
        startDate:moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('should change sortBy to amount given if action is sortByAmount',()=>{
    const state = filtersReducer(undefined,{type:'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should change sortBy to date given if action is sortByDate',()=>{
    const currentState = {
        text:"",
        sortBy:"amount",
        startDate:moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    const state = filtersReducer(currentState,{type:'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
});

test('action SET_TEXT_FILTER should change text property to given value',()=>{
    const action = {
        type: 'SET_TEXT_FILTER',
        text: 'Something'
    }
    const state = filtersReducer(undefined,action);
    expect(state.text).toBe('Something');
});

test('action SET_START_DATE should change default startDate',()=>{
    const action = {
        type: 'SET_START_DATE',
        startDate: moment("2018-05-01")
    }
    const state = filtersReducer(undefined,action);
    expect(state.startDate).toEqual(moment("2018-05-01"))

});

test('action SET_END_DATE should change default endDate',()=>{
    const action = {
        type: 'SET_END_DATE',
        endDate: moment("2018-05-15")
    }
    const state = filtersReducer(undefined,action);
    expect(state.endDate).toEqual(moment("2018-05-15"))

});