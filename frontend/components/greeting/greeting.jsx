import React from 'react';
import { Link } from 'react-router-dom';
import SessionForm from '../session_form/session_form';

const sessionLinks = () => (
// add auth route
    <nav id="login-signup">

      <div className="eventListenr-home-container">
        <Link to="/">EventListenr()</Link>

      </div>
      <div className="session-link-container">
        <Link to="/login">LOGIN</Link>
        <Link to="/signup">SIGN UP</Link>
      </div>
    </nav>
);

// and protected route.

const personalGreeting = (currentUser, logout) => (
	<div className="header-group">
    <nav id="login-signup">
      <div className="eventListenr-home-container">
        <Link to="/">EventListenr()</Link>
      </div>
      <div className="session-link-container">
        <button className="header-button" onClick={logout}>LOG OUT</button>
      </div>
    </nav>
    <h3 className="header-name">Hi, {currentUser.username}!</h3>

	</div>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
