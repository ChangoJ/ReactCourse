import { ReactNode, useState } from "react";
import { NavBar, SideBar } from "../components";


const drawerWidth = 250;

interface JournalLayoutProps {
  children: ReactNode;
}

export const JournalLayout = ({ children }: JournalLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex min-h-screen">
      <SideBar isSidebarOpen={isSidebarOpen} drawerWidth={drawerWidth} />
      <div
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? `ml-[${drawerWidth}px]` : "ml-0"
        }`}
      >
        <NavBar  toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        <div  className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? `ml-0` : "ml-9"
        }`}>{children}</div>
      </div>
    </div>
  );
};