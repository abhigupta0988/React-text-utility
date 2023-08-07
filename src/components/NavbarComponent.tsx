import React from 'react';
import Switch from './Switch';
import { Link } from 'react-router-dom';

export default function NavbarComponent(props: NavbarComponentProps) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

type NavbarComponentProps = {
  title: string;
  toggleMode?: string;
};

NavbarComponent.defaultProps = {
  title: 'My Title',
  toggleMode: 'light'
};
