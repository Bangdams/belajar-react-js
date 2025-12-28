import "./App.css";
import { Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage";
import { Checkout } from "./pages/Checkout";
import { OrdersPage } from "./pages/OrdersPage";
import { TrackingPage } from "./pages/TrackingPage";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    axios.get("/api/cart-items?expand=product").then((response) => {
      setCarts(response.data);
    });
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage carts={carts} />} />
      <Route path="checkout" element={<Checkout carts={carts} />} />
      <Route path="orders" element={<OrdersPage />} />
      <Route path="tracking" element={<TrackingPage />} />
    </Routes>
  );
}

export default App;
