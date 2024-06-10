import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Footer from "./components/footer";
import Header from "./components/Header";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductDetails from "./screens/ProductDetails";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="my-3">
        <Container>
          <Routes>
          <Route path="/order/:id" element={<OrderScreen/>} />
          <Route path="/login" element={<LoginScreen/>} />
          <Route path="/payment" element={<PaymentScreen/>} />
          <Route path="/placeorder" element={<PlaceOrderScreen/>} />
          <Route path="/shipping" element={<ShippingScreen/>} />
          <Route path="/profile" element={<ProfileScreen/>} />
          <Route path="/register" element={<RegisterScreen/>} />
          <Route path="/cart/:id?" element={<CartScreen/>} />
          <Route path="/product/:id" element={<ProductDetails/>} />
          <Route path="/" element={<HomeScreen/>} exact />
        </Routes></Container>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
