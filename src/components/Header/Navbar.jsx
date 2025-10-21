import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../../assets/user.png";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("Logged Out successfully.");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex items-center justify-between w-11/12 mx-auto">
      <div>{user && user.email}</div>
      <nav className="space-x-2 md:space-x-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </nav>
      <div className="login-btn flex items-center gap-2">
        <img className="w-[30px]" src={userIcon} alt="" />
        {user ? (
          <button onClick={handleLogOut} className="btn btn-primary">
            LogOut
          </button>
        ) : (
          <Link to={"/auth/login"} className="btn btn-primary md:px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
