import Lead from "./components/Lead";
import Services from "./components/services";
import Auth from "./components/Auth";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Carusel from "./components/Carusel";

const AllComponents = () => {
  return (
    <div>
      <Navbar />
      <Lead />
      <Services />
      <Carusel />
      <Auth />
      <Footer />
    </div>
  );
};


export default AllComponents;
