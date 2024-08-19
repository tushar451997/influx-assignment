import React from 'react';
import "./Navbar.css"
import HomeSvg from "../../Assets/Home.svg"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <div className="container-fluid ">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <img src={HomeSvg} alt="Home" width={20} height={20} /> 
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className=" dropdown mx-2">
              <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                PLACEHOLDER TITLE
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Home 1</a>
                <a className="dropdown-item" href="#">Home 2</a>
              </div>
            </li>
            <li className=" dropdown mx-2">
              <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 PLACEHOLDER TITLE
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">About 1</a>
                <a className="dropdown-item" href="#">About 2</a>
              </div>
            </li>
            <li className=" dropdown mx-2">
              <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 PLACEHOLDER TITLE
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Contact 1</a>
                <a className="dropdown-item" href="#">Contact 2</a>
              </div>
            </li>
            <li className=" mx-2">
              <a className="nav-link signin-btn text-light" href="#" style={{fontSize:'15px'}}>
              <i class="fas fa-user"></i>
               <span> SIGN IN</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;