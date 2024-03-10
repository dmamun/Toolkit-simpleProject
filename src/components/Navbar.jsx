import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCartItems, selectCartTotalPrice } from "../redux/cartSlice";

const Navbar = () => {
    const cartItem=useSelector(selectCartItems);
    const cartItemTotal=useSelector(selectCartTotalPrice);
  return (
    <div className="grid grid-cols-3">
      <div>
        <Link to="/">Toolkit</Link>
      </div>
      <div>Total Price:{cartItemTotal}</div>
      <Link to="/cart">
        <button className="btn">
          cart
          <div className="badge badge-secondary">{cartItem.length}</div>
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
