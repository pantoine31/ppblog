import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top">
      <div className="container">
        {/* logo here*/}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src="/imgs/LOGO.png" alt="Logo" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
          The Pantoine's Project
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Αρχική</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">Σχετικά με Εμένα</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/proff">Επαγγελματικό Προφίλ</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Επικοινωνία</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
