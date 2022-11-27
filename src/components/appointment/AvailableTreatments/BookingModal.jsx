import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./../../../Firebase/firebase.init";

const BookingModal = ({ selectedTreatment, setSelectedTreatment, date }) => {
  const [user] = useAuthState(auth);
  const { title, slots } = selectedTreatment;
  const onSubmit = (e) => {
    e.preventDefault();
    const booking = {
      treatment: title,
      date: date,
      slot: e.target.slot.value,
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
    };
    setSelectedTreatment(null);
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">{title}</h3>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="date"
              value={format(date, "MMMM dd, yyyy")}
              className="input input-bordered w-full mt-10 "
              disabled
            />
            <select name="slot" className="select select-bordered w-full mt-5">
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              value={user?.displayName || ""}
              placeholder="Full Name"
              className="input input-bordered w-full mt-5 "
              disabled
            />
            <input
              type="text"
              name="email"
              value={user?.email || ""}
              placeholder="Email"
              className="input input-bordered w-full mt-5 "
              disabled
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full mt-5 "
            />
            <input type="submit" className="btn w-full mt-5" value={"SUBMIT"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
