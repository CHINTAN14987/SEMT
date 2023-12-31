import React from "react";
import { Route, Routes } from "react-router-dom";
import Aboutus from "../components/pages/AboutUs";
import ContactUs from "../components/pages/ContactUs";
import Home from "../components/pages/Home";
import Layout from "../Layout/Layout";
import MockTest from "../components/pages/MockTest";

const Navigations = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/mock-test" element={<MockTest />} />
        {/* <Route path="/services" element={<Services />} /> */}
      </Route>
    </Routes>
  );
};

export default Navigations;
