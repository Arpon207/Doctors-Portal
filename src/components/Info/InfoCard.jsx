const InfoCard = ({ image, background }) => {
  return (
    <div className={`card lg:card-side ${background} shadow-xl`}>
      <figure className="pt-5 lg:pt-0  lg:pl-5">
        <img src={image} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default InfoCard;
