import { useEffect, useState } from "react";
import { Calendar } from "react-date-range";
import { format } from "date-fns";
import { useQuery } from "@tanstack/react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./../../Firebase/firebase.init";
import { fetchData } from "./../../axios";
import DashboardMenu from "../shared/Dashboard/DashboardMenu";
import useBookings from "./../../hooks/useBookings";
import Loading from "./../Loading/Loading";
import { useNavigate } from "react-router-dom";
const MyAppointments = () => {
  const [user] = useAuthState(auth);
  const [date, setDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const formatedDate = format(date, "MMMM dd, yyyy");

  const { bookings } = useBookings({ formatedDate, user });

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <DashboardMenu />
        <h1 className="text-xl lg:text-3xl font-semibold">My Appointment</h1>
        <div className="relative">
          <button className="btn btn-outline" onClick={() => setIsOpen(true)}>
            {format(date, "PP")}
          </button>
          {isOpen ? (
            <div className="absolute right-0 z-20">
              <Calendar
                className="shadow-xl rounded-lg"
                minDate={new Date()}
                onChange={(item) => {
                  setDate(item);
                  setIsOpen(false);
                }}
                date={date}
              />
            </div>
          ) : undefined}
        </div>
      </div>
      <div className="bg-white rounded-xl">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>NAME</th>
                <th>SERVICE</th>
                <th className="text-center">TIME</th>
                <th className="text-center">Payment</th>
              </tr>
            </thead>
            <tbody>
              {bookings?.data.map(
                (
                  {
                    _id,
                    patientName,
                    treatment,
                    date,
                    paid,
                    transactionId,
                    slot,
                  },
                  index
                ) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{patientName}</td>
                    <td>{treatment}</td>
                    <td className="text-center">
                      {date}, {slot}{" "}
                    </td>
                    <td className="text-center ">
                      {!paid ? (
                        <button
                          className="btn"
                          onClick={() => navigate(`/dashboard/payment/${_id}`)}
                        >
                          Pay
                        </button>
                      ) : (
                        <>
                          <p className="text-success">Paid</p>
                          <p>
                            Transaction_id:{" "}
                            <span className="text-success">
                              {transactionId}
                            </span>{" "}
                          </p>
                        </>
                      )}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyAppointments;
