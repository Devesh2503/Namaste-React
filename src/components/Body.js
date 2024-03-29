import RestaurantCard , {withPromotedLabel} from "./Restaurant.js";
import { useState,useEffect} from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";
import {useContext} from "react";
const Body= ()=>{

  // state Variable => super power Variable. 
  const [listOFRestaurants, setListOFRestaurants]=useState([]); 
  const [filteredRestaurant,setFilteredRestaurant] =useState([]);

 const [searchText,setsearchText]=useState("");
  
 const RestaurantCardPromoted=withPromotedLabel(RestaurantCard);
  useEffect(()=>{
  fetchData();
  },[])
  

  const fetchData = async () => {
      const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json= await data.json();

      setListOFRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants) ; 
      setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

const onlineStatus=useOnlineStatus();

if(onlineStatus=== false)
return( <h1>Looks like u are offlin !!! Please chech your Internet Connection </h1>
)

const {setUserName,loggedInUser}=useContext(UserContext);
//Conditional rendering 
  if(listOFRestaurants.length===0){
    return <Shimmer/>
  }
  return(
    <div className="body">
     <div className="filter flex items-center justify-evenly">

        
      <div className="search m-4 p-4">
        <input type="text" 
        className="border border-solid border-black rounded" 
        value={searchText} 
        onChange={(e)=> {
          setsearchText(e.target.value);
       
        }}
        ></input>
        <button className="search-btn px-4 py-2 rounded-lg bg-green-100 m-4"
         onClick={()=>{
          //filter the restaurant card and update the UI
          //search text
         const filteredRestaurant= listOFRestaurants.filter(
     (res)=>res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredRestaurant(filteredRestaurant);
         }}
         >Search</button>


      </div>
      <div>
      <button className="filter-btn px-4 py-2 rounded-lg bg-green-100 m-4" onClick={()=>{
            const filteredList=listOFRestaurants.filter((res)=>res?.info?.avgRating>4.1);
        setFilteredRestaurant(filteredList); 
      }}>Top Rated Restaurants</button>
      </div>
      <div>
      <label className="font-bold">UserName</label>
        <input className="border border-black px-2 mx-2"value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}></input>
      </div>

     </div>
      <div className="res-container flex flex-wrap">
        {filteredRestaurant.map((restaurant )=>
         <Link key={restaurant?.info?.id} to={"/Restaurant/"+(restaurant?.info?.id)}>
         {
          restaurant?.info?.avgRating>4.3 ? <RestaurantCardPromoted resData={restaurant}/> : <RestaurantCard  resData={restaurant}/>
         }
         
         </Link>
           )
          }
      </div>
    </div>
  );
     

};

export default Body; 