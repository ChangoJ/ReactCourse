import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroByid } from "../helpers";
import { Button, Image } from "@heroui/react";
import { useMemo } from "react";

export const HeroPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => {
    return getHeroByid(id!);
  }, [id]);
  console.log(hero);

  const HandleReturn = () => {
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  const heroImageUrl = `/assets/heroes/${id}.jpg`;

  return (
    <div className="mt-5 flex flex-row">
      <div className=" flex justify-start mr-10">
        <Image
          isBlurred
          alt="HeroUI Album Cover"
          className="mx-5"
          src={heroImageUrl}
          width={350}
        />
      </div>

      <div className="w-2/3 flex flex-col justify-start mr-4">
        <div className=" flex flex-col justify-start ">
          <h1 className="font-bold text-2xl mb-4">{hero.superhero}</h1>
          <p className="pl-4 border-b">
            <b>Alter_ego: </b> {hero.alter_ego}
          </p>
          <p className="pl-4 border-b">
            <b>Publisher: </b>
            {hero.publisher}
          </p>
          <p className="pl-4 border-b">
            <b>First_appearance: </b>
            {hero.first_appearance}
          </p>
        </div>
        <div className=" flex flex-col justify-start mt-4">
          <h5 className="font-bold mb-4">Characters</h5>
          <p>{hero.characters}</p>
        </div>
        <div className="w-1/2 mt-5">
          <Button color="primary" onPress={HandleReturn}>
            Regresar
          </Button>
        </div>
      </div>
    </div>
  );
};
