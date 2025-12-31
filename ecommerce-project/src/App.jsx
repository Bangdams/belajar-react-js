import "./App.css";
import { Route, Routes } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { Checkout } from "./pages/Checkout/Checkout";
import { OrdersPage } from "./pages/Orders/OrdersPage";
import { TrackingPage } from "./pages/Tracking/TrackingPage";
import { HomePage } from "./pages/Home/HomePage";

function App() {
  const [carts, setCarts] = useState([]);

  const loadCart = async () => {
    const response = await axios.get("/api/cart-items?expand=product");
    setCarts(response.data);
  };

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage carts={carts} loadCart={loadCart} />} />
      <Route
        path="checkout"
        element={<Checkout carts={carts} loadCart={loadCart} />}
      />
      <Route path="orders" element={<OrdersPage carts={carts} />} />
      <Route path="tracking" element={<TrackingPage carts={carts} />} />
    </Routes>
  );
}

export default App;
