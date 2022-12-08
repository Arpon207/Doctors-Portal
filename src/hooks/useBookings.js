import { fetchData } from "../axios";
import { useQuery } from "@tanstack/react-query";
import { auth } from "./../Firebase/firebase.init";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { signOut } from "firebase/auth";

const useBookings = ({ formatedDate, user }) => {
  const navigate = useNavigate();

  const getBookings = () => {
    return fetchData.get(
      `/bookings?date=${formatedDate}&email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
  };
  const {
    data: bookings,
    refetch,
    isLoading,
    error,
  } = useQuery(["bookings", formatedDate, user], getBookings);

  useEffect(() => {
    if (error?.response?.status === 403 || error?.response?.status === 401) {
      signOut(auth);
      navigate("/");
    }
  }, [error]);

  return { bookings, refetch, isLoading };
};

export default useBookings;
