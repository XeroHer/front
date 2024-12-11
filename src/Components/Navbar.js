import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; // Import Link for better routing

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate(); // Hook to navigate to a new route

  // Handle input change to update search query
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle form submission (search)
  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submit
    if (searchQuery.trim()) {
      // Redirect to a search results page, passing the query as a URL parameter
      navigate(`/search?query=${searchQuery}`);
    } else {
      // Optional: provide feedback if search query is empty
      alert("Please enter a search term.");
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            FOOTBALL
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Watch">
                  Home
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Football Data
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/">
                      Add Data
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/UpdateTeam">
                      Update Data
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/DeleteData">
                      Delete Data
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/ShowTotal">
                  Show
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Display">
                  Display
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Result">
                  Result
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchQuery} // Bind the input field to the state
                onChange={handleInputChange} // Handle input changes
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
