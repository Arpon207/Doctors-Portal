import { format } from "date-fns";
import axios from "axios";
import { useEffect, useState } from "react";
import TreatmentCard from "./TreatmentCard";
import BookingModal from "./BookingModal";

const AvailableTreatments = ({ date }) => {
  const [treatments, setTreatments] = useState([]);
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  useEffect(() => {
    const getTreatments = async () => {
      const { data } = await axios.get("treatments.json");
      setTreatments(data);
    };
    getTreatments();
  }, []);

  return (
    <div className="mt-20 ">
      <h1 className="text-center font-semibold text-color1 text-lg px-10">
        Available Appointments on {format(date, "MMMM dd, yyyy")}
      </h1>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10 px-5">
        {treatments.map((treatment, i) => (
          <TreatmentCard
            key={i}
            treatment={treatment}
            setSelectedTreatment={setSelectedTreatment}
          />
        ))}
      </div>
      {selectedTreatment ? (
        <BookingModal
          selectedTreatment={selectedTreatment}
          date={date}
          setSelectedTreatment={setSelectedTreatment}
        />
      ) : undefined}
    </div>
  );
};

export default AvailableTreatments;
