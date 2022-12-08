import { Routes, Route } from "react-router-dom";
import Home from "./../pages/Home";
import Appointment from "./../pages/Appointment";
import Login from "../pages/Login";
import Signup from "./../pages/Signup";
import RequireAuth from "../pages/RequireAuth";
import Dashboard from "../pages/Dashboard";
import MyAppointments from "../components/Dashboard/MyAppointments";
import MyReviews from "./../components/Dashboard/MyReviews";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/appointment"
        element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        }
      />
      <Route path="/reviews" element={<p>reviews</p>} />
      <Route path="/contact-us" element={<p>contact-us</p>} />
      <Route path="/about" element={<p>about</p>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      >
        <Route index element={<MyAppointments />} />
        <Route path="my-reviews" element={<MyReviews />} />
      </Route>
    </Routes>
  );
};

export default Router;
