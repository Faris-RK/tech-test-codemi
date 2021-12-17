/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LogoutIcon from '@mui/icons-material/Logout';
import Logo from '../../images/logo.png';
import Avatar from '../../images/avatar.jpg';
import ArrowDown from '../../images/arrowDown.png';
import './index.css';

export default function Navbar() {
  const [drop, setDrop] = useState(false);

  const dropDown = () => {
    if (drop === false) {
      setDrop(true);
    } else {
      setDrop(false);
    }
  };
  return (
    <div className="navbar-container">
      <nav>
        <Link to="/">
          <img className="logo" src={Logo} alt="logo" />
        </Link>
        <div className="navbar-widget">
          <NotificationsIcon fontSize="large" color="action" cursor="pointer" />
          <div className="profile-dropdown">
            <div className="onclick-container" onClick={dropDown}>
              <img src={Avatar} className="avatar" alt="avatar" />
              <img src={ArrowDown} className="arrow-down" alt="arrow-down" />
            </div>
            <div
              className={drop === true ? 'drop-down-menu' : 'drop-down-none'}
            >
              <div className="section-drop-down-menu">
                <div className="account">
                  <AssignmentIndIcon fontSize="30px" />
                  Account{' '}
                </div>
                <div className="sign-out">
                  <LogoutIcon fontSize="30px" /> Sign Out
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
