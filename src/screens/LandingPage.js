
import MyCarousel from "../components/MyCarousel"
import Navbar1 from "../components/Navbar1";
import Footer from "../components/Footer";
import "../components/MyCarousel.css";
import Destinations from "../components/Destinations";

const LandingPage = () => {
    return (
        <>
        <Navbar1/>
        <MyCarousel/>
       <img className="bannerimg" src="https://bigbitepizza.ca/wp-content/uploads/2021/04/banner-1.jpg" alt=""/>
       <Destinations/>
        <Footer/>
      </>
    )
}

export default LandingPage