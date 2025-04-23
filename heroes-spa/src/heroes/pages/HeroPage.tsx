import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroByid } from "../helpers";
import { Button, Image } from "@heroui/react";
import { useEffect, useMemo, useRef } from "react";
import { animate } from "animejs";
import { useAnimateTitle } from "../hooks/useAnimateTitle";

export const HeroPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const titleRef = useAnimateTitle({
    translateY: { from: -50, to: 0 },
    duration: 1000,
    delay: 500
  });

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

  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current) {
      animate(imageRef.current, {
        opacity: { from: .5 }, // Animate from .5 opacity to 1 opacity
        translateX: { from: '100rem', delay: 300 }, // From 16rem to 0rem
        rotate: {
          from: '3turn', // From -.75turn to 0turn
          ease: 'inOutQuad',
          //delay: 3000,
        },
        //skew: 5,
      });
    }
  }, []);
  
  return (
    <div className="mt-5 flex flex-row">
    
      <div ref={imageRef} className=" flex justify-start mr-10">
        <Image
        
        //isZoomed
          isBlurred
          alt="HeroUI Album Cover"
          className=" mx-5"
          src={heroImageUrl}
          width={350}
        />
      </div>

      <div className="w-2/3 flex flex-col justify-start mr-4">
        <div className=" flex flex-col justify-start ">
          <h1 ref={titleRef} className="font-bold text-2xl mb-4">{hero.superhero}</h1>
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
