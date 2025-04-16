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
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";
import { useState } from "react";

import { Link, NavLink, useNavigate } from "react-router-dom";

export const NavbarHeroes = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login",{
      replace: true,
    });
  }

  const menuItems = [
    "Marvel",
    "Dc",  
  ];

  return (
    <Navbar
    maxWidth="full"
      isBordered
      className="bg-gray-950 "
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden text-white" justify="center">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="w-full" justify="start">
        <NavbarBrand >
          <Link to="/">
            <p className=" font-bold  text-white">Asociaciones</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <NavLink
            className={({ isActive }) =>
              `flex items-center space-x-2 text-white hover:text-gray-300 transition ${
                isActive ? "active border-b-2 border-white" : ""
              }`
            }
            to="/marvel"
          >
            Marvel
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            className={({ isActive }) =>
              `flex items-center space-x-2 text-white hover:text-gray-300 transition ${
                isActive ? "active border-b-2 border-white" : ""
              }`
            }
            to="/dc"
          >
            DC
          </NavLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem >
          <span className="text-primary-400 font-bold  justify-items-center m-4">
            Jordan
          </span>
          {/* <NavLink to="/login" className="text-white" >            
              Login
          </NavLink> */}
          <Button className="bg-blue-400" as={Link} to="/login" onPress={handleLogout}>
            Logout
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu  className=" bg-gray-950">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} >
            <Link
              className="w-full text-white  hover:text-gray-300 transition"
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              to={"/"+item.toLowerCase()}
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
              
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>

    </Navbar>
  );
};
