import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid ">
        <Link class="navbar-brand" to ='/home'>Car Servicing </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto">
            <Link class="nav-link active" aria-current="page"to='/home'>Home</Link>
            <Link class="nav-link" to ='/about'>About Us</Link>
            <Link class="nav-link" to ='/dashboard/:id'>Dashboard</Link>
            <Link class="nav-link" to='/contact'>Contact Us</Link>
            <Link class="nav-link" to='/admin'>Admin</Link>
            <Link class="nav-link" to='/login'>Login</Link>
      </div>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;