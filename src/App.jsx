import React from "react";
import { Route, Routes } from "react-router";
import About from "./Component/About";
import Home from "./Component/Home";
import SingleUserPage from "./Component/SingleUserPage";
import Cart from "./Component/Cart";
import Users from "./Component/Users";
import Navbar from "./Component/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<SingleUserPage />} />
      </Routes>
    </>
  );
};

export default App;
