import {LOGO_URL} from "../utils/constants";
import { useState,useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header=()=>{

const [btnNameReact,setbtnNameReact]=useState("Login");

const {loggedInUser}=useContext(UserContext);

  const onlineStatus=useOnlineStatus();

  const cartItems=useSelector((store)=> store.cart.items );
  console.log(cartItems);

  return(<div className="flex justify-between shadow-md items-center">
    <div className="logo-container">
      <img className="w-[100px] h-[70px]" src={LOGO_URL} alt="img"></img>
    </div>
    <div className="nav-item">
      <ul className="flex p-4 m-4 justify-between min-w-[850px] ">
      <li>
      <Link to="/grocery">Grocery</Link>
      </li>
      <li >
        Online Status: {onlineStatus==true?"✅":"🔴"}
      </li>
       <li>
       <Link to="/">Home</Link>
       </li> 
       <li>
       <Link to="/about">About US</Link>
       </li> 
       <li>
         <Link to="/contact">Contact US</Link>
       </li> 
       <li className="font-bold text-xl"><Link to="/cart">Cart-({cartItems.length} items)</Link></li> 
       <button className="Login" onClick={()=>{
       const btnName=btnNameReact==="Login"?"Logout":"Login";
       setbtnNameReact(btnName)
       }} >{btnNameReact}</button>
       <li className="px-4 font-bold">{loggedInUser}</li>
      </ul>
    </div>
  </div>);
  };

  export default Header;