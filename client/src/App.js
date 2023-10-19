

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

//import { Products } from "./components/Products";

//import Footer from "./components/Footer";

import Home from "./pages/Home";


//import Announcements from "./components/Announcement";
//import Slider from "./components/Slider";
//import Navbar from "./components/Navbar";
//import Categories from "./components/Categories";
//import { Newsletter } from "./components/Newsletter";
//import { Products } from "./components/Products";

import { ProductList } from "./pages/ProductList";
import { SingleProduct } from "./pages/SingleProduct";
import { Cart } from "./pages/Cart";
import { LogIn } from "./pages/LogIn";
import { Register } from "./pages/Register";
import { useSelector } from "react-redux";


function App()
{
  const user = useSelector(state => state.user.currentUser)
  return ( // Routes, Pages navigation

    <Router>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <LogIn />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />

      </Routes>

    </Router>

  );
};

export default App;
