import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const NavBar = ({ user }) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const onClickSignOut = async () => {
    await auth.signOut();
    navigate("/sign-in");
  };
  return (
    <nav className="header_NavBars">
      <div className="app-heading">
        <Link to="/">
          <img src="/logo.png" alt="logo" className="image"></img>
        </Link>
      </div>
      <div className="AppName">FormFrenzy App</div>
      <div className="sing-in-out-box">
        {user ? (
          <div className="username-sign-out-navbar">
            <p className="logged-in-as space-before">
              {user.email.substring(0, user.email.search("@"))}
            </p>
            <button className="sign-out-button" onClick={onClickSignOut}>
              Sign Out
            </button>
          </div>
        ) : (
          <Link to="/sign-up">
            <button className="sign-out-button">Sign Up</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
