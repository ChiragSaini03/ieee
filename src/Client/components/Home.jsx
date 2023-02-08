import React from "react";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const cart_handler = (data) => {
    if (data.product_name) {
      alert("First LogIn / Sgnup for placing order");
      navigate("/Login");
    }
  };
  return (
    <div className="Home">
      <br></br>
      home
    </div>
  );
};

export default Home;
