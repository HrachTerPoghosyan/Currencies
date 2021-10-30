import React from 'react';
import "./index.css"
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className="NotFound">
            <h1 className="NotFound-title">404! Page Not Found</h1>
            <Link to="/" className="NotFound-link">Go To Home Page</Link>
        </div>
    );
};

export default NotFound;