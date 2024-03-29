import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategorie from "./RestaurantCategorie";
import { useState } from "react";
const RestaurantMenu =()=>{
 const {resId}=useParams();
 
const resInfo=useRestaurantMenu(resId);
console.log(resInfo)
const [showIndex,setShowIndex]=useState(null);
  if(resInfo===null){
    return <Shimmer/> 
  }

  
  const {name,cuisines,costForTwoMessage,id}=resInfo?.cards[2]?.card?.card?.info;

  const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;

  const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"]==
  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

  

  return (  
  <div className="text-center" >
    <h1 className="font-bold my-6 text-2xl ">{name}</h1>
     <h2 className="font-bold text-lg"> {cuisines.join(", ")} - {costForTwoMessage}</h2>
     {
      categories.map((category,i)=><RestaurantCategorie key={category?.card?.card.title} data={category?.card?.card}
        showItems={(i==showIndex) ?true:false}
        setShowIndex={()=> setShowIndex(i)}
        
      />)
     }
  </div>
  );
};

export default RestaurantMenu;