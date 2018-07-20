import moment from 'moment';
import {setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount} from '../../actions/filters';

test('should generate setStartDate action obect', ()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
});

test('should generate setEndDate action obect', ()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
});

test('should generate setTextFilter action obect with given text', ()=>{
    const text = "Something"
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    })
});

test('should generate setTextFilter action obect with empty string if no text given', ()=>{
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ""
    })
});

test('should generate sortByDate object with type = SORT_BY_DATE', ()=>{
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE'})
});

test('should generate sortByAmount object with type = SORT_BY_AMOUNT', ()=>{
    expect(sortByAmount()).toEqual({type: 'SORT_BY_AMOUNT'})
});