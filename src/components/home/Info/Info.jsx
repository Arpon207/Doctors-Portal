import card1 from "../../../assets/icons/clock.svg";
import card2 from "../../../assets/icons/marker.svg";
import card3 from "../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5  px-5">
      <InfoCard
        image={card1}
        background={"bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]"}
        title={"Opening Hours"}
        info={"Sunday-Saturday, 8am to 12pm"}
      />
      <InfoCard
        image={card2}
        background={"bg-[#3A4256] text-white"}
        title={"Visit our location"}
        info={"Brooklyn, NY 10036, United States"}
      />
      <InfoCard
        image={card3}
        background={"bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]"}
        title={"Contact us now"}
        info={"+000 123 456789"}
      />
    </div>
  );
};

export default Info;
