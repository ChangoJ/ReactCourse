import { Navigate, Route, Routes } from "react-router-dom"
import { NavbarHeroes } from "../../ui"
import { DcPage, MarvelPage } from "../pages"
import { SearchPage } from "../pages/SearchPage"
import { HeroPage } from "../pages/HeroPage"


export const HeroesRoutes = () => {
  return (
    <>
    <NavbarHeroes />

    <div className="container">
    <Routes>
           {/*  <Route path="/" element={<HeroesApp />} /> */}
            <Route path="marvel" element={<MarvelPage />} />
            <Route path="dc" element={<DcPage />} />

            <Route path="search" element={<SearchPage />} />
            <Route path="hero" element={<HeroPage />} />
            
            <Route path="/" element={<Navigate to="/marvel" />} />
          </Routes>
    </div>

    
    </>
  )
}
