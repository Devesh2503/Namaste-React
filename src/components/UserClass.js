import React from "react"

class UserClass extends React.Component {

  constructor(props){
super(props);
this.state={
userInfo:{
  name:"Dummy",
  login:"Dummy",
  avatar_url:"",
}
};
}

 async componentDidMount(){
const data= await fetch("https://api.github.com/users/Devesh2503");
const json=await data.json();


this.setState({
  userInfo:json,
});
 }
render(){
const {name,login,avatar_url}=this.state.userInfo;

  return(
   <div className="class-user">
   <img src={avatar_url}></img>
    <h1>Name:{name}</h1>
    <h2>Login:{login}</h2>
    <h3>Contact: 7058807936</h3>
   </div>
  )
}

};
export default UserClass;