import { CDN_URL } from "../../src/utils/constants";

const RestaurantCard=(props)=>{  
  const {resData}=props;

return (
  <div className="res-card m-4 p-4 w-[250px] min-h-[400px] rounded-lg shadow-lg hover:scale-[1.2] transition duration-700" >
  <div className="i">
  <img className="res-logo rounded-lg" alt="res-logo" src={CDN_URL + resData?.info?.cloudinaryImageId}></img>
  </div>
    <div className="">
    <h3 className="font-bold py-2">{ resData?.info?.name}</h3>
    <h4 className="k">{ resData?.info?.cuisines.join(", ")}</h4>
    <h4>{ resData?.info?.avgRating + " stars"}</h4>
    <h4>{ resData?.info?.costForTwo}</h4>
    </div>
    
  </div>
)
};


export const withPromotedLabel= (RestaurantCard)=>{

   return(props)=>{
    return(
     <div>
      <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
      <RestaurantCard {...props}/>
      </div>
    );
   };
}
export default RestaurantCard;