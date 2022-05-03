import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="jumbotron container">
      <h1>Book Manager</h1>
      <p style={{color:"gray"}}>
          A simple book management application.<br/>
          You can manage your reading status here.<br/>
          It divides books into books to be read, books being read, and books that have been read.
      </p>
      <Link to="about" className="btn btn-primary">
        About
      </Link>
    </div>
  );
}

export default HomePage;
