import React from 'react'
import { Button } from '../Button'
import { Menuitems } from './Menuitems'
import './Navbar.css'


const Navbar = () => {
    return (
       <nav className="navbaritems">
           <h1 className="navbar-logo">Ctrim-Api</h1>
           <ul className ="nav-menu">
              {Menuitems.map(( item,index)=>{
                  return (
                  <li key ={index}>
                      <a className={item.cName} href={item.url}>
                        {item.title}
                      </a>
                 </li>
              )})}

           </ul>
           <Button>Sign Up</Button>
       </nav>
    )
}

export default Navbar
