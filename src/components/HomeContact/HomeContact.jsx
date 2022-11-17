const HomeContact = () => {
  return (
    <div className="bg-[url('/src/assets/images/appointment.png')] flex justify-center items-center py-20">
      <form className="lg:w-2/6">
        <h3 className="text-2xl text-center text-color1 font-medium">
          Contact Us
        </h3>
        <h1 className="text-3xl text-white text-center mt-1">
          Stay connected with us
        </h1>
        <div
          className="flex flex-col items-center gap-5 mt-10
        "
        >
          <input
            type="text"
            placeholder="Email Address"
            className="input w-full max-w-xs lg:max-w-none"
          />
          <input
            type="text"
            placeholder="Subject"
            className="input w-full max-w-xs lg:max-w-none"
          />
          <textarea
            className="textarea text-lg w-full max-w-xs lg:max-w-none resize-none"
            placeholder="Your message"
          ></textarea>
          <input
            type="submit"
            value="Submit"
            className="btn bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] px-10"
          />
        </div>
      </form>
    </div>
  );
};

export default HomeContact;
