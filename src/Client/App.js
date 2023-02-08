import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import News from "./components/News";
import Deals from "./components/Deals";
import Videos from "./components/Videos";
import Shops from "./components/Shops";
import Nav from "./components/Nav";
import { useState } from "react";

import Footer from "./components/Footer";

function App() {
  const [v_data, setVData] = useState({});
  const [c_data, setCData] = useState({});
  const [cart_data, setCart_data] = useState({});
  const info = (info) => {
    if (info.type == "vendor") setVData(info);
    else setCData(info);
  };
  const cart_handler = (data) => {
    if (data.product_name) {
      setCart_data(data);
    }
  };
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
        <div className="pt-16">
          <Routes>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/News" element={<News />}></Route>
            <Route path="/Videos" element={<Videos />}></Route>
            <Route path="/Deals" element={<Deals get_data={info} />}></Route>
            <Route path="/Shop" element={<Shops />}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
