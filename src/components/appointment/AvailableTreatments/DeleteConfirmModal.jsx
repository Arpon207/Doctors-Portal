import React from "react";
import { fetchData } from "../../../axios";

const DeleteConfirmModal = ({ deletionId, refetch }) => {
  const handleDelete = () => {
    fetchData
      .delete(`/bookings/${deletionId}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then(({ data }) => {
        if (data) {
          refetch();
        }
      });
  };
  return (
    <div>
      <input
        type="checkbox"
        id="appointment-delete-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">
            Are you sure you want cancel your appointment ?
          </h3>
          <div className="modal-action flex justify-center">
            <label htmlFor="appointment-delete-modal" className="btn">
              No
            </label>
            <label
              onClick={() => handleDelete()}
              htmlFor="appointment-delete-modal"
              className="btn btn-error text-white"
            >
              Yes
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
