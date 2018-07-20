import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        {props.isAuthenticated && <p> This is some info: {props.info} </p>}
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info.  Please don't share!</p>}
            
            <WrappedComponent {...props}/>
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const requireAuthenticated = (WrappedComponent) => {
    return (props) => (
        <div>
            {!props.isAuthenticated && <p>User needs to log in</p>}
            <WrappedComponent {...props} />
        </div>
    );
};
const AuthenticatedInfo = requireAuthenticated(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info='These are some details.'/>, document.getElementById('app'));
ReactDOM.render(<AuthenticatedInfo isAuthenticated={true} info='These are some details.'/>, document.getElementById('app'));