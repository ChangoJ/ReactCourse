import { ReactNode, useEffect, useState } from "react";
import { NavBar, SideBar } from "../components";
import { animate } from "animejs";

const drawerWidth = 250;

interface JournalLayoutProps {
  children: ReactNode;
}

export const JournalLayout = ({ children }: JournalLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    animate(".square", {
      scale: [0.5, 1],
      duration: 500,
      ease: "inOutSine",
    });
  }, []);

  return (

    
    <div className="square flex min-h-screen">

      
      <SideBar isSidebarOpen={isSidebarOpen} drawerWidth={drawerWidth} />
      <div
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? `ml-[${drawerWidth}px]` : "ml-0"
        }`}
      >
        <NavBar  toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        <div  className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? `ml-44` : "ml-9"
        }`}>{children}</div>
      </div>
      
    </div>
  );
};