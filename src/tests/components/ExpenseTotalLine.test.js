import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseTotalLine } from '../../components/ExpenseTotalLine';
import expenses from '../fixtures/expenses';

test('should render ExpenseTotalLine', ()=>{
    const wrapper = shallow(<ExpenseTotalLine  expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseTotalLine', ()=>{
    const wrapper = shallow(<ExpenseTotalLine  expenses={[]}/>);
    expect(wrapper).toMatchSnapshot();
});