import doctor from "../../assets/images/doctor-small.png";

const MakeAppointment = () => {
  return (
    <div className="flex items-center bg-[url('/src/assets/images/appointment.png')] lg:px-32">
      <div>
        <img
          className=" mt-[-80px] mx-auto hidden lg:block"
          src={doctor}
          alt=""
        />
      </div>
      <div className="lg:w-2/4 p-10 lg:p-0">
        <h3 className="text-2xl text-color1">Appointment</h3>
        <h1 className="text-4xl font-medium text-white mt-2">
          Make an appointment today
        </h1>
        <p className="text-white my-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iusto
          maiores animi tempora, quas eaque, eum fugiat quos fuga, tempore
          laborum soluta repellendus consectetur error optio quis porro numquam!
          Necessitatibus quam reiciendis, cum obcaecati adipisci delectus non
          voluptates libero tempora reprehenderit rerum, tenetur eveniet minima
          saepe optio natus quidem fugit.
        </p>
        <button className="btn bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] border-none">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default MakeAppointment;
