import { Card, CardBody, CardHeader, Image } from "@heroui/react";
import { getHeoresByPublisher } from "../helpers"
import { HeroCard } from "./HeroCard";
import { useMemo } from "react";

export const HeroList = ({publisher}:any) => {

    const heroes = useMemo(() => getHeoresByPublisher(publisher) , [publisher]);

   

    return (
        
        <div className="justify-items-center  gap-2 grid grid-cols-2 sm:grid-cols-3 mt-4">
          {heroes.map((heroe:any) => (
           <HeroCard  key={heroe.id} {...heroe}/>
          ))}
        </div>
      );
    }
