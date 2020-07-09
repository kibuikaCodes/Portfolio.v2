import React from "react";
import { push as Menu } from "react-burger-menu";
import './style.css'

//  The sidebar uses styles from style.css in the layout folder 

export default props => {
  return (
    <Menu {...props} right elastic>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/projects">
        Projects
      </a>

      <a className="menu-item" href="/contact">
        Contact
      </a>

      <hr />
      <p className='menu-email'>kibuikasteve@gmail.com</p>
    </Menu>
  );
};