import { Link as HeroLink } from "@heroui/react";
import { Link } from "react-router-dom";

interface SideBarProps {
  drawerWidth: number;
  isSidebarOpen: boolean;
}

export const SideBar = ({ drawerWidth, isSidebarOpen }: SideBarProps) => {
  const menuItems = [
    { name: "Profile", path: "/profile" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Activity", path: "/activity" },
    { name: "Analytics", path: "/analytics" },
    { name: "System", path: "/system" },
    { name: "Deployments", path: "/deployments" },
    { name: "My Settings", path: "/settings" },
    { name: "Team Settings", path: "/team-settings" },
    { name: "Help & Feedback", path: "/help" },
    { name: "Log Out", path: "/logout" },
  ];

  return (
    <div
      className={`fixed  top-0 left-0 h-screen bg-background shadow-lg transition-all duration-300 ${
        isSidebarOpen ? `w-[${drawerWidth}px]` : "w-0"
      } overflow-hidden`}
    >
      <div className="p-4">
        <h2 className="text-lg font-bold mb-4 ">Jordan Chango</h2>
        <ul>
          {menuItems.map((item, index) => (
            <li key={`${item.name}-${index}`} className="mb-2">
              <HeroLink
                as={Link}
                to={item.path}
                className="block p-2 rounded hover:bg-primary hover:text-white"
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
              >
                {item.name}
              </HeroLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};