import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, selectCartItems } from "../redux/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
    const dispatch=useDispatch()
  const cartItem = useSelector(selectCartItems);
  console.log(cartItem);
  return (
    <div className="grid grid-cols-3">
        {
            cartItem.length===0 && <div>
                <p>Your cart is empty</p>
                <Link to="/">Continue shopping</Link>
            </div>
        }
      {cartItem.map((item) => (
        
          <div key={item.id}className="card w-auto bg-base-100 shadow-xl">
            <figure>
              <img
                src={item.imgSrc}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p>{item.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        
      ))}
      {
        cartItem.length!=0 && <div>
             <div onClick={()=>dispatch(clearCart())}>ClearCart</div>

        </div>
      }
     
    </div>
  );
};

export default Cart;
