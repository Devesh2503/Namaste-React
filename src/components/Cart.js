import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
const Cart=()=>{
const dispatch=useDispatch()
  const cartItems=useSelector((store)=>store.cart.items)
const handleClearCart=()=>{
dispatch(clearCart());
}
  return(
 <div className="text-center m-4 p-4">
 <h1 className="text-2xl font-bold">Cart</h1>
 
 <div className="w-6/12 m-auto">
 <button className="p-2 m-2 bg-black text-white rounded-lg font-bold"
 onClick={ handleClearCart}> Clear Cart</button>
 {cartItems.length==0 && <h1>Cart is Empty , Add items to the cart</h1>}
 <ItemList data={cartItems}/> 
 </div>
 
 </div>
  );
}

export default Cart;