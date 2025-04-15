import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import {  NavbarHeroes } from "../ui";
import { DcPage, MarvelPage } from "../heroes";



export const AppRouter = () => {
  return (
    <>
    <NavbarHeroes />

      <Routes>
       {/*  <Route path="/" element={<HeroesApp />} /> */}
        <Route path="/marvel" element={<MarvelPage />} />
        <Route path="/dc" element={<DcPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/marvel" />} />
      </Routes>
    </>
  );
};
