import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import bannerImage from "../../../assets/images/chair.png";
import { Calendar } from "react-date-range";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div className="hero min-h-screen bg-[url('/src/assets/images/bg.png')]">
      <div className="hero-content flex-col lg:flex-row-reverse gap-24">
        <img src={bannerImage} className="lg:w-2/5 rounded-lg shadow-2xl" />
        <div>
          <Calendar
            className="shadow-xl rounded-lg"
            minDate={new Date()}
            onChange={(item) => setDate(item)}
            date={date}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
