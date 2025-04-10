import { Link, Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";
import { LoginPage } from "./LoginPage";
import { Navbar } from "./Navbar";
import { UserProvder } from "./context/UserProvider";

export const MainApp = () => {
  return (
    <UserProvder>
      <div>MainApp</div>
  
    <Navbar/>
      <hr />

      

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="login" element={<LoginPage />} />

       {/*  <Route path="/*" element={<LoginPage />} /> */}
       <Route path="/*" element={<Navigate to="/about"/>} />


      </Routes>
    </UserProvder>
  );
};
