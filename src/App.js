import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import RestaurantCard from "./components/Restaurant.js";

const root=ReactDOM.createRoot(document.querySelector("#root"));
 


const RestaurantCard=(props)=>{  
  
  const {resData}=props;

return (
  <div className="res-card" >
  <div className="i">
  <img className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ resData?.info?.cloudinaryImageId}></img>
  </div>
    <div className="p">
    <h3>{ resData?.info?.name}</h3>
    <h4 className="k">{ resData?.info?.cuisines.join(", ")}</h4>
    <h4>{ resData?.info?.avgRating + " stars"}</h4>
    <h4>{ resData?.info?.costForTwo}</h4>
    </div>
    
  </div>
)
};


const AppLayout= ()=>{
  return(
     <div className="app">
     <Header/>
     <Body/>
     </div>
  )
};
root.render(<AppLayout/>);
 