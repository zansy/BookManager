import React from "react";
import {Link} from "react-router-dom";

class AboutPage extends React.Component {
  render() {
    return (
      <div className="container jumbotron">
          <h1>About</h1>
          <p style={{color:"gray"}}>
              The app was created simply using React/React Router. Also involved:<br/>
              1. Flux: For managing how data flows through a React application.<br/>
              2. Boostrap: CSS Framework for developing responsive and mobile-first websites.<br/>
              3. Json-server: JSON file server for REST API mock.
          </p>
          <Link to="books" className="btn btn-primary">
              Books
          </Link>
      </div>
    );
  }
}

export default AboutPage;
