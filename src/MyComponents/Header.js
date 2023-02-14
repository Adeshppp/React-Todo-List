import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";
import {About} from "../MyComponents/About"

export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/About">About</Link>
              </li>
            </ul>
            {props.searchBar? <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>:""}
          </div>
        </div>
      </nav>
  )
}

//if title is not specified then below function will take care of title
Header.defaultProps={
    title:"Your Title Here",
    searchBar: true
}

//only strings are allowed as Link title
Header.protoTypes = {
    title : PropTypes.string,
    searchBar: PropTypes.bool.isRequired
}
