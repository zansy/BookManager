import React from "react";
import {Link} from "react-router-dom";

function HomePage() {
    return (
        <div className="container">
            <h1>Home</h1>
            <Link to="about" className="btn btn-primary">
                About
            </Link>
        </div>
    )
}
export default HomePage;
