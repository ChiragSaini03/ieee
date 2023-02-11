import React from "react";
import { NavLink } from "react-router-dom";

const iconPath = process.env.PUBLIC_URL;

function Nav() {
  return (
    <div className="NavBar p-2 bg-gradient-to-r from-gray-500 to-gray-50 border-2 fixed w-full flex flex-col md:flex-row z-40 text-[27px] m-auto">
      <NavLink to="/home" className="Nav_Logo m-3 flex flex-row  ">
        <img src={iconPath+"logo.jpeg"} alt="E SPorts" className="w-20  rounded-full"/>
        <h1 className="m-auto">GamersHub</h1>
      </NavLink>
      <div className="flex md:ml-auto ml-0 md:mr-auto mr-0 w-5/6 align-middle">
        <div className="flex flex-col md:flex-row flex-wrap md:ml-auto ml-0 align-middle">
        <NavLink to="/Home" className="Login m-auto mx-6 hover:text-red-500">
            Home
          </NavLink>
          <NavLink to="/News" className="Login m-auto mx-6 hover:text-red-500">
            News
          </NavLink>
          <NavLink to="/Videos" className="Login m-auto mx-6 hover:text-red-500">
            Videos
          </NavLink>
          <NavLink to="/Deals" className="Login m-auto mx-6 hover:text-red-500">
            Deals
          </NavLink>
          <NavLink to="/Shop" className="Cart m-auto mx-6 hover:text-red-500">
            Shop
          </NavLink>
          <select className="mx-6 bg-gray-50" name="" id="">
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
