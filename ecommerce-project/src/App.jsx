import "./App.css";
import { Route, Routes } from "react-router";
import { HomePage } from "./HomePage";
import { Checkout } from "./Checkout";
import { OrdersPage } from "./OrdersPage";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="orders" element={<OrdersPage />} />
    </Routes>
  );
}

export default App;
