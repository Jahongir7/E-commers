import Lead from "./Components/Lead";
import Services from "./Components/services";
import Auth from "./Components/Auth";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Carusel from "./Components/Carusel";

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
