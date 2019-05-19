import React, { Component } from "react";

const NavBar = ({totalCounters}) => {
  console.log('Navbar-Rendered');
  return (  <nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">
    Navbar{" "}
    <span className="badge badge-pill badge-secondary">
      {totalCounters}
    </span>
  </a>
</nav> );
}
 
export default NavBar;

// class NavBar extends Component {
//   render() {
//     return (
     
//     );
//   }
// }

// export default NavBar;
