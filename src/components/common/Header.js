import React from "react";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/books">Books</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/about">About</a>
                </li>
            </ul>
        </div>
    </nav>
  );
}

export default Header;
