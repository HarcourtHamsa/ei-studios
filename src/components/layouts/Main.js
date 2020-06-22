import React from 'react';
import Gallery from 'react-photo-gallery';
import {photos} from '../../photo';

import './main.css';

const Main = () => {
  return (
    <div>
      <div className="center-text">
        <h3>EI STUDIOS</h3>
      </div>

      <Gallery photos={photos} />
    </div>
  );
};

export default Main;
