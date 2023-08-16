import React from 'react'
import PropTypes from 'prop-types'
//import {Link} from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      {/*<Link className="navbar-brand" to="/">{props.title}</Link>*/}
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          {/*<Link className="nav-link active" aria-current="page" to="/">{props.home}</Link>*/}
            <a className="nav-link active" aria-current="page" href="#">{props.home}</a>
          </li>
          <li className="nav-item">
            {/* <Link className="nav-link" aria-current="page" to="/About">{props.about}</Link>*/}
            <a className="nav-link" aria-current="page" href="/About">{props.about}</a>
          </li>
          <li className="nav-item dropdown">
            {/*<Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </Link>*/}
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>{/*
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
  </form>*/}
<div className="d-flex">
  <div className="bg-primary rounded mx-2" onClick={() =>{props.theme('primary')}} style={{ cursor: 'pointer', height: '30px', width: '30px', display: 'inline-block' ,border: '2px solid cyan'}}></div>
  <div className="bg-success rounded mx-2" onClick={() =>{props.theme('success')}} style={{ cursor: 'pointer', height: '30px', width: '30px', display: 'inline-block' ,border: '2px solid lime'}}></div>
  <div className="bg-danger rounded mx-2" onClick={() =>{props.theme('danger')}} style={{ cursor: 'pointer', height: '30px', width: '30px', display: 'inline-block' ,border: '2px solid #ffc8dd'}}></div>
  <div className="bg-warning rounded mx-2" onClick={() =>{props.theme('warning')}} style={{ cursor: 'pointer', height: '30px', width: '30px', display: 'inline-block' ,border: '2px solid #ffff00'}}></div>
  <div className="bg-info rounded mx-2" onClick={() =>{props.theme('info')}} style={{ cursor: 'pointer', height: '30px', width: '30px', display: 'inline-block' ,border: '2px solid #00ffcc'}}></div>
</div>

  <div className="form-check form-switch my-2">
  <input className="form-check-input" style={{ cursor: 'pointer'}} onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={props.style}>{props.modeText}</label>
</div>
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {title : PropTypes.string.isRequired , home : PropTypes.string}
Navbar.defaultProps = {
    title : 'Yash',
    home : 'CBD'
}