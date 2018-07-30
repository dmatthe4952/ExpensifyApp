import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({startLogout}) => (
    <header className="header">
        <h1>Track My Spending</h1>
        <NavLink to="/dashboard" activeClassName="is-active" exact={true}> Home </NavLink>
        <NavLink to = "/create" activeClassName="is-active"> Add an Expense </NavLink>
        <NavLink to = '/help' activeClassName='is-active'> Help </NavLink>
        <button id="logout" onClick={startLogout}  >LogOut</button>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
        startLogout: () =>  dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);