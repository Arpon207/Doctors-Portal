import logo from "../../assets/icons/quote.svg";
import testimonials from "../../constants/testimonials";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <div className="p-5 lg:px-20 my-20">
      <div className="flex justify-between">
        <div className="mt-5">
          <h3 className="text-2xl text-color1 font-medium">Testimonial</h3>
          <h1 className="text-4xl">What our patients says</h1>
        </div>
        <div className="flex justify-end w-2/4 lg:w-2/12">
          <img className=" " src={logo} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
        {testimonials.map((testimonial, i) => (
          <TestimonialCard key={i} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
