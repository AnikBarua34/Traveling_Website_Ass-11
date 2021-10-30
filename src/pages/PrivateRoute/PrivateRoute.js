import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useContextbase from '../hooks/useContextBase';


const PrivateRoute = ({children,...rest}) => {


const {user,isLoading}=useContextbase();
if(isLoading){
    return <Spinner animation="border" variant="primary" />
}    

return (
        <Route
        {...rest} render={({location})=> user.email? children 
        :
        <Redirect
              to={{
                pathname: '/login',
                state: { from: location }
              }}
            />
        }
        >
            
        </Route>
    );
};

export default PrivateRoute;