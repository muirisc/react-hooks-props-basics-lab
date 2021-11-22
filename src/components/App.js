import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
// import Links from "./Links";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";


console.log(user);

function App() {
  return (
    <div>
      <NavBar/>
      <Home username={user.name} city={user.city} color={user.color}/>
      <About bio={user.bio} github={user.links.github} linkedin={user.links.linkedin} />
      {/* <Links /> */}
    </div>
  );
}

export default App;


// In the App component, pass down data from the user object as props to the Home component
//  so that it renders correctly. There is some starter code for you in the Home component that should give you a clue
//   as to what props this component takes in.

// App should also pass down a prop of bio to the About component.

// Finally, App should also pass down the github and linkedin links to the About component,
//  so that About can pass those props down to the Links component you will create.

