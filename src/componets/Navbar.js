import React from "react";
import { Link } from "react-router-dom";

function Navbar({ setSearchWord, searchWord }) {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light  navbars">
        <Link aria-current="page" to="/"    >
          <img src="news.logo.erthtype.jpg" id="logo" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
          <Link
              className="nav-link active  "
              aria-current="page"
              to="/"
            >
              General
            </Link>
            </li>
            <li class="nav-item active">
            <Link className="nav-link " to="/Entertainment">
              Entertainment
            </Link>
            </li>
            <li class="nav-item active">
            <Link className="nav-link " to="/Health">
              Health
            </Link>
            </li>
            <li class="nav-item active">
            <Link className="nav-link " to="/Sports">
              Sports
            </Link>
            </li>
            <li class="nav-item active">
            <Link className="nav-link " to="/Technology">
              Technology
            </Link>
            </li>
            <li class="nav-item active">
            <Link className="nav-link " to="/Business">
              Business
            </Link>
            </li>
            <li class="nav-item active">
            <Link className="nav-link " to="/science">
              Science
            </Link>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control "
              type="search"
              placeholder="Search your news........"
              value={searchWord}
              aria-label="Search"
              onChange={(e) => setSearchWord(e.target.value)}
            />
            
          </form>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
