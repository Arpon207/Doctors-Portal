import Banner from "../components/home/Banner/Banner";
import Info from "../components/home/Info/Info";
import Services from "../components/home/Services/Services";
import MakeAppointment from "../components/home/MakeAppointment/MakeAppointment";
import Testimonials from "../components/home/Testimonials/Testimonials";
import HomeContact from "../components/home/HomeContact/HomeContact";
import Footer from "./../components/shared/Footer/Footer";

const Home = () => (
  <>
    <Banner />
    <Info />
    <Services />
    <MakeAppointment />
    <Testimonials />
    <HomeContact />
    <Footer />
  </>
);

export default Home;
