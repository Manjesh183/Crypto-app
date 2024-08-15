import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./components/Home";
import Header from "./components/Header";
import Coins from "./components/Coins";
import CoinDetails from "./components/CoinDetails";
import Exchanges from "./components/Exchanges";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* below components render at diff path;Home will render after header ie fixed comp*/}
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/coindetails" element={<CoinDetails />} />
        <Route path="/exchanges" element={<Exchanges />} />

      </Routes>
    </Router>
  );
}

export default App;
