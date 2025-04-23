
import { useEffect, useRef } from "react";
import { HeroList } from "../components/HeroList";
import { animate } from "animejs";
import { useAnimateTitle } from "../hooks/useAnimateTitle";

export const DcPage = () => {


  const titleRef = useAnimateTitle({
    translateY: { from: -10, to: 0 },
    duration: 500,
    delay: 200
  });

  return (
    <>
      <h1 ref={titleRef} className="font-bold justify-center text-center w-full my-5">
        DC Comics
      </h1>
      <hr />
      <HeroList publisher="DC Comics" />
    </>
  );
};
