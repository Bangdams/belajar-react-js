import "./App.css";
import { Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage";
import { useEffect, useState } from "react";
import axios from "axios";
import { Checkout } from "./pages/Checkout/Checkout";
import { OrdersPage } from "./pages/Orders/OrdersPage";
import { TrackingPage } from "./pages/Tracking/TrackingPage";

function App() {
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    const apiCart = async () => {
      const response = await axios.get("/api/cart-items?expand=product");
      setCarts(response.data);
    };

    apiCart();
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage carts={carts} />} />
      <Route path="checkout" element={<Checkout carts={carts} />} />
      <Route path="orders" element={<OrdersPage carts={carts} />} />
      <Route path="tracking" element={<TrackingPage carts={carts} />} />
    </Routes>
  );
}

export default App;
