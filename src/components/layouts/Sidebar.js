import React, {useState} from 'react';
import Modal from './Modal';
import {
  RiFacebookBoxLine,
  RiInstagramLine,
  RiTwitterLine,
} from 'react-icons/ri';

import './sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState (false);

  const openModal = () => {
    setIsOpen (true);
  };

  const closeModal = () => {
    setIsOpen (false);
  };

  return (
    <React.Fragment>
      {isOpen ? <Modal closeModal={closeModal} /> : null}

      <div className="sidebar" id="sidebar">
        <div className="">
          <div className="logo" />
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li onClick={openModal}>Place bookings</li>
          </ul>
        </div>

        <div className="fixed-bottom icons">
          <RiFacebookBoxLine size="20" />
          <RiInstagramLine size="20" />
          <RiTwitterLine size="20" />
        </div>
      </div>

    </React.Fragment>
  );
};

export default Sidebar;
