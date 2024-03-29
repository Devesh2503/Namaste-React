import RestaurantCard from "./Restaurant.js";
import { useState } from "react";
import resObj from "../utils/mockData";
const Body= ()=>{
  // state Variable => super power Variable. 
  let [listOFRestaurants, setListOFRestaurants]=useState(resObj); 


  return(
    <div className="body">
      <span>
      <div className="search">
        <input className="search-input" placeholder="Search for products, brands and more"></input>
      </div>
      <div>
      <button className="filter-btn" onClick={()=>{
          
        const filteredList=listOFRestaurants.filter(res=>res?.info?.avgRating>4);
        setListOFRestaurants(filteredList); 
      }}>Top Rated Restaurants</button>
      </div>
      </span>

      <div className="res-container">
        {
          listOFRestaurants.map((restaurant )=> <RestaurantCard key={restaurant?.info?.id} resData={restaurant}/> )
        }
         
        
      </div>
    </div>
  );
     

};

export default Body; 