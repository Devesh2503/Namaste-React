import { CDN_URL } from "../../src/utils/constants";

const RestaurantCard=(props)=>{  
  const {resData}=props;

return (
  <div className="res-card" >
  <div className="i">
  <img className="res-logo" alt="res-logo" src={CDN_URL + resData?.info?.cloudinaryImageId}></img>
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

export default RestaurantCard;