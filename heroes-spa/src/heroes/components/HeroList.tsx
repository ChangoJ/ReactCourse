import { Card, CardBody, CardHeader, Image } from "@heroui/react";
import { getHeoresByPublisher } from "../helpers"

export const HeroList = ({publisher}:any) => {

    const heroes = getHeoresByPublisher(publisher);
    console.log({heroes});

    return (
        
        <div className="justify-items-center  gap-2 grid grid-cols-2 sm:grid-cols-3">
          {heroes.map(heroe => (
            <Card isPressable className="py-4" key={heroe.id}>
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">{heroe.superhero}</p>
                <small className="text-default-500">{heroe.publisher}</small>
                <h4 className="font-bold text-large">{heroe.alter_ego}</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt={heroe.id}
                  className="object-cover rounded-xl"
                  src="https://heroui.com/images/hero-card-complete.jpeg"
                  width={270}
                />
              </CardBody>
            </Card>
          ))}
        </div>
      );
    }
