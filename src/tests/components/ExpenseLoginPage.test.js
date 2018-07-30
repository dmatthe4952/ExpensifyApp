import React from 'react';
import { shallow } from 'enzyme';
import {ExpenseLoginPage} from '../../components/ExpenseLoginPage';

test('Should display the Login Page correctly', ()=>{
    const wrapper = shallow(<ExpenseLoginPage startLogout={()=>({})} />);
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogout when button clicked', () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<ExpenseLoginPage startLogin={startLogin} />);
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
});