import ServiceCard from "./ServiceCard";
import service1 from "../../assets/images/fluoride.png";
import service2 from "../../assets/images/cavity.png";
import service3 from "../../assets/images/whitening.png";
import treatment from "../../assets/images/treatment.png";

const Services = () => {
  return (
    <div className="my-20 text-center px-5">
      <h3 className="text-2xl font-semibold text-color1">OUR SERVICES</h3>
      <h1 className="text-3xl">Services We Provide</h1>
      <div className="grid grid-col-1 lg:grid-cols-3 gap-5 mt-14">
        <ServiceCard image={service1} title={"Flouride Treatment"} />
        <ServiceCard image={service2} title={"Cavity Filling"} />
        <ServiceCard image={service3} title={"Teeth Whitening"} />
      </div>
      <div className="hero min-h-screen lg:w-3/4 mx-auto mt-20">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse lg:gap-20">
          <div className="text-left">
            <h1 className="text-4xl lg:text-5xl font-bold text-color2">
              Exceptional Dental
              <br /> Care, on Your Terms
            </h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              nesciunt eligendi eius laborum temporibus commodi odit architecto
              aut voluptatum? Aspernatur, facere labore. Quis odio doloremque
              quod incidunt temporibus omnis maiores modi voluptate assumenda
              distinctio eius nihil laboriosam molestiae eaque earum et iure
              veniam quae eos fuga pariatur, dignissimos suscipit! Quasi.
            </p>
            <button className="btn bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] border-none">
              Get Started
            </button>
          </div>
          <img src={treatment} className="lg:w-6/12 rounded-lg shadow-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Services;
