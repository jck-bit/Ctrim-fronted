import React from 'react'
import { Menuitems } from './Menuitems'
const Navbar = () => {
    return (
       <nav className="navbaritems">
           <h1 className="navbar-logo">Ctrim-api</h1>
           <div className="menu-icon"></div>
           <ul>
              {Menuitems.map((item, index)=>{
                  return (
                  <li key ={index}>
                      <a className={item.cname} href={item.url}>
                        {item.title}
                      </a>
                 </li>
              )})}

               <li><a className={tem.cname}></a></li>
           </ul>
       </nav>
    )
}

export default Navbar
