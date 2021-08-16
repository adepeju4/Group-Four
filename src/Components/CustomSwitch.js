import { Switch, useLocation } from 'react-router-dom';
import  { useEffect, useState } from "react";
import TopBarProgress from "react-topbar-progress-indicator";

import React from 'react'

// eslint-disable-next-line react/prop-types
function CustomSwitch({ children }) {
    const [progress, setProgress] = useState(false);
    const [prevLoc, setPrevLoc] = useState("");
    const location = useLocation();

     useEffect(() => {
       setPrevLoc(location.pathname);
       setProgress(true);
     }, [location]);

     useEffect(() => {
       setProgress(false);
     }, [prevLoc]);
    return (
    <>
        {progress && <TopBarProgress />}
        <Switch>
            {children}
        </Switch>
    </>
    )
}

export default CustomSwitch
