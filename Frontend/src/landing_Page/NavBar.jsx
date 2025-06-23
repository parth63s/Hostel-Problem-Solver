import React from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function NavBar() {
   const navigate = useNavigate();

  const handleLogOut = async () => {
    const res = await axios.get('http://localhost:8080/logout', { withCredentials: true });
    if(res.status === 200) {
      console.log("LogOut successful");
      navigate('/');
    }
  }
  return (

    <nav className="navbar navbar-dark fixed-top sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <i
            className="fa-solid fa-hotel fs-3 mr-5"
            style={{ color: "white" }}
          ></i>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end text-bg-dark w-25"
          tabIndex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  User
                </a>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li>
                    <a className="dropdown-item" href="#">
                      user picture
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another Name
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <button
              type="button"
              className="btn-close btn-close-white fs-7"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" onClick={handleLogOut}>
                  Logout
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
