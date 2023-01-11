import Pizza from "../components/Pizza";
// import pizzas from "../pizzadata";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPizzas } from "../redux/actions/pizzaActions";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Footer from "../components/Footer";
import "../components/Footer.css"
import Navbar from "../components/Navbar";

const HomePage = () => {
  const dispatch = useDispatch();

  const pizzasState = useSelector((state) => state.getAllPizzasReducer);
  const { pizzas, error, loading } = pizzasState;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);

  return (
    <>
    <Navbar/>
    <div>
      <div className="row justify-content-center">
        {loading ? (
          <Loading/>
        ) : error ? (
         <Error errormsg="Something went wrong"/>
        ) : (
          pizzas.map((pizza) => {
            return (
              <div className="col-md-4 m-1"   key={pizza._id}>
                <div>
                  <Pizza pizza={pizza} />
                </div>
              </div>
            );
          })
        )}
      </div>
      <Footer/>
    </div>
    </>
  );
};

export default HomePage;
