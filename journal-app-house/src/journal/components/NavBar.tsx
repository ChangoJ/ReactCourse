import { Navbar, NavbarBrand, NavbarContent, Button } from "@heroui/react";
import { Button as HeroButton } from "@heroui/react";

import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import { ThemeToggleButton } from "../../theme/components/ThemeToggleButton";

interface NavBarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export const NavBar = ({ isSidebarOpen, toggleSidebar }: NavBarProps) => {
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
          <p className="font-bold text-inherit">Journal</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end" className="mr-10">
        <Link to="/auth/login">Login</Link>
        <Button as={Link} color="primary" to="/auth/register" variant="flat">
          Registrarse
        </Button>
      </NavbarContent>
    </Navbar>
  );
};