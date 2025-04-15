/*
export const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
      
            <Link
                to="/"
                className="text-white text-lg font-bold flex items-center space-x-2 hover:text-gray-300 transition"
            >
                
                <span>Asociaciones</span>
            </Link>

        
            <div className="flex space-x-6">
                <NavLink
                    to="/marvel"
                    className={({ isActive }) =>
                        `flex items-center space-x-2 text-white hover:text-gray-300 transition ${
                            isActive ? 'border-b-2 border-white' : ''
                        }`
                    }
                >
                    <span>Marvel</span>
                </NavLink>
                <NavLink
                    to="/dc"
                    className={({ isActive }) =>
                        `flex items-center space-x-2 text-white hover:text-gray-300 transition ${
                            isActive ? 'border-b-2 border-white' : ''
                        }`
                    }
                >
                    <span>DC</span>
                </NavLink>
            </div>

      
            <NavLink
                to="/login"
                className="text-white flex items-center space-x-2 hover:text-gray-300 transition"
            >
                
                <span>Logout</span>
            </NavLink>
        </div>
    </nav>
    )
}*/

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,  
  Button,
} from "@heroui/react";

import { Link, NavLink } from 'react-router-dom';



export const NavbarHeroes = () => {
  return (
    <Navbar isBordered className="bg-gray-950">     
      <NavbarBrand >
        <Link color="foreground"  to="/">
          <p className="font-bold text-inherit text-white">Asociaciones</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem >
          <NavLink className={({ isActive }) =>
                        `flex items-center space-x-2 text-white hover:text-gray-300 transition ${
                            isActive ? 'active border-b-2 border-white' : ''
                        }`
                    } to="/marvel" >
            Marvel
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink className={({ isActive }) =>
                        `flex items-center space-x-2 text-white hover:text-gray-300 transition ${
                            isActive ? 'active border-b-2 border-white' : ''
                        }`
                    } to="/dc">
            DC
          </NavLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="gap-2">
          
          <span className="text-primary-400 font-bold  justify-items-center m-4">Jordan</span>
          {/* <NavLink to="/login" className="text-white" >            
              Login
          </NavLink> */}
          <Button className="bg-blue-400" as={Link} to="/login">Logout</Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
