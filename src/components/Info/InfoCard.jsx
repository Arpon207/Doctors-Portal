const InfoCard = ({ image, background, title, info }) => {
  return (
    <div className={`card lg:card-side ${background} shadow-xl`}>
      <figure className="pt-5 lg:pt-0  lg:pl-5">
        <img src={image} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{info}</p>
      </div>
    </div>
  );
};

export default InfoCard;
