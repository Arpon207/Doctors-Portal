import React from "react";

const BookingSucessModal = ({ date, slot, treatment }) => {
  return (
    <div>
      <input
        type="checkbox"
        id="booking-success-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-success-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="p-10">
            <p className="text-xl">
              Appointment is set for{" "}
              <strong className="text-color1">{treatment}</strong> is set on{" "}
              {date} at {slot}.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSucessModal;
