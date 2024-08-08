import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./componet/Navbar";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from "./componet/Home";
import Orderonline from "./componet/Orderonline";
import Storelocator from "./componet/Storelocator";
import Franchise from "./componet/Franchise";
import Story from "./componet/Story";
import Contact from "./componet/Contact";
import Signup from "./componet/Signup";
import Login from "./componet/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/orderonline" element={<Orderonline />}></Route>
          <Route path="/storelocator" element={<Storelocator />}></Route>
          <Route path="/franchise" element={<Franchise />}></Route>
          <Route path="/story" element={<Story />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/Signup" element={<Signup/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
