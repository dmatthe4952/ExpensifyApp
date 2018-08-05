import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const ExpenseLoginPage  = ({startLogin}) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__box__title" >Track My Spending</h1>
            <p>Keep your spending under control by tracking your spending habits.</p>
            <button onClick={startLogin} id="login-button" >Login with Google</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps) (ExpenseLoginPage);