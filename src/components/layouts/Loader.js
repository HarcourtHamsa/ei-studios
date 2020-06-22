import React from 'react';
import {ClipLoader} from 'react-spinners';
import './loader.css';

const Loader = () => {
  return (
    <div className="row">
      <div className="loader">
        <ClipLoader />
      </div>
    </div>
  );
};

export default Loader;
