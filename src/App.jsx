import "./App.css";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Products></Products>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
