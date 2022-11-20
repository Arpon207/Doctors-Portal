const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="px-8 rounded-3xl shadow-lg">
      <p className="my-10 ">{testimonial.testimonial}</p>
      <div className="flex gap-5 pb-8 items-center">
        <div className="avatar">
          <div className="w-20 rounded-full ring ring-color1 ring-offset-base-100 ring-offset-2">
            <img src={testimonial.avatar} />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-medium">{testimonial.name}</h3>
          <p>{testimonial.address}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
