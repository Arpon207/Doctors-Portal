import bannerImage from "../../../assets/images/chair.png";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-[url('/src/assets/images/bg.png')]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={bannerImage} className="lg:w-6/12 rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold text-color2">
            Your New Smile Starts <br /> Here
          </h1>
          <p className="py-6">
            A community in which all people achieve their full potential for
            health and well-being across the lifespan. We work to be trusted by
            patients, a valued partner in the community & creators of positive.
          </p>
          <button className="btn bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] border-none">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
