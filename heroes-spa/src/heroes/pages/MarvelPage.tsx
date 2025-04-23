import { HeroList } from "../components/HeroList"
import { useAnimateTitle } from "../hooks/useAnimateTitle";

export const MarvelPage = () => {


  const titleRef = useAnimateTitle({
    translateY: { from: -10, to: 0 },
    duration: 500,
    delay: 200
  });

    return (
       <>
           <h1 ref={titleRef} className="font-bold justify-center text-center w-full my-5">Marvel Comics </h1>
           <hr />
           <HeroList publisher="Marvel Comics" />
     
           </>
    )
  }
  