import "./App.css";
import { Route, Routes } from "react-router";
import { HomePage } from "./HomePage";
import { Checkout } from "./Checkout";
import { OrdersPage } from "./OrdersPage";
import { Tracking } from "./Tracking";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="orders" element={<OrdersPage />} />
      <Route path="tracking" element={<Tracking />} />
    </Routes>
  );
}

export default App;
