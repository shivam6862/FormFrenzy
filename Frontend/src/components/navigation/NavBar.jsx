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
      <div className="sing-in-out-box">
        {user ? (
          <>
            <p className="logged-in-as space-before">Email Id : {user.email}</p>
            <button className="sign-out-button" onClick={onClickSignOut}>
              Sign Out
            </button>
          </>
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

// <div className="header_info">
//   <div>
//     <Link to={`/createnewfrom`}>
//       <div>Info</div>
//     </Link>
//   </div>
//   <div>
//     <img src="/logo.png" alt="logo" className="image"></img>
//   </div>
// </div>
// <div className="header_search">
//   <div>
//     <input type="text" name="Search" placeholder="Search here...." />
//   </div>
// </div>
// <div className="header_right">
//   <div>Icons</div>
//   <div>
//     <img className="image" src="/avatar.png" alt="logo"></img>
//   </div>
// </div>
