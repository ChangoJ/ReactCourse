import { HeroList } from "../components/HeroList"

export const MarvelPage = () => {
    return (
       <>
           <h1 className="font-bold justify-center text-center w-full my-5">Marvel Comics </h1>
           <hr />
           <HeroList publisher="Marvel Comics" />
     
           </>
    )
  }
  