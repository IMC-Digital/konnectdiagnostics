import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { GetUserLogin } from "../services";

export default function PrivateRoute({ Component: Component, ...rest }) {
    <Route
        {...rest}
        render={props =>
            auth ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
}
