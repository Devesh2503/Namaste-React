import UserClass from "./UserClass";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
const About=()=>{
  const {loggedInUser}=useContext(UserContext)
  return (
    <div>
      <h1>About</h1>
      <h2>This is Namaste React</h2>
      <h2>loggedInUser:{loggedInUser}</h2>
      <UserClass name={"Devesh Gadhave"} location={"Pune"}/>
      
    </div>
  )
}

export default About;