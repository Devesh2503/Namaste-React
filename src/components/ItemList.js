
import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemList = ({data})=>{
  
  const dispatch=useDispatch();
const handleAddItem=(item)=>{
//dispatch action
dispatch(addItem(item))
}

  return(
    <div className="">
     { 
      data.map((item)=>(
      <div key={ item.card.info.id} className="p-2 m-2 border-gray-400 border-b-2 text-left flex justify-between">
        
         <div className="w-9/12">
          <div >
              <span className="py-2">{item.card.info.name}</span>
              (<span className="font-bold">Rs.{(item.card.info.price || item.card.info.defaultPrice)/100}</span>)
          </div>
          <p>{item.card.info.description}</p>
          </div>
          <div >
          <button className="p-2 bg-black text-white absolute mt-0 rounded-lg" onClick={()=>handleAddItem(item)}>Add +</button>
         <img src={CDN_URL+ item.card.info.imageId } className=" w-[150px] p-2"></img>
         
         </div>
       </div>
      
        ))
        }

    </div>
  )
};

export default ItemList;