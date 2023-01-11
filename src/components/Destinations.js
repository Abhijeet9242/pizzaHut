import "./Destinations.css";
import img1 from "../images/destination_Image/img1.jpg";
import img2 from "../images/destination_Image/img2.jpg";




const Destinations = () => {
    return (
      <section className="destinations">
        <h3 className="itemtext" id="itemhead">
          Our Most Popular Deals
        </h3>
        <div className="grid">
          <div>
            <img src={img1} alt="destination-1" />
            <h3 style={{fontSize:"23px",fontWeight:"bold"}}>Super Saver Meal </h3>
           
          </div>
  
          <div>
            <img src={img2} alt="destination-2" />
            <h3 style={{fontSize:"23px",fontWeight:"bold"}}>Super Saver Meal </h3>
           
          </div>
  
          
        </div>
      </section>
    );
  };
  
  export default Destinations;
  