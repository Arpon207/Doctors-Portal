import { Routes, Route } from "react-router-dom";
import Home from "./../pages/Home";
import Appointment from "./../pages/Appointment";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="/reviews" element={<p>reviews</p>} />
      <Route path="/contact-us" element={<p>contact-us</p>} />
      <Route path="/about" element={<p>about</p>} />
      <Route path="/login" element={<p>login</p>} />
    </Routes>
  );
};

export default Router;
