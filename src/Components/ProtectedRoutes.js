/* eslint-disable react/prop-types */
import {Route, Redirect} from 'react-router-dom'
import React from 'react'

function ProtectedRoute({ component: Component }) {
    const userToken = localStorage.getItem("userToken");
   
    return <>
        <Route render={props => {
        if (!userToken) {
            return (
                <Redirect
                to={{ pathname: "/signup", state: { from: props.location } }}
                />
                );
            } else {
            return <Component />;
        }
        }} />
        </>
}

export default ProtectedRoute

