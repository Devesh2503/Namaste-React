import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { lazy , Suspense } from "react";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import RestaurantCard from "./components/Restaurant.js";
import { createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.js";

//import Grocery from "./components/Grocery.js";

const root=ReactDOM.createRoot(document.querySelector("#root"));

const Grocery=lazy(()=>import("./components/Grocery.js"));
const AppLayout= ()=>{
  const [userName,setUserName]=useState("");
 useEffect(()=>{
 const data={
 name:"Devesh Gadhave",
 };
 setUserName(data.name);
 },[]) 
  return(
     <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
       <div className="app">
     <Header/>
    <Outlet/>
     </div>
     </UserContext.Provider>
     </Provider>
    
  )
};

const appRouter=createBrowserRouter([
  {
    path:"/",
    element: <AppLayout />,
    children:[
      {
        path:"/",
        element: <Body/>,
        errorElement:<Error/>
      },
      {
        path:"/about",
        element: <About/>,
        errorElement:<Error/>
      },
      {
        path:"/contact",  
        element: <Contact/>,
        errorElement:<Error/>
      } ,
      {
        path:"/cart",  
        element: <Cart/>,
        errorElement:<Error/>
      } ,
    {
      path:"/grocery",
      element:<Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>,
      errorElement:<Error/>
    },
      {
         path:"/Restaurant/:resId",
         element:<RestaurantMenu/>,
         errorElement:<Error/>
      }
    ],
    errorElement: <Error/>
  },
  
])

root.render(<RouterProvider  router={appRouter}/>);
 