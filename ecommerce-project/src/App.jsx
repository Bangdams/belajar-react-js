import "./App.css";
import { Route, Routes } from "react-router";
import { HomePage } from "./HomePage";
import { Checkout } from "./Checkout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="checkout" element={<Checkout />} />
    </Routes>
  );
}

export default App;
