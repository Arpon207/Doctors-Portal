import card1 from "../../assets/icons/clock.svg";
import card2 from "../../assets/icons/marker.svg";
import card3 from "../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5  px-5">
      <InfoCard
        image={card1}
        background={"bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]"}
      />
      <InfoCard image={card2} background={"bg-[#3A4256] text-white"} />
      <InfoCard
        image={card3}
        background={"bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]"}
      />
    </div>
  );
};

export default Info;
