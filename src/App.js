import logo from "./logo.svg";
import "./App.css";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"; //for bootstrap js functionality
import Navbar from "./components/Navbar";
import HomePage from "./screens/HomePage";
import { Routes, Route } from "react-router-dom";
import CartPage from "./screens/CartPage";
import Register from "./screens/Register";
import Login from "./screens/Login";
import OrdersPage from "./screens/OrdersPage";
import LandingPage from "./screens/LandingPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<OrdersPage />} />
      </Routes>
    </div>
  );
}

export default App;
