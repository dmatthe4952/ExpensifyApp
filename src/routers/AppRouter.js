import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { Router, Route, Switch } from 'react-router-dom';
import ExpenseLoginPage from '../components/ExpenseLoginPage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import NotFoundPage from "../components/NotFoundPage";
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history} >
        <div>
            <Switch>
        `       <PublicRoute path="/" component={ExpenseLoginPage} exact={true}/> 
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} exact={true}/> 
                <PrivateRoute path="/create" component={AddExpensePage}/> 
                <PrivateRoute path="/edit/:id" component={EditExpensePage}/> 
                <PublicRoute component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;