import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategorie=({data,showItems,setShowIndex})=>{
// const [showItem,setShowItem]=useState(showItems);
const [cnt,setCnt]=useState(false)
  const handleClick=()=>{
    // setShowItem(showItems)
    setShowIndex();
   cnt?setCnt(false):setCnt(true);
  }
return(
  <div>
    {/* Header */}
    <div className="w-6/12 bg-gray-100 shadow-lg p-4  mx-auto my-6">
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
      <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
      <span>⬇</span>
      </div>
      { cnt && showItems && <ItemList data={data.itemCards}/>}
    </div>
    {/*Accordian Body*/}
      
  </div>
)
}

export default RestaurantCategorie;