import React, { useState } from "react";
import { fetchData } from "./../../axios";
import { useQuery } from "@tanstack/react-query";
import DoctorsRow from "./DoctorsRow";
import DashboardMenu from "../shared/Dashboard/DashboardMenu";
import ConfirmationModal from "./ConfirmationModal";

const ManageDoctors = () => {
  const [selectedDoctor, setSelectedDoctor] = useState({});
  const { data, refetch } = useQuery(["users"], () =>
    fetchData.get("/doctors/all", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
  );

  return (
    <>
      <div>
        <div className="flex justify-between items-center mb-10">
          <DashboardMenu />
          <h1 className="text-xl lg:text-3xl font-semibold">All Doctors</h1>
        </div>
        <div className="bg-white rounded-xl">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead className="text-center">
                <tr>
                  <th>Image</th>
                  <th>NAME</th>
                  <th>Email</th>
                  <th>Specialty</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {data?.data?.map((doctor, index) => (
                  <DoctorsRow
                    key={index}
                    doctor={doctor}
                    index={index}
                    refetch={refetch}
                    setSelectedDoctor={setSelectedDoctor}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {selectedDoctor ? (
        <ConfirmationModal
          selectedDoctor={selectedDoctor}
          setSelectedDoctor={setSelectedDoctor}
          refetch={refetch}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default ManageDoctors;
