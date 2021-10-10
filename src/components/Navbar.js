import React from 'react'
import PropTypes from 'prop-types';

export default function Navbar(props) {
    return (
        <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
            <a className="navbar-brand" href="#">{props.title}</a>
            <div className=" navbar">
                <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                    {/* <li class="nav-item mr-5">
                        <a class="nav-link" href="https://github.com/Akshay0777/textutils" target="_blank"><i class="fab fa-github">Source</i></a>
                    </li> */}
                </ul>
                <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark':'light'}`}>
                <a class="nav-link" href="https://github.com/Akshay0777/textutils" target="_blank"><i class="fab fa-github">Source</i></a>
                </div>
                <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark':'light'}`}>
                    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                </div>
            </div>
            </div>
        </nav>
        </div>
    )
}

Navbar.propTypes = {title : PropTypes.string}

Navbar.defaultProps = {title : "set here title"}