import Banner from "../../components/Banner/Banner";
import HomeContact from "../../components/HomeContact/HomeContact";
import Info from "../../components/Info/Info";
import MakeAppointment from "../../components/MakeAppointment/MakeAppointment";
import Services from "../../components/Services/Services";
import Testimonials from "../../components/Testimonials/Testimonials";

const Home = () => (
  <>
    <Banner />
    <Info />
    <Services />
    <MakeAppointment />
    <Testimonials />
    <HomeContact />
  </>
);

export default Home;
