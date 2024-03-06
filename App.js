/* <div id="parent">
  <div id="child">
    <h1></h1>
  </div>
</div> */

const parent =React.createElement("div",{id:"parent"},[
  React.createElement("div",{id:"child"},
[React.createElement("hi",{},"I am an h1 tag"),React.createElement("h2",{},"I am an h2 tag")]),React.createElement("div",{id:"child2"},
[React.createElement("hi",{},"I am an h1 tag"),React.createElement("h2",{},"I am an h2 tag")])
])


const heading= React.createElement("h1",{ id: "heading"},"Hello  World  from React!!!..");
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(heading);
  

  root.render(parent)
  console.log(parent)



  /* <div id="parent">
  <div id="child">
    <h1></h1>
    <h2></h2>
  </div>
</div> */
// How do i add one more sibling to it i.e h2 tag to it
// third argument can be a single child or an array