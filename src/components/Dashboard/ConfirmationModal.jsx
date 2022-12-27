import { toast } from "react-toastify";
import { fetchData } from "./../../axios";

const ConfirmationModal = ({ selectedDoctor, refetch, setSelectedDoctor }) => {
  const handleDelete = (id) => {
    fetchData
      .delete(`/doctors/delete/${id}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then(({ data }) => {
        if (data.deletedCount > 0) {
          toast.success("Doctor removed successfully.");
          refetch();
        }
      });
  };
  return (
    <div className="z-50">
      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle bg-transparent">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">
            Are you sure you want remove{" "}
            <strong>{selectedDoctor.name} ?</strong>
          </h3>
          <div className="modal-action flex justify-center">
            <label htmlFor="confirmation-modal" className="btn">
              Cancel
            </label>
            <label
              onClick={() => handleDelete(selectedDoctor._id)}
              htmlFor="confirmation-modal"
              className="btn btn-error text-white"
            >
              Remove
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
