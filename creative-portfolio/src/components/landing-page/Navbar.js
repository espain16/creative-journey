import React, { Component } from 'react';
import  { NavItems } from './NavItems';

class Navbar extends Component {
  render(){
    return(
      <nav>
        {NavItems.map((items, index) => {
          return (
            <a id={items.navId} key={index} href={items.navId}>{items.title}</a>
          )
        })}
      </nav>
    )
  }
}

export default Navbar;