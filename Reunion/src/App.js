import Home from "./Components/Home";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Favourite from "./Components/Favourite";
import Sell from "./Components/Sell";


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Favourite_property" element={<Favourite />} />
        <Route path="/Selling_details" element={<Sell />} />
      </Routes>
    </div>
  );
}

export default App;
