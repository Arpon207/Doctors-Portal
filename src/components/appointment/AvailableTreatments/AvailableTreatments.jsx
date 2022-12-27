import { format } from "date-fns";
import { useEffect, useState } from "react";
import TreatmentCard from "./TreatmentCard";
import BookingModal from "./BookingModal";

import { useQuery } from "@tanstack/react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./../../../Firebase/firebase.init";
import { fetchData } from "../../../axios";
import BookingSucessModal from "./BookingSucessModal";
import useBookings from "./../../../hooks/useBookings";
import DeleteConfirmModal from "./DeleteConfirmModal";

const AvailableTreatments = ({ date }) => {
  const [user] = useAuthState(auth);
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const [booked, setBooked] = useState(false);

  const [deletionId, setDeletionId] = useState("");

  const formatedDate = format(date, "MMMM dd, yyyy");

  const getTreatments = () => {
    return fetchData.get(
      `/treatments/available?date=${format(date, "MMMM dd, yyyy")}`
    );
  };

  useEffect(() => {
    if (booked) {
      document.getElementById("booking-success-modal").checked = true;
    }
  }, [booked]);

  const { data } = useQuery(["treatments", date], getTreatments);

  const { bookings, refetch } = useBookings({ formatedDate, user });

  return (
    <div className="mt-20 ">
      <h1 className="text-center font-semibold text-color1 text-lg px-10">
        Available Appointments on {format(date, "MMMM dd, yyyy")}
      </h1>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10 px-5">
        {data?.data.map((treatment, i) => (
          <TreatmentCard
            key={i}
            treatment={treatment}
            setSelectedTreatment={setSelectedTreatment}
            bookings={bookings?.data}
            setDeletionId={setDeletionId}
          />
        ))}
      </div>
      {selectedTreatment ? (
        <BookingModal
          selectedTreatment={selectedTreatment}
          date={date}
          setSelectedTreatment={setSelectedTreatment}
          refetch={refetch}
          setBooked={setBooked}
        />
      ) : undefined}
      {booked ? (
        <BookingSucessModal
          date={format(date, "MMMM dd, yyyy")}
          slot={booked.slot}
          treatment={booked.treatment}
        />
      ) : undefined}
      {deletionId ? (
        <DeleteConfirmModal deletionId={deletionId} refetch={refetch} />
      ) : undefined}
    </div>
  );
};

export default AvailableTreatments;
