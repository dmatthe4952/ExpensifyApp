import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, setStartDate, setEndDate, sortByDate, sortByAmount, onFocusChange, wrapper

beforeEach(() => {
    setTextFilter = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    sortByDate= jest.fn();
    sortByAmount= jest.fn();
    onFocusChange= jest.fn();
    wrapper = shallow(<ExpenseListFilters
         filters={filters}
         setTextFilter = {setTextFilter}
         setStartDate = {setStartDate}
         setEndDate = {setEndDate}
         sortByDate = {sortByDate}
         sortByAmount = {sortByAmount}
         onFocusChange = {onFocusChange}
         />);

});

test('should render ExpenseListFilters with defaults correctly', ()=>{
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with values correctly', ()=>{
    wrapper.setProps({filters:altFilters})
    expect(wrapper).toMatchSnapshot();
});

test('should handle text filter change', ()=>{
    const event = {
        target: {value: altFilters.text}
    }
    wrapper.find('input').prop('onChange')(event);
    expect(setTextFilter).toHaveBeenLastCalledWith(altFilters.text);
});

test('should handle sort by date', ()=>{
    const event = {
        target: {value: "date"}
    }
    wrapper.setProps({filters:altFilters})
    wrapper.find('select').prop('onChange')(event);
    expect(sortByDate).toHaveBeenCalled();
});

test('should handle sort by amount', ()=>{
    const event = {
        target: {value: "amount"}
    }
    wrapper.find('select').prop('onChange')(event);
    expect(sortByAmount).toHaveBeenCalled();
});

test('should change dates when selected',()=>{
    wrapper.find('DateRangePicker').
    prop('onDatesChange')({startDate:moment(), endDate:moment().add(3, 'day')});
    expect(setStartDate).toHaveBeenLastCalledWith(moment());
    expect(setEndDate).toHaveBeenLastCalledWith(
    moment().add(3, 'day'));
});

test('should change calendar focus when called',()=>{
    wrapper.find('DateRangePicker').prop('onFocusChange')("startDate");
    expect(wrapper.state('calendarFocused')).toBe('startDate');
});