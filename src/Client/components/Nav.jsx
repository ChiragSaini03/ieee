import React from "react";
import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <div className="NavBar p-2 bg-gray-50 border-2 fixed w-full flex flex-col md:flex-row z-40">
      <NavLink to="/home" className="Nav_Logo m-3 ">
        Door Step
      </NavLink>
      <div className="flex md:ml-auto ml-0 md:mr-auto mr-0 w-5/6 align-middle">
        <div className="flex flex-col md:flex-row flex-wrap md:ml-auto ml-0 align-middle">
        <NavLink to="/Home" className="Login m-3 mx-6 hover:text-red-500">
            Home
          </NavLink>
          <NavLink to="/News" className="Login m-3 mx-6 hover:text-red-500">
            News
          </NavLink>
          <NavLink to="/Videos" className="Login m-3 mx-6 hover:text-red-500">
            Videos
          </NavLink>
          <NavLink to="/Deals" className="Login m-3 mx-6 hover:text-red-500">
            Deals
          </NavLink>
          <NavLink to="/Shop" className="Cart m-3 mx-6 hover:text-red-500">
            Shop
          </NavLink>
          <select className="mx-6" name="" id="">
            <option value="">EN</option>
            <option value="">HN</option>
            <option value="">DE</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Nav;
