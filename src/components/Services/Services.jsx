import ServiceCard from "./ServiceCard";
import service1 from "../../assets/images/fluoride.png";
import service2 from "../../assets/images/cavity.png";
import service3 from "../../assets/images/whitening.png";

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
    </div>
  );
};

export default Services;
