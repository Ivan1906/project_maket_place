import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import Api from '../../api';

function PrivateRoute({
  component: Component,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => Api.Auth.isLoggedIn
      ? (<Component {...props}/>)
      : (<Redirect
        to={{
        pathname: '/login',
        state: {
          from: props.location
        }
      }}/>)}/>
  );
}

export default PrivateRoute;
