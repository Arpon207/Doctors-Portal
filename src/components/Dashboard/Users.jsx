import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "./../../axios";
import DashboardMenu from "./../shared/Dashboard/DashboardMenu";
import UsersRow from "./UsersRow";

const Users = () => {
  const { data, refetch } = useQuery(["users"], () =>
    fetchData.get("/users/all", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <DashboardMenu />
        <h1 className="text-xl lg:text-3xl font-semibold">All Users</h1>
      </div>
      <div className="bg-white rounded-xl">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead className="text-center">
              <tr>
                <th></th>
                <th>NAME</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {data?.data?.map((user, index) => (
                <UsersRow
                  key={index}
                  user={user}
                  index={index}
                  refetch={refetch}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
