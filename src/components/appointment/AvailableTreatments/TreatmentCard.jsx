const TreatmentCard = ({ treatment, setSelectedTreatment, bookings }) => {
  const { name, slots } = treatment;

  const exists = bookings?.find((booking) => booking.treatment == name);

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <h2 className="text-center text-lg font-semibold text-color1 ">
          {name}
        </h2>
        {slots.length > 0 ? (
          <>
            {exists ? (
              <>
                <p>Appointment set at</p>
                <p>{exists?.slot}</p>
              </>
            ) : (
              <>
                <p className="text-sm">{slots[0]}</p>
                <p className="text-sm">
                  {slots.length} {slots.length < 2 ? "SPACE" : "SPACES"}{" "}
                  AVAILABLE
                </p>
              </>
            )}
          </>
        ) : (
          <>
            <p className="text-red text-sm">NO SLOT AVAILABLE</p>
            <p className="text-red text-sm">TRY AGAIN TOMORROW</p>
          </>
        )}
        <div className="card-actions justify-center">
          {exists ? (
            <button className="btn border-none bg-red">
              Cancel Appointment
            </button>
          ) : (
            <label
              htmlFor="booking-modal"
              className="btn border-none bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]"
              onClick={() => {
                setSelectedTreatment(treatment);
              }}
              disabled={slots.length < 1}
            >
              BOOK APPOINTMENT
            </label>
          )}
        </div>
      </div>
    </div>
  );
};

export default TreatmentCard;
