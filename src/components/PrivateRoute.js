import React from 'react'

const PrivateRoute = ({ children, ...routeProps}) => {
    const profile = false;

    if (!profile ){
        return <Redirect to="/signin" />;
    }
    return <Route {...routeProps}>{children}</Route>;
};

export default PrivateRoute;
