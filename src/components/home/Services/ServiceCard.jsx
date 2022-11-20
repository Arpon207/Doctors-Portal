import React from "react";

const ServiceCard = ({ image, title }) => {
  return (
    <div className="card bg-base-100 shadow-2xl text-center">
      <figure className="pt-10">
        <img src={image} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="text-center text-xl font-medium text-color2">{title}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum et
          neque quaerat tempora velit accusamus asperiores quod voluptas.
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
