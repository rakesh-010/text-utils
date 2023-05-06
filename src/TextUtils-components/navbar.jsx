import React from "react";
import { Link } from "react-router-dom";

function navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <strong>TEXTUTILS</strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsable"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsable">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleChange} />
              <label className="form-check-label" >
                Enable {props.mode==='dark'?'Light':'Dark'} Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default navbar;
