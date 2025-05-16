import { Navbar, NavbarBrand, NavbarContent, Button, useSelect } from "@heroui/react";
import { Button as HeroButton } from "@heroui/react";

import { Icon } from "@iconify/react/dist/iconify.js";
import { ThemeToggleButton } from "../../theme/components/ThemeToggleButton";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../store/auth";

interface NavBarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export const NavBar = ({ isSidebarOpen, toggleSidebar }: NavBarProps) => {

  const dispatch = useDispatch<any>();

  const {displayName} = useSelector((state:any) => state.auth)

  const onLogout = () => {
    dispatch(startLogout())
  }

  return (
    <Navbar maxWidth="full" className="shadow-md">
      <div className="absolute top-3 right-2">
        <ThemeToggleButton />
      </div>
      <NavbarContent justify="start">
        <NavbarBrand>
          <HeroButton
            isIconOnly
            aria-label={isSidebarOpen ? "Hide sidebar" : "Show sidebar"}
            onClick={toggleSidebar}
            className="mr-2 bg-inherit"
          >
            {isSidebarOpen ? (
              <Icon
                className="pointer-events-none text-2xl text-default-400"
                icon="line-md:chevron-triple-left"
              />
            ) : (
              <Icon
                className="pointer-events-none text-2xl text-default-400"
                icon="line-md:close-to-menu-alt-transition"
              />
            )}
          </HeroButton>
          <p className="font-bold text-inherit">{displayName}</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end" className="mr-10">
        <Button className=" bg-inherit" onPress={onLogout} ><Icon icon="line-md:logout" width="30" height="30" /></Button>
      
      </NavbarContent>
    </Navbar>
  );
};