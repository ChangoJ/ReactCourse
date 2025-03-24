import { useLayoutEffect, useRef, useState } from "react";

export const PokemonCard = ({ id, name, sprites = [] }: any) => {

  const h2Ref = useRef<HTMLHeadingElement>(null);
   const [boxSize, setBoxSize] = useState({width : 0, height: 0});

  useLayoutEffect(() => {
    const {height, width} = h2Ref.current!.getBoundingClientRect();
    console.log({height, width})
    setBoxSize({width, height})

  }, [name]);

  return (
    <section style={{ height:200, display: "flex", flexDirection: "row" }}>
      <h2 ref={h2Ref} className="text-capitalize">
        #{id} - {name}
      </h2>

      <div>
        {sprites.map((sprite: any) => (
          <img key={sprite} src={sprite} alt={name} />
        ))}
      </div>

      <div>
        {JSON.stringify(boxSize)}
      </div>

    </section>
  );
};
