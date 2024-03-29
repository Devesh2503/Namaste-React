import { useRouteError } from "react-router-dom";

const Error=()=>{ 

const err =useRouteError();
console.log(err);
  return (
<div>
  <h1>Oppps....!!!</h1>
  <h2>This is Namaste React</h2>
  <h3>{err.data}</h3>
</div>
  )
}

export default Error;

