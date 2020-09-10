import React from 'react';
import Gallery from 'react-photo-gallery';
import {photos} from '../../photo';

import {FaFacebook, FaTwitter, FaInstagramSquare} from 'react-icons/fa';

import './main.css';

const Main = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-white mb-3 p-3 small">
        <a class="navbar-brand" href="/">Logo</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">About</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/">Team</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/">Portfolio</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <Gallery photos={photos} />

      <div className="icons text-center mt-1">
        <FaFacebook size="20" /><br />
        <FaInstagramSquare size="20" /><br />
        <FaTwitter size="20" />
      </div>
    </div>
  );
};

export default Main;
