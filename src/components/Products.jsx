import React from "react";
import { products } from "../redux/data";

import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCartItems } from "../redux/cartSlice";

const Products = () => {
    const dispatch=useDispatch()
    const selector=useSelector(selectCartItems);
    console.log("selected item:",selector)
    const handleAddtoCart=(item)=>{
        console.log(item)
        dispatch(addToCart(item))

    }
  return (
    <div className="grid grid-cols-3 gap-6">
      {products.map((item) => (
        <div
          key={item.id}
          className="max-w-md bg-slate-400 w-full p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          <h2 className="text-2xl font-semibold mb-4">{item.category}</h2>

          <div className="flex items-center border-b border-gray-300 pb-4">
            <img
              src={item.imgSrc}
              alt="Product"
              className="w-16 h-16 object-cover rounded mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600">Price:{item.price}Tk</p>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-xl font-semibold">Total: {item.price}Tk</p>
            <button onClick={()=>handleAddtoCart(item)} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
              Add To Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
