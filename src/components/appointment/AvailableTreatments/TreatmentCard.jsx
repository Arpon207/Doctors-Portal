const TreatmentCard = ({ treatment, setSelectedTreatment }) => {
  const { title, slots } = treatment;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <h2 className="text-center text-lg font-semibold text-color1 ">
          {title}
        </h2>
        {slots.length > 0 ? (
          <>
            <p className="text-sm">{slots[0]}</p>
            <p className="text-sm">
              {slots.length} {slots.length < 2 ? "SPACE" : "SPACES"} AVAILABLE
            </p>
          </>
        ) : (
          <>
            <p className="text-red text-sm">NO SLOT AVAILABLE</p>
            <p className="text-red text-sm">TRY AGAIN TOMORROW</p>
          </>
        )}
        <div className="card-actions justify-center">
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
        </div>
      </div>
    </div>
  );
};

export default TreatmentCard;
