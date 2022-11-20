import { useState } from "react";
import AppointmentBanner from "../components/appointment/AppointmentBanner/AppointmentBanner";
import AvailableTreatments from "../components/appointment/AvailableTreatments/AvailableTreatments";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <AppointmentBanner date={date} setDate={setDate} />
      <AvailableTreatments date={date} />
    </div>
  );
};

export default Appointment;
