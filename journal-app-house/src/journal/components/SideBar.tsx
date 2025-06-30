import { useSelector } from "react-redux";
import { SideBarItem } from "./SideBarItem";

interface SideBarProps {
  drawerWidth: number;
  isSidebarOpen: boolean;
}

export const SideBar = ({ drawerWidth, isSidebarOpen }: SideBarProps) => {
  const { displayName } = useSelector((state: any) => state.auth);
  const { notes } = useSelector((state: any) => state.journal);

  const menuItems = [
    { name: "Profile", path: "/profile" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Activity", path: "/activity" },
    { name: "Analytics", path: "/analytics" },
    { name: "System", path: "/system" },
    { name: "Deployments", path: "/deployments" },
    { name: "My Settings", path: "/settings" },
    { name: "Team Settings ", path: "/team-settings" },
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
        <ul>
          {notes.map((note: any) => (
            <SideBarItem key={note.id} {...note} />
          ))}
        </ul>
      </div>
    </div>
  );
};
